import React from 'react'
import { Radio, Form, Button } from 'antd';
import { connect } from 'react-redux';
import { getPostAProjectData } from '../redux/action/PostAProject/PostAProject';
class Step2 extends React.Component {

  formRef = React.createRef();

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        questionnaires: this.props.step2.postaproject.questionnaires ? this.props.step2.postaproject.questionnaires[0].answerId : null
      });
    }
  }

  state = {
    value: 1,
    reqPayload: []
  };

  onChange = (key, e) => {
    this.setState({ value: e.target.value, }, () => {
      let pair = [...this.state.reqPayload];
      let tempreqPayload = {
        id: 0,
        createdBy: null,
        modifiedBy: null,
        projectId: 0,
        projectName: null,
        questionId: this.props.content.id,
        question: null,
        answerId: this.state.value,
        answer: null
      }
      pair.push(tempreqPayload)
      this.setState({ reqPayload: pair }, () => {
        this.props.dispatch(getPostAProjectData(key, pair));
      });
    });
  };

  render() {

    const submitForm = async () => {
      try {
        await this.formRef.current.validateFields();
        this.props.next();
      } catch (e) { }
    };

    return (
      <div className="post_project_popup_3">
        <Form ref={this.formRef}>
          <div className="radio-section">
            <div className="question-list">
              <div className="question-item">
                <label className="form-label">{this.props.content.question}</label>
                <Form.Item name="questionnaires" rules={[{ required: true, message: 'Please select an answer!' }]}>
                  <Radio.Group className="mt-2">
                    {this.props.content.questionOptions.map((data, index) => (
                      <Radio key={data.id} value={data.id} className="mb-0" onChange={(e) => this.onChange('questionnaires', e)}>
                        <h4 className="font-weight-normal">{data.option}</h4>
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>

              </div>

              <div className="model-popup-wizard">
                <Form.Item>
                  <div className="ml-4">
                    <Button onClick={this.props.previous} className="btn-prev"> Previous</Button>
                    {this.props.step2.category.key === 'header' ?
                      <Button type="primary" onClick={submitForm}> Next </Button> :
                      <Button type="primary" onClick={submitForm} htmlType="submit"> Next </Button>
                    }
                  </div>
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    step2: state
  };
};

export default connect(mapStateToProps)(Step2);