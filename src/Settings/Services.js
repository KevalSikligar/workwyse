import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { Button } from 'antd';
import { connect } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { editSellerServices } from '../Services/SellerService';
import { getUserInfo } from '../Services/Authentication';
import { ONE_OFF, MONTHLY, getUserDetail, setUserDetail } from '../const';
import { findIndex, isNaN } from 'lodash';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';
class Services extends React.Component {

  state = {
    categoryName: [],
    selectedTag: [],
    suggestions: [],
    value: '',
    count: 0,
    tagID: [],
    allNames: [],
    dataSource: [],
    userDetails: null,
    sellerServices: [],
    _sellerServices: [],
    filteredName: []
  };

  componentDidMount() {
    this.setState({ userDetails: getUserDetail() }, () => {
      var _sellerServices = []
      this.state.userDetails.sellerServices.map(o => {
        var index = findIndex(_sellerServices, { categoryId: o.categoryId })
        if (index >= 0) {
          var tags = _sellerServices[index].tags || []
          tags.push(o)
          _sellerServices[index].tags = tags
        } else {
          if (o.tagId) {
            _sellerServices.push({
              categoryId: o.categoryId,
              categoryName: o.categoryName,
              isMain: true,
              tags: [o]
            })
          } else {
            _sellerServices.push({
              categoryId: o.categoryId,
              categoryName: o.categoryName,
              isMain: false,
              tags: [o]
            })
          }
        }
      });
      this.setState({ sellerServices: this.state.userDetails.sellerServices || [], _sellerServices }, () => {
        const unique = [...new Set(this.state.sellerServices.map(item => item.categoryName))]
        this.setState({ filteredName: unique });
      });
    });
  }

  onChange = (event, { newValue }) => {
    event.preventDefault();
    const { dataSource } = this.state
    var _dataSource = Object.assign([], dataSource);
    var index = _dataSource.findIndex(data => data.id == event.target.name);
    _dataSource[index].textBox = newValue
    this.setState({ value: newValue }, async () => {
      if (this.state.value.length <= 0) {
        _dataSource[index].suggestions = []
        this.setState({ dataSource: _dataSource });
      } else {
        try {
          const resp = await axiosInterceptor.get(process.env.REACT_APP_API_URL + `api/Category/All/${this.state.value}`);
          _dataSource[index].suggestions = resp.data ? resp.data : []
          this.setState({ dataSource: _dataSource });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      id: count,
      suggestions: [],
      textBox: "",
      categoryId: null,
      tags: []
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleNewSave = () => {
    var temp = [...this.state.userDetails.sellerServices]
    const { dataSource } = this.state
    dataSource.map(o => {
      o.tags.map(tag => {
        temp.push({
          sellerId: getUserDetail('companyId'),
          categoryId: tag.categoryId,
          tagId: tag.tagId,
          oneOffRate: tag.oneOff,
          monthlyRate: tag.monthly,
          hourlyStartRate: tag.hourlyStartRate,
          hourlyEndRate: tag.hourlyEndRate,
          serviceType: 1,
          id: 0,
        })
      })
    })
    editSellerServices(temp).then(res => {
      if (res.status === 200) {
        getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
          userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
          userInfo.data.roles = userInfo.data.roles[0]
          setUserDetail(userInfo.data)
          this.setState({ sellerServices: userInfo.data.sellerServices })
          window.location.reload()
        }).catch(err => {
          // console.log('err => ', err);
        });
      }
    }).catch(err => {
    })
  }

  handleDelete = id => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.id !== id) });
  }

  closeSuggestion = id => {
    var dataSource = [...this.state.dataSource];
    dataSource[id].suggestions = []
    this.setState({ dataSource });
  }

  selectedTags = (e, tagSelected, tagName, categoryName, categoryId, tagId, index = false) => {
    const dataSource = [...this.state.dataSource];
    if (tagName === null && tagId === null) {
      if (e.target.checked) {
        // add all tags
        var temp = []
        dataSource[index].textBox = categoryName
        dataSource[index].categoryId = categoryId;
        if (dataSource[index].suggestions && dataSource[index].suggestions[0]) {
          var _index = dataSource[index].suggestions.findIndex(data => data.categoryId == categoryId);
          if (_index >= 0 && dataSource[index].suggestions[_index].tags.length > 0) {
            dataSource[index].suggestions[_index].tags.map((tag, index) => {
              temp.push({ categoryId: categoryId, tagId: tag.id, tagName: tag.name, monthlyRate: 0, oneOffRate: 0, hourlyStartRate: '', hourlyEndRate: '', serviceType: 1 })
            })
          } else {
            dataSource[index].isMain = true;
            dataSource[index].tags = [{ categoryId: categoryId, tagId: null, tagName: null, monthlyRate: 0, oneOffRate: 0, hourlyStartRate: '', hourlyEndRate: '', serviceType: 1 }];
          }
          dataSource[index].tags = temp
        } else {
          dataSource[index].isMain = true;
          dataSource[index].categoryId = categoryId;
          dataSource[index].tags = [{ categoryId: categoryId, tagId: null, tagName: null, monthlyRate: 0, oneOffRate: 0, hourlyStartRate: '', hourlyEndRate: '', serviceType: 1 }];
        }
        dataSource[index].suggestions = []
      } else {
        // remove all tags
        dataSource[index].tags = []
      }
      this.setState({ dataSource })
    } else {
      if (index !== false) {
        dataSource[index] = { ...dataSource[index], textBox: categoryName, categoryId: categoryId }
        if (e.target.checked) {
          if (index !== false && tagId !== null) {
            let tags = dataSource[index].tags || []
            tags.push({ categoryId: categoryId, tagId: tagId, tagName: tagName, monthlyRate: 0, oneOffRate: 0, hourlyStartRate: '', hourlyEndRate: '', serviceType: 1 })
            dataSource[index] = { ...dataSource[index], tags }
          } else {
            dataSource[index].isMain = true;
            dataSource[index].tags = [{ categoryId: categoryId, tagId: null, tagName: null, monthlyRate: 0, oneOffRate: 0, hourlyStartRate: '', hourlyEndRate: '', serviceType: 1 }];
          }
          this.setState({ dataSource })
        } else {
          let tags = dataSource[index].tags || []
          var i = tags.findIndex(data => data.tagId == tagId);
          tags.splice(i, 1)
          dataSource[index].tags = tags
          this.setState({ dataSource })
        }
      }
    }
  }

  removeRow = (rowId) => {
    var dataSource = [...this.state.dataSource];
    dataSource.splice(rowId, 1)
    this.setState({
      dataSource,
      count: this.state.count - 1
    });
  }

  removeTag = (rowId, tagId) => {
    var dataSource = [...this.state.dataSource];
    var tags = dataSource[rowId].tags
    var index = tags.findIndex(data => data.tagId == tagId);
    tags.splice(index, 1)
    if (tags.length <= 0) {
      this.removeRow(rowId)
    } else {
      dataSource[rowId].tags = tags
      this.setState({ dataSource })
    }
  }

  priceSelectionForNewRecords = (obj) => {
    var dataSource = [...this.state.dataSource];
    var tags = dataSource[obj.rowIndex].tags
    if (obj.tagIndex !== null) {
      tags[obj.tagIndex][obj.type] = parseInt(obj.value)
      dataSource.tags = tags
      this.setState({ dataSource })
    } else {
      var _tags = dataSource[obj.rowIndex].tags[0]
      _tags = {
        ..._tags,
        sellerId: getUserDetail('companyId'),
        categoryId: dataSource[obj.rowIndex].categoryId,
        serviceType: 1,
        id: 0,
        [obj.type]: parseInt(obj.value)
      }
      dataSource[obj.rowIndex].tags = [_tags]
      this.setState({ dataSource })
    }
  };

  isCheckedTag = (recordId, tagId) => {
    const { dataSource } = this.state
    var index = dataSource[recordId].tags.findIndex(data => data.tagId == tagId);
    if (index >= 0) {
      return true
    } else {
      return false
    }
  }

  isAllCheckedTag = (recordId, categoryId) => {
    const { dataSource } = this.state
    if (dataSource[recordId].tags.length === dataSource[recordId].suggestions[0].tags.length) {
      return true
    } else {
      return false
    }
  }

  enableEditMode = (categoryIndex, tagIndex) => {
    var { _sellerServices } = this.state;
    var sellerServices = Object.assign([], _sellerServices)
    sellerServices[categoryIndex].tags[tagIndex].isEdit = true;
    this.setState({ _sellerServices: sellerServices })
  }

  updateRecord = (categoryIndex, tagIndex) => {
    var { _sellerServices } = this.state;
    var temp = []
    _sellerServices.forEach(ele => {
      ele.tags.forEach(tag => {
        temp.push(tag)
      });

    });
    editSellerServices(temp).then(res => {
      if (res.status === 200) {
        getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
          userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
          userInfo.data.roles = userInfo.data.roles[0]
          setUserDetail(userInfo.data)
          var { _sellerServices } = this.state;
          var sellerServices = Object.assign([], _sellerServices)
          sellerServices[categoryIndex].tags[tagIndex].isEdit = false;
          this.setState({ _sellerServices: sellerServices })
        }).catch(err => {
        });

      }
    }).catch(err => {
    })
  }


  getOneOffRate = (val) => {
    var data = ONE_OFF.find(o => o.value === val)
    if (data) {
      return data.label
    } else {
      return ""
    }
  }

  getMonthly = (val) => {
    var data = MONTHLY.find(o => o.value === val)
    if (data) {
      return data.label
    } else {
      return ""
    }
  }

  priceSelectionForUpdateRecords = (data) => {
    var value = data.value
    if (value && isNaN(value)) {
      value = parseInt(value)
    }
    var type = data.type
    var categoryIndex = data.categoryIndex
    var tagIndex = data.tagIndex
    var sellerServices = Object.assign([], this.state._sellerServices);
    sellerServices[categoryIndex].tags[tagIndex][type] = value;
    this.setState({ sellerServices: sellerServices })
  }

  validate = (evt) => {
    var theEvent = evt || window.event;
    // Handle paste
    if (theEvent.type === 'paste') {
      key = evt.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  render() {

    const pathList = [{ to: "/service-setting", title: "Services" }]

    const { dataSource, _sellerServices } = this.state;

    return (
      <div>
        <BreadCrumbs title="Services" breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-12 col-md-12">
              <SideNav />
            </div>
            <div className="col-xl-9 col-lg-12 col-md-12">
              <div className="sptb">
                <div className="card mb-0">
                  <div className="card-header">
                    <h3 className="card-title">Services Offering</h3>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <div className="seleted-services multiselect">
                        {this.state.filteredName.map(res => (
                          <button type="button" className="badge seleted_serbtn">{res}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card-header">
                    <h3 className="card-title">Service Rates</h3>
                  </div>
                  <div className="card-body">
                    {/* <div className="form-group"> */}
                    {/* <label className="form-label">Search Services</label> */}
                    {/* <input type="text" className="form-control" placeholder="Search for the available services..." /> */}
                    {/* </div> */}
                    <table className="services-table table-bordered table-responsive">
                      <thead className="text-center">
                        <tr>
                          <th></th>
                          <th>One Off</th>
                          <th>Monthly</th>
                          <th width="30%">Hourly</th>
                          <th></th>
                        </tr>
                      </thead>
                      <>
                        <>
                          {_sellerServices.map((o, categoryIndex) => (
                            <>
                              <thead>
                                <tr>
                                  <th colSpan={o.isMain ? 5 : 0}>{`${o.categoryName}`}</th>
                                  {
                                    !o.isMain && <>
                                      <th>
                                        {
                                          o.tags[0].isEdit ?
                                            <select className="form-control" onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex: 0, value: e.target.value, type: "oneOffRate", categoryId: o.tags[0].categoryId, tagId: o.tags[0].tagId })}>
                                              {ONE_OFF.map((oneOf, index) =>
                                                <option value={oneOf.value}>{oneOf.label}</option>
                                              )}
                                            </select> : <p>{this.getOneOffRate(parseInt(o.tags[0].oneOffRate)) || ""}</p>
                                        }
                                      </th>
                                      <th>
                                        {
                                          o.tags[0].isEdit ?
                                            <select className="form-control" onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex: 0, value: e.target.value, type: "monthlyRate", categoryId: o.tags[0].categoryId, tagId: o.tags[0].tagId })}>
                                              {MONTHLY.map((month, index) =>
                                                <option value={month.value}>{month.label}</option>
                                              )}
                                            </select> : <p>{this.getMonthly(parseInt(o.tags[0].monthlyRate))}</p>
                                        }
                                      </th>
                                      <th>
                                        <div className="hourly-rates">
                                          {o.tags[0].isEdit ?
                                            <>
                                              £ <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} value={`${o.tags[0].hourlyStartRate}`} onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex: 0, value: e.target.value, type: "hourlyStartRate", categoryId: o.tags[0].categoryId, tagId: o.tags[0].tagId })} />
                                            </>
                                            :
                                            `£ ${o.tags[0].hourlyStartRate}`
                                          }
                                          <b className="px-3 fs-16">-</b>
                                          {o.tags[0].isEdit ?
                                            <>
                                              £ <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} value={`${o.tags[0].hourlyEndRate}`} onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex: 0, value: e.target.value, type: "hourlyEndRate", categoryId: o.tags[0].categoryId, tagId: o.tags[0].tagId })} />
                                            </>
                                            :
                                            `£ ${o.tags[0].hourlyEndRate}`}
                                        </div>
                                      </th>
                                      <th>
                                        {o.tags[0].isEdit ?
                                          <button className="edit-services" onClick={() => this.updateRecord(categoryIndex, 0)}><i className="fa fa-check-square-o" aria-hidden="true"></i></button> :
                                          <button className="edit-services" onClick={() => this.enableEditMode(categoryIndex, 0)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        }
                                      </th>
                                    </>
                                  }
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  o.isMain && o.tags.map((data, tagIndex) =>
                                    <tr>
                                      <>
                                        <th scope="row">{data.tagName}</th>
                                        <td>
                                          {
                                            data.isEdit ? <select className="form-control" onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex, value: e.target.value, type: "oneOffRate", categoryId: data.categoryId, tagId: data.tagId })}>
                                              {ONE_OFF.map((o, index) =>
                                                <option value={o.value}>{o.label}</option>
                                              )}
                                            </select> : <p>{this.getOneOffRate(parseInt(data.oneOffRate))}</p>
                                          }
                                        </td>
                                        <td>
                                          {
                                            data.isEdit ? <select className="form-control" onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex, value: e.target.value, type: "monthlyRate", categoryId: data.categoryId, tagId: data.tagId })}>
                                              {MONTHLY.map((o, index) =>
                                                <option value={o.value}>{o.label}</option>
                                              )}
                                            </select> : <p>{this.getMonthly(parseInt(data.monthlyRate))}</p>
                                          }
                                        </td>
                                        <td>
                                          <div className="hourly-rates">
                                            {data.isEdit ?
                                              <>
                                                £ <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} value={`${data.hourlyStartRate}`} onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex, value: e.target.value, type: "hourlyStartRate", categoryId: data.categoryId, tagId: data.tagId })} />
                                              </>
                                              :
                                              `£ ${data.hourlyStartRate}`
                                            }
                                            <b className="px-3 fs-16">-</b>
                                            {data.isEdit ?
                                              <>
                                                £ <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} value={`${data.hourlyEndRate}`} onChange={(e) => this.priceSelectionForUpdateRecords({ categoryIndex, tagIndex, value: e.target.value, type: "hourlyEndRate", categoryId: data.categoryId, tagId: data.tagId })} />
                                              </>
                                              :
                                              `£ ${data.hourlyEndRate}`}
                                          </div>
                                        </td>
                                        <td>
                                          {data.isEdit ?
                                            <button className="edit-services" onClick={() => this.updateRecord(categoryIndex, tagIndex)}><i className="fa fa-check-square-o" aria-hidden="true"></i></button> :
                                            <button className="edit-services" onClick={() => this.enableEditMode(categoryIndex, tagIndex)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                          }
                                        </td>
                                      </>
                                    </tr>
                                  )
                                }
                              </tbody>
                            </>
                          ))}
                        </>
                      </>
                    </table>
                    {dataSource.length > 0 && <>
                      <div className="card-header">
                        <h3 className="card-title">Service Rates</h3>
                      </div>
                      <table className="services-table table-bordered table-responsive">
                        <thead className="text-center">
                          <tr>
                            <th></th>
                            <th>One Off</th>
                            <th>Monthly</th>
                            <th>Hourly</th>
                            <th></th>
                          </tr>
                        </thead>
                        <>
                          {dataSource && dataSource.map((record, rowIndex) => (
                            <>
                              <tr>
                                <td>
                                  <div className="new_services_add">
                                    <input
                                      autoComplete={"off"}
                                      placeholder="Type in services you offer, separated by a comma. E.g.- Digital Marketing,Social Media Marketing"
                                      value={record.textBox}
                                      type="text"
                                      name={`${record.id}`}
                                      className="form-control input-lg"
                                      onChange={e => this.onChange(e, { newValue: e.target.value })} />
                                    {record.suggestions.length > 0 && <Accordion defaultActiveKey={1}>
                                      {record.suggestions.map((o, index) => (
                                        <>
                                          <Card>
                                            <Card.Header  >
                                              {
                                                <Accordion.Toggle variant="link" eventKey={index + 1} className="ant-btn"  >
                                                  <input
                                                    // checked={this.isAllCheckedTag(record.id, o.categoryId)}
                                                    type="checkbox" className="mr-2" onChange={(e) => this.selectedTags(e,
                                                      {
                                                        id: 0,
                                                        sellerId: 0,
                                                        categoryId: o.categoryId,
                                                        tagId: null,
                                                        oneOffRate: '',
                                                        monthlyRate: '',
                                                        hourlyStartRate: '',
                                                        hourlyEndRate: '',
                                                        serviceType: 1
                                                      }, null, o.categoryName, o.categoryId, null, record.id)} />
                                                  {o.categoryName ? o.categoryName : ''} <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </Accordion.Toggle>
                                              }
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={index + 1}>
                                              <Card.Body className="new_services_body">
                                                {o.tags && o.tags.length > 0 && <button onClick={() => this.closeSuggestion(record.id)}>Done</button>}
                                                {o.tags && o.tags.map((tag, index) =>
                                                  <li><input type="checkbox"
                                                    id={`checkbox-${index}`}
                                                    checked={this.isCheckedTag(record.id, tag.id)}
                                                    className="mr-2" onChange={(e) => this.selectedTags(e,
                                                      {
                                                        id: 0,
                                                        sellerId: 0,
                                                        categoryId: o.categoryId,
                                                        tagId: tag.id,
                                                        oneOffRate: '',
                                                        monthlyRate: '',
                                                        hourlyStartRate: '',
                                                        hourlyEndRate: '',
                                                        serviceType: 1
                                                      }, tag.name, o.categoryName, o.categoryId, tag.id, record.id)} /><label htmlFor={`checkbox-${index}`}>{tag.name}</label>
                                                  </li>
                                                )}
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </>
                                      ))}
                                    </Accordion>}
                                  </div>
                                </td>
                                {/* when we do not have tags */}
                                {record.isMain && record.categoryId ?
                                  <>
                                    <td>
                                      <select className="form-control" onChange={(e) => this.priceSelectionForNewRecords({
                                        value: e.target.value,
                                        type: "oneOff",
                                        rowIndex,
                                        tagIndex: null
                                      })}>
                                        <option>Please select a One Off Rate</option>
                                        <option value={1}>£250 - £1,000</option>
                                        <option value={2}>£1,000 - £2,000</option>
                                        <option value={3}>£2,000 - £5,000</option>
                                        <option value={4}>£5,000 - £10,000+</option>
                                      </select>
                                    </td>
                                    <td>
                                      <select className="form-control" onChange={(e) => this.priceSelectionForNewRecords({
                                        value: e.target.value,
                                        type: "monthly",
                                        rowIndex,
                                        tagIndex: null,
                                      })}>
                                        <option>Please select a Monthly Rate</option>
                                        <option value={1}>£250 - £1,000</option>
                                        <option value={2}>£1,000 - £2,000</option>
                                        <option value={3}>£2,000 - £5,000</option>
                                        <option value={4}>£5,000 - £10,000+</option>
                                      </select>
                                    </td>
                                    <td>
                                      <div className="hourly-rates">
                                        <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} name={`hourlyStartRate-${rowIndex}`} onChange={(e) => this.priceSelectionForNewRecords({
                                          value: e.target.value,
                                          type: "hourlyStartRate",
                                          rowIndex,
                                          tagIndex: null,
                                        })} />
                                        <b className="px-3 fs-16">-</b>
                                        <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} name={`hourlyEndRate-${rowIndex}`} onChange={(e) => this.priceSelectionForNewRecords({
                                          value: e.target.value,
                                          type: "hourlyEndRate",
                                          rowIndex,
                                          tagIndex: null,
                                        })} />
                                      </div>
                                    </td>

                                  </> :
                                  <>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </>
                                }
                                <td><button className="delete_bt" onClick={() => this.removeRow(rowIndex)}>X</button></td>
                              </tr>
                              {!record.isMain && record.tags.map((tag, tagIndex) => (
                                <tbody>
                                  <tr>
                                    <td>{tag.tagName}</td>
                                    <td>
                                      <select className="form-control" onChange={(e) => this.priceSelectionForNewRecords({
                                        value: e.target.value,
                                        type: "oneOff",
                                        rowIndex,
                                        tagIndex
                                      })}>
                                        <option>Please select a One Off Rate</option>
                                        <option value={1}>£250 - £1,000</option>
                                        <option value={2}>£1,000 - £2,000</option>
                                        <option value={3}>£2,000 - £5,000</option>
                                        <option value={4}>£5,000 - £10,000+</option>
                                      </select>
                                    </td>
                                    <td>
                                      <select className="form-control" onChange={(e) => this.priceSelectionForNewRecords({
                                        value: e.target.value,
                                        type: "monthly",
                                        rowIndex,
                                        tagIndex,
                                      })}>
                                        <option>Please select a Monthly Rate</option>
                                        <option value={1}>£250 - £1,000</option>
                                        <option value={2}>£1,000 - £2,000</option>
                                        <option value={3}>£2,000 - £5,000</option>
                                        <option value={4}>£5,000 - £10,000+</option>
                                      </select>
                                    </td>
                                    <td>
                                      <div className="hourly-rates">
                                        <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} name={`hourlyStartRate-${rowIndex}-${tagIndex}`} onChange={(e) => this.priceSelectionForNewRecords({
                                          value: e.target.value,
                                          type: "hourlyStartRate",
                                          rowIndex,
                                          tagIndex,
                                        })} />
                                        <b className="px-3 fs-16">-</b>
                                        <input type="text" className="form-control w-50" onKeyPress={this.validate} autoComplete={"off"} name={`hourlyEndRate-${rowIndex}-${tagIndex}`} onChange={(e) => this.priceSelectionForNewRecords({
                                          value: e.target.value,
                                          type: "hourlyEndRate",
                                          rowIndex,
                                          tagIndex,
                                        })} />
                                      </div>
                                    </td>
                                    <td>
                                      <button className="delete_bt" onClick={() => this.removeTag(rowIndex, tag.tagId)}>X</button>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </>
                          ))}
                        </>
                      </table>
                    </>
                    }
                    <div className="btn_last">
                      <Button Button className="editable-add-btn btn btn-primary" onClick={this.handleAdd}>Add</Button>
                      <Button className="editable-add-btn" onClick={this.handleNewSave}>Save</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}


const mapStateToProps = (state) => {
  return {
    services: state
  };
};

export default connect(mapStateToProps)(Services);