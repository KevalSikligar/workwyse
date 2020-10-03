import React from 'react'
import DatePicker from "react-datepicker";
import { Radio } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { GET_PROJECT_TYPE_ALL } from '../Services/ConstantURI';

export default class Step1 extends React.Component {
    state = {
        startDate: new Date(),
        projectType: []
    };
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    componentDidMount() {
        axios.get(GET_PROJECT_TYPE_ALL).then(res => {
            console.log('data => ', res.data);

            this.setState({ projectType: res.data })
        })
    }
    render() {

        const radioStyle = {
            display: 'block',
        };

        return (
            <>
                <div className="">
                    <div className="">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label className="form-label">Project Type</label>
                                {this.state.projectType.map((data, index) => (

                                    <Radio className="mb-3" value={index}>
                                        <span className="font-weight-semibold"> {data.name} </span>
                                    </Radio>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 post-project-radio">
                                <label className="form-label text-dark fs-16">When would you like to start?</label>
                                <div className="custom-controls-stacked rdb-steps-1">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 col-sm-12 datepicker-w-auto">
                                            <Radio className="mb-3" style={radioStyle} value={1}>
                                                <span className="font-weight-semibold"> ASAP </span>
                                            </Radio>
                                            <div className="unsure-rd-btn">
                                                <Radio style={radioStyle} value={2}>
                                                    <span className="font-weight-semibold"> Unsure </span>
                                                </Radio>
                                                <div className="custom-datepicker">
                                                    <DatePicker className="unsure-datepicker"
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChange} />
                                                    <DatePicker className="unsure-datepicker ml-4"
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
