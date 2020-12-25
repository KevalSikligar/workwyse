import React, { Component } from "react";
import { Form, Button } from "antd";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { getAllCompanyDetails } from "../redux/action/SignUp/SignUpAction";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import axios from "axios";
import axiosInterceptor from "../AxiosInterceptor/axiosInterceptor";
class CompanyDetails4 extends Component {

  state = {
    categoryName: [],
    selectedTag: [],
    suggestions: [],
    value: "",
    tagID: [],
    allNames: [],
  };

  async componentDidMount() {
    if (this.props.companyDetails.signup.categoryKey) {
      let array = [];
      this.props.companyDetails.signup.categoryKey.map((name) => {
        array.push(name.title);
      });

      const finalSuggestions = [];
      if (array.length) {
        for (const arr of array) {
          try {
            const resp = await axiosInterceptor.get(`api/Category/All/${arr}`);
            const suggestions = resp.data ? resp.data : [];
            suggestions.forEach((suggestion) => {
              const storedSuggestion = this.props.companyDetails.signup.categoryKey.find((k) => {
                return k.id === suggestion.categoryId;
              });
              if (storedSuggestion) {
                if (suggestion.tags) {
                  suggestion.tags = suggestion.tags.map((tag) => {
                    tag.checked = storedSuggestion.tags.some((t) => t.tagId === tag.id);
                    return tag;
                  });
                }
                suggestion.checked = suggestion.tags.every((tag) => tag.checked);
                finalSuggestions.push(suggestion);
              }
            });
          } catch (err) {
            // do nothing
            // console.log(err);
          }
        }
        this.setState({
          value: array,
          suggestions: finalSuggestions,
          categoryTag: this.props.companyDetails.signup.categoryKey,
        });
      } else {
        this.setState({ value: array, suggestions: [] });
      }
    }
  }

  onChange = (event, { newValue }) => {
    event.preventDefault();
    this.setState({ value: newValue }, async () => {
      if (this.state.value.length <= 0) {
        this.setState({ suggestions: [] });
      } else {
        try {
          const searchTerm = this.state.value;
          const separation = searchTerm.split(",");
          const finalTerm = separation[separation.length - 1].trim();
          if (!finalTerm.length) {
            return;
          }
          const resp = await axiosInterceptor.get(`api/Category/All/${finalTerm}`);
          const suggestions = resp.data ? resp.data : [];
          if (this.props.companyDetails.signup.categoryKey) {
            suggestions.forEach((suggestion) => {
              const storedSuggestion = this.props.companyDetails.signup.categoryKey.find((k) => {
                return k.id === suggestion.categoryId;
              });
              if (storedSuggestion) {
                if (suggestion.tags) {
                  suggestion.tags = suggestion.tags.map((tag) => {
                    tag.checked = storedSuggestion.tags.some((t) => t.tagId === tag.id);
                    return tag;
                  });
                }
                suggestion.checked = true;
              }
            });
          }
          this.setState({ suggestions });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  };

  selectedTags = (e, tagSelected, tagName, categoryName, categoryId, tagId) => {
    e.stopPropagation();
    const clonedSuggestion = [...this.state.suggestions];
    let categrArry = [...this.state.categoryName];
    var categoryTag = Object.assign([], this.state.categoryTag);
    if (e.target.checked) {
      categrArry.push(tagSelected);
      let index2 = categoryTag.findIndex((data) => data.title === categoryName);
      if (index2 >= 0) {
        // category already added
        if (categoryTag[index2].tags.findIndex((o) => o.tagId === tagId) < 0) {
          clonedSuggestion.forEach((suggestion) => {
            if (suggestion && suggestion.categoryId === categoryId) {
              if (suggestion.tags) {
                suggestion.tags.forEach((tag) => {
                  if (tag.id === tagId) {
                    tag.checked = true;
                    categoryTag[index2].tags.push({
                      tagName: tagName,
                      tagId: tagId,
                      checked: true,
                    });
                  }
                });
              }
              suggestion.checked = categoryTag[index2].tags.length === suggestion.tags.length;
              categoryTag[index2].checked = suggestion.checked;
            }
          });
          this.setState({ suggestions: clonedSuggestion });
        }
      } else {
        var data = [];
        if (tagId) {
          // select single tag
          clonedSuggestion.forEach((suggestion) => {
            if (suggestion && suggestion.categoryId === categoryId) {
              suggestion.checked = false;
              suggestion.tags.forEach((tag) => {
                if (tag.id === tagId) {
                  tag.checked = true;
                  data.push({
                    tagName: tag.name,
                    tagId: tag.id,
                    checked: true,
                  });
                }
              });
            }
          });
          this.setState({ suggestions: clonedSuggestion });
        } else {
          // select all
          clonedSuggestion.forEach((suggestion) => {
            if (suggestion && suggestion.categoryId === categoryId) {
              suggestion.checked = true;
              if (suggestion.tags) {
                suggestion.tags = suggestion.tags.map((tag) => {
                  tag.checked = true;
                  data.push({
                    tagName: tag.name,
                    tagId: tag.id,
                    checked: true,
                  });
                  return tag;
                });
              }
            }
          });
          this.setState({ suggestions: clonedSuggestion });
        }

        categoryTag.push({
          title: categoryName,
          id: categoryId,
          checked: !!tagId,
          tags: data,
        });
      }
      let finalTagNames = [];
      if (categoryTag.length > 0) {
        categoryTag.map((tags) => {
          finalTagNames.push(tags.title);
        });
      }
      this.setState({
        categoryName: categrArry,
        selectedTag: tagName,
        value: `${finalTagNames}`,
        categoryTag,
      });
      this.props.dispatch(getAllCompanyDetails("categoryKey", categoryTag));
      this.props.dispatch(getAllCompanyDetails("finalTagNames", finalTagNames));
    } else {
      let index3 = categoryTag.findIndex((data) => data.title === categoryName);
      if (index3 === -1) {
        return;
      }
      if (tagId) {
        let tagIndex = categoryTag[index3].tags.findIndex((o) => o.tagId === tagId);
        categoryTag[index3].tags.splice(tagIndex, 1);
        clonedSuggestion.forEach((suggestion) => {
          if (suggestion && suggestion.categoryId === categoryId) {
            suggestion.checked = false;
            categoryTag[index3].checked = false;
            suggestion.tags.forEach((tag) => {
              if (tag.id === tagId) {
                tag.checked = false;
              }
            });
          }
        });
      } else {
        categoryTag[index3].tags = [];
        categoryTag[index3].checked = false;
        clonedSuggestion.forEach((suggestion) => {
          if (suggestion && suggestion.categoryId === categoryId) {
            suggestion.checked = false;
            suggestion.tags = suggestion.tags.map((tag) => {
              tag.checked = false;
              return tag;
            });
          }
        });
      }

      if (!categoryTag[index3].tags.length) {
        categoryTag.splice(index3, 1);
      }
      let finalTagNames = [];
      if (categoryTag.length > 0) {
        categoryTag.map((tags) => {
          finalTagNames.push(tags.title);
        });
      }
      this.setState({
        categoryName: categrArry,
        selectedTag: tagName,
        value: `${finalTagNames}`,
        categoryTag,
        suggestions: clonedSuggestion,
      });
      this.props.dispatch(getAllCompanyDetails("categoryKey", categoryTag));
      this.props.dispatch(getAllCompanyDetails("finalTagNames", finalTagNames));
    }
  };

  render() {

    const { suggestions } = this.state;

    var href = window.location.href;
    const route = href.match(/([^\/]*)\/*$/)[1];
    const finalName = route.charAt(0).toUpperCase() + route.slice(1);
    const pathList = [{ to: `/sign-up/${route}`, title: `Sign Up` }];

    const back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    };

    const onFinish = () => { this.props.nextStep(); };

    const onFinishFailed = () => { };

    return (

      <div className="seller_section_3">
        <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-12 sptb custom-card">
              <div className="card mb-0">
                <ProgressBar animated variant="primary" now={70} />
                <div className="card-header">
                  <h3 className="card-title">Complete Your Profile</h3>
                </div>
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <div className="card-body view-service-list">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 accordion-search-sec">
                        <div className="form-group m-0">
                          <label className="form-label asterisk"> Services</label>
                          <input type="text" className="form-control input-lg" value={this.state.value}
                            placeholder="Type in services you offer, separated by a comma. E.g.- Digital Marketing,Social Media Marketing"
                            onChange={(e) => this.onChange(e, { newValue: e.target.value })} />
                          {suggestions.length > 0 && (
                            <Accordion defaultActiveKey={1}>
                              {suggestions.map((o, index) => (
                                <>
                                  <Card key={o.categoryId}>
                                    <Card.Header>
                                      <Accordion.Toggle as={Button} variant="link" eventKey={index + 1} className="ant-btn">
                                        <input
                                          type="checkbox"
                                          className="mr-2" checked={o.checked}
                                          onChange={(e) =>
                                            this.selectedTags(e,
                                              {
                                                id: 0,
                                                sellerId: 0,
                                                categoryId: o.categoryId,
                                                tagId: null,
                                                oneOffRate: "",
                                                monthlyRate: "",
                                                hourlyStartRate: "",
                                                hourlyEndRate: "",
                                                serviceType: 1,
                                              }, null, o.categoryName, o.categoryId, null
                                            )} />
                                        {o.categoryName ? o.categoryName : ""}
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                      </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={index + 1}>
                                      <Card.Body>
                                        {o.tags
                                          ? o.tags.map((tag, index) => (
                                            <li key={tag.id}>
                                              <input type="checkbox" className="mr-2" checked={tag.checked} onChange={(e) =>
                                                this.selectedTags(e,
                                                  {
                                                    id: 0,
                                                    sellerId: 0,
                                                    categoryId: o.categoryId,
                                                    tagId: tag.id,
                                                    oneOffRate: "",
                                                    monthlyRate: "",
                                                    hourlyStartRate: "",
                                                    hourlyEndRate: "",
                                                    serviceType: 1,
                                                  },
                                                  tag.name, o.categoryName, o.categoryId, tag.id
                                                )} />
                                              {tag.name}
                                            </li>
                                          ))
                                          : []}
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </>
                              ))}
                            </Accordion>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-right company-details-f">
                    <Form.Item className="m-0">
                      <Button className="btn btn-info mr-2" onClick={back}> Back </Button>
                    </Form.Item>
                    <Form.Item className="m-0">
                      <Button type="primary" htmlType="submit"> Next </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyDetails: state,
  };
};

export default connect(mapStateToProps)(CompanyDetails4);