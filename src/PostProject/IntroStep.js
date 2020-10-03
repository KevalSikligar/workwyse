import React from 'react'
import { Select } from 'antd';
import { getAllCategory } from '../Services/Categories';
import { getQuestion, getQuestionError } from '../redux/action/Category/CategoryAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { Form, Input } from 'antd';
import DropBox from '../DropBox/DropBox';
import GoogleDrive from '../GoogleDrive/GoogleDrive';
class IntroStep extends React.Component {

    state = {
        startDate: new Date(),
        categories: []
    };

    componentDidMount() {
        getAllCategory().then(response => {
            this.setState({ categories: response.data });
        }).catch(error => {
            console.log('error => ', error);
        });
    }

    handleCategory = (id) => {
        axios.get(`http://localhost:5000/api/CategoryQuestionnaire/${id}`).then((response) => {
            this.props.dispatch(getQuestion(response.data))
        }).catch((error) => {
            this.props.dispatch(getQuestionError(error))
        });
    }

    render() {
        const options = [
            { value: 'advertising_marketing', label: 'Advertising & Marketing' },
            { value: 'Paid Advertising', label: 'Paid Advertising' },
            { value: 'web_design', label: 'Web Design' },
            { value: 'videography', label: 'Videography' },
            { value: 'market_research', label: 'Market Research' },
        ];

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div className="">
                <Form
                    className=""
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label className="form-label">Project Title</label>
                                <Form.Item
                                    className="form-control"
                                    name="posttitle"
                                    rules={[{ required: true, message: 'Please enter post title!' }]}>
                                    <Input />
                                </Form.Item>
                                {/* <input type="text" className="form-control" placeholder="Project Title" /> */}
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label className="form-label">Category</label>
                                <Select className="form-ant-control" onChange={e => this.handleCategory(e)}>
                                    {
                                        this.state.categories.map(category => (
                                            <Select.Option value={category.id}>{category.name}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="form-group">
                                <label className="form-label">Services</label>
                                <Select
                                    placeholder="Select Services"
                                    isMulti
                                    name="colors"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">Description</label>
                                <Form.Item
                                    name="description"
                                    rules={[{ required: true, message: 'Please provide a description!' }]}>
                                    <Input />
                                </Form.Item>
                                {/* <textarea className="form-control" placeholder="Please provide a description with any specifications or upload a brief below…" rows="5"></textarea> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="form-group mb-0">
                                <label className="form-label">Upload Documents</label>
                                <div className="upload-doucments d-md-flex">
                                    <GoogleDrive>
                                        <span className="d-box-section mr-md-2">
                                            <img src={require('../assets/images/google-drive.png')} width="30" alt="Google Drive Image" />
                                            <span className="pl-3">Upload Google Drive Documents</span>
                                        </span>
                                    </GoogleDrive>
                                    <DropBox>
                                        <span className="d-box-section ml-md-2 dropbox-bg">
                                            <i class="fa fa-dropbox fa-2x" aria-hidden="true"></i>
                                            <span className="pl-3">Upload Dropbox Documents</span>
                                        </span>
                                    </DropBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }


    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

}

const mapStateToProps = state => {
    return {
        category: state
    }
}

export default connect(mapStateToProps)(IntroStep)
