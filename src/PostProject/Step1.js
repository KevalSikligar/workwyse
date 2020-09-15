import React from 'react'
import DatePicker from "react-datepicker";
import { Radio, Input } from 'antd';


import "react-datepicker/dist/react-datepicker.css";

const state = {
    startDate: new Date()
};

const handleChange = date => {
    this.setState({
        startDate: date
    });
};
export default class Step1 extends React.Component {
    render() {

        const radioStyle = {
            display: 'block',
        };

        return (
            <>
            <div class="">
                <div class="title_Section_pop">
                    <h3 class="model-title-set">Post a project</h3>
                </div>

                <div class="">
                    <div className="row mb-4">
                        <div class="col-md-6">
                            <label className="form-label">Project Price</label>
                            <select className="form-control">
                                <option>Monthly</option>
                                <option>Hourly</option>
                                <option>One off</option>
                                <option>Add Hoc</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 post-project-radio">
                            <label className="form-label text-dark fs-16">When would you like to start?</label>
                            <div className="custom-controls-stacked rdb-steps-1">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 datepicker-w-auto">
                                        <Radio className="mb-3" style={radioStyle} value={1}>
                                            <span  className="font-weight-semibold"> ASAP </span>
                                        </Radio>
                                        <div className="unsure-rd-btn">
                                            <Radio style={radioStyle} value={2}>
                                                <span  className="font-weight-semibold"> Unsure </span>  
                                            </Radio>
                                        <div className="custom-datepicker">
                                        <DatePicker className="unsure-datepicker"
                                                selected={state.startDate}
                                                onChange={handleChange}
                                            />
                                            
                                                <DatePicker className="unsure-datepicker ml-4"
                                                selected={state.startDate}
                                                onChange={handleChange}
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
