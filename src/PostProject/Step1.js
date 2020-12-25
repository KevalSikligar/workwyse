import React from 'react'
import { Radio, Form, Select, Input, DatePicker, Button } from 'antd';
import { getPostAProjectData } from '../redux/action/PostAProject/PostAProject';
import { connect } from 'react-redux';
import moment from 'moment';
class Step1 extends React.Component {

  formRef = React.createRef();

  state = {
    startDate: new Date(),
    dropdown: false,
    dropdownOnOff: false,
    input: false,
    showRangePickerStartDate: false,
    showRangePickerEndDate: false,
    startValueYay: this.props.step1.postaproject.asap
  };

  handleChange = date => {
    this.setState({ startDate: date });
  };

  componentDidMount() {
    if (this.formRef) {
      const startDate = (this.props.step1.postaproject.asap || this.props.step1.postaproject.startDate) ? (this.props.step1.postaproject.asap ? "ASAP" : "startDate") : null;
      const endDate = this.props.step1.postaproject.unSure || this.props.step1.postaproject.endDate ? (this.props.step1.postaproject.unSure ? "unSure" : "endDate") : null;
      const dateStartPicker = this.props.step1.postaproject.startDate ? moment(this.props.step1.postaproject.startDate) : '';
      const dateEndPicker = this.props.step1.postaproject.endDate ? moment(this.props.step1.postaproject.endDate) : '';
      this.formRef.current.setFieldsValue({
        projectType: this.props.step1.postaproject.projectTypeId,
        oneOffRate: this.props.step1.postaproject.oneOffRate,
        monthly: this.props.step1.postaproject.monthly,
        hourlyStartRate: this.props.step1.postaproject.hourlyStartRate,
        hourlyEndRate: this.props.step1.postaproject.hourlyEndRate,
        startDateAll: startDate,
        dateStartPicker: dateStartPicker,
        endDateAll: endDate,
        dateEndPicker: dateEndPicker
      });
    }
  }

  changeHandler = (key, event) => {
    if (event === 1) {
      this.setState({ dropdownOnOff: true, dropdown: false, input: false })
      this.props.dispatch(getPostAProjectData('monthly', null));
      this.props.dispatch(getPostAProjectData('hourlyStartRate', null));
      this.props.dispatch(getPostAProjectData('hourlyEndRate', null));
    } else if (event === 2) {
      this.props.dispatch(getPostAProjectData('oneOffRate', null));
      this.props.dispatch(getPostAProjectData('hourlyStartRate', null));
      this.props.dispatch(getPostAProjectData('hourlyEndRate', null));
      this.setState({ dropdown: true, dropdownOnOff: false, input: false })
    } else if (event === 3) {
      this.props.dispatch(getPostAProjectData('oneOffRate', null));
      this.props.dispatch(getPostAProjectData('monthly', null));
      this.setState({ input: true, dropdownOnOff: false, dropdown: false })
    }
    this.props.dispatch(getPostAProjectData(key, event));
  }

  changeHandlerForValues = (key, event) => {
    this.props.dispatch(getPostAProjectData(key, event));
  }

  onChange(value) {
    if (value === 'startDate') {
      this.setState({ showRangePickerStartDate: true })
      this.props.dispatch(getPostAProjectData('asap', false))
      this.props.dispatch(getPostAProjectData('startDateRadio', true))
    } else if (value === 'endDate') {
      this.setState({ showRangePickerEndDate: true })
      this.props.dispatch(getPostAProjectData('unSure', false));
    } else if (value === 'ASAP') {
      this.setState({ showRangePickerStartDate: false })
      this.props.dispatch(getPostAProjectData('startDate', null))
      this.props.dispatch(getPostAProjectData('asap', true))
      this.props.dispatch(getPostAProjectData('startDateRadio', false))
    } else if (value === 'unSure') {
      this.setState({ showRangePickerEndDate: false })
      this.props.dispatch(getPostAProjectData('endDate', null));
      this.props.dispatch(getPostAProjectData('unSure', true));
    }
  }

  datePicker = (key, value) => {
    if (key === 'startDate') {
      this.props.dispatch(getPostAProjectData('startDate', moment(value._d).format()));
    } else if (key === 'endDate') {
      this.props.dispatch(getPostAProjectData('endDate', moment(value._d).format()));
    }
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

    const { Option } = Select;

    const submitForm = async () => {
      try {
        await this.formRef.current.validateFields();
        this.props.next();
      } catch (e) { }
    };

    const onFinishFailed = () => { };

    const radioStyle = { display: 'block' };

    return (
      <div className="post_project_popup_2">
        <Form ref={this.formRef} onFinishFailed={onFinishFailed}>
          <div className="row mb-3 qua_section">
            <div className="col-md-6 col-12 radio-group-cust">
              <label className="form-label asterisk">Project Type</label>
              <Form.Item name="projectType" rules={[{ required: true, message: 'Please choose a Project Type!' }]}>
                <Radio.Group onChange={(e) => this.changeHandler("projectTypeId", e.target.value)}>
                  <Radio value={1}>One Off</Radio>
                  <Radio value={2}>Monthly</Radio>
                  <Radio value={3}>Hourly</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="col-md-6 hourly-rates-custom d-block my-0">
              {this.state.dropdownOnOff || this.props.step1.postaproject.oneOffRate ? <>
                <label className="form-label">One Off</label>
                <Form.Item name="oneOffRate" rules={[{ required: true, message: 'Please choose One Off Rate!' }]}>
                  <Select onChange={(e) => this.changeHandlerForValues('oneOffRate', parseInt(e))}>
                    <Option value={1}>£250 - £1,000</Option>
                    <Option value={2}>£1,000 - £2,000</Option>
                    <Option value={3}>£2,000 - £5,000</Option>
                    <Option value={4}>£5,000 - £10,000+</Option>
                  </Select>
                </Form.Item>
              </> : ''}
              {this.state.dropdown || this.props.step1.postaproject.monthly ? <>
                <label className="form-label">Monthly</label>
                <Form.Item name="monthly" rules={[{ required: true, message: 'Please choose Monthly Rate!' }]}>
                  <Select onChange={(e) => this.changeHandlerForValues('monthly', parseInt(e))}>
                    <Option value={1}>£250 - £1,000</Option>
                    <Option value={2}>£1,000 - £2,000</Option>
                    <Option value={3}>£2,000 - £5,000</Option>
                    <Option value={4}>£5,000 - £10,000+</Option>
                  </Select>
                </Form.Item>
              </> : ""}
              {this.state.input || (this.props.step1.postaproject.hourlyStartRate && this.props.step1.postaproject.hourlyEndRate) ? <>
                <label className="form-label">Hourly Rates</label>
                <div className="d-flex align-items-center">
                  <Form.Item name="hourlyStartRate" rules={[{ required: true, message: 'Please enter Hourly Start Rate!' }]}>
                    <Input placeholder={'£'} onChange={(e) => this.changeHandlerForValues('hourlyStartRate', parseInt(e.target.value))} onKeyPress={this.validate} />
                  </Form.Item>
                  <p> - </p>
                  <Form.Item name="hourlyEndRate"
                    rules={[{ required: true, message: 'Please enter Hourly End Rate!' }]}>
                    <Input placeholder={'£'} onChange={(e) => this.changeHandlerForValues('hourlyEndRate', parseInt(e.target.value))} onKeyPress={this.validate} />
                  </Form.Item>
                </div>
              </> : ""}
            </div>
          </div>

          <div className="row qua_section">
            <div className="col-sm-12 col-md-12 post-project-radio">
              <label className="form-label text-dark asterisk">When would you like to start?</label>
              <div className="custom-controls-stacked rdb-steps-1">
                <div className="row post-radio-sec">
                  <div className="col-md-6 col-12">
                    <Form.Item name="startDateAll" rules={[{ required: true, message: 'Please select Project When would you like to start!' }]}>
                      <Radio.Group className="d-flex">
                        <Radio style={radioStyle} value="ASAP" onChange={(e) => this.onChange('ASAP')}>
                          <span className="font-weight-semibold"> ASAP </span>
                        </Radio>
                        <Radio style={radioStyle} value="startDate" onChange={(e) => this.onChange('startDate')}>
                          <span className="font-weight-semibold"> Start Date </span>
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>

                  {this.state.showRangePickerStartDate === true || this.props.step1.postaproject.startDateRadio ?
                    <div className="col-md-6 col-12 select_date_s">
                      <Form.Item name="dateStartPicker" rules={[{ required: true, message: 'Please select a Start Date!' }]}>
                        <DatePicker onChange={(e) => this.datePicker('startDate', e)} className="w-100 h-40" />
                      </Form.Item>
                    </div>
                    : ''}
                </div>
              </div>
            </div>
          </div>

          <div className="row qua_section">
            <div className="col-sm-12 col-md-12 post-project-radio">
              <label className="form-label text-dark asterisk">When would you like to end?</label>
              <div className="custom-controls-stacked rdb-steps-1">
                <div className="row post-radio-sec">
                  <div className="col-md-6 col-12">
                    <Form.Item name="endDateAll" rules={[{ required: true, message: 'Please select Project End Date!' }]}>
                      <Radio.Group className="d-flex">
                        <Radio style={radioStyle}
                          value="unSure" onChange={(e) => this.onChange('unSure')}>
                          <span className="font-weight-semibold"> Unsure </span>
                        </Radio>
                        <Radio style={radioStyle} value="endDate"
                          onChange={(e) => this.onChange('endDate')}>
                          <span className="font-weight-semibold"> End Date</span>
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>

                  {this.state.showRangePickerEndDate === true || this.props.step1.postaproject.endDate ?
                    <div className="col-md-6 col-12 select_date_s">
                      <Form.Item name="dateEndPicker"
                        rules={[{ required: true, message: 'Please select an End Date!' }]}>
                        <DatePicker className="w-100 h-40"
                          onChange={(e) => this.datePicker('endDate', e)} />
                      </Form.Item>
                    </div>
                    : ''}
                </div>
              </div>
            </div>
          </div>

          <div className="model-popup-wizard">
            <Form.Item>
              <div className="ml-4">
                <Button onClick={this.props.previous} className="btn-prev"> Previous</Button>
                <Button type="primary" onClick={submitForm}> Next </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { step1: state };
};

export default connect(mapStateToProps)(Step1);