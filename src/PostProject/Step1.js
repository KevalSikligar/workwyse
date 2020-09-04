import React from 'react'
import DatePicker from "react-datepicker";

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
        return (
            <>
                <div class="">
                    <div class="title_Section_pop">
                        <h3 class="model-title-set">Post a project</h3>
                    </div>

                    <div class="">
                        <div class="row">
                            <div className="form-group col-sm-6">
                                <label className="form-label">Project Name</label>
                                <input type="text" className="form-control" placeholder="Project Name" />
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Retainer</label>
                                    <select className="form-control">
                                        <option>Monthly</option>
                                        <option>Hourly</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Project Price</label>
                                <div className="d-md-flex align-items-center form-group">
                                    <input type="text" className="form-control" placeholder="$$$-$$$" />
                                    <span className="px-2 form-label text-dark fs-16"> - </span>
                                    <input type="text" className="form-control" placeholder="$$$-$$$0" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">I Don't know my budget</label>
                                <div className="d-md-flex align-items-center form-group">
                                    <input type="text" className="form-control" placeholder="I Don't know my budget" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">When would yo to start ?</label>
                                <div className="d-md-flex align-items-center form-group">
                                    <input type="text" className="form-control" placeholder="When would yo to start ?" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">When will the job finish ?</label>
                                <div className="d-md-flex align-items-center form-group">
                                    <input type="text" className="form-control" placeholder="When will the job finish ?" />
                                </div>
                            </div>
                            <div class="col-md-3 pr-md-0">
                                <label class="form-label">ASAP</label>
                                <div className="d-md-flex align-items-cente form-groupr">
                                    <DatePicker
                                        selected={state.startDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Unsure</label>
                                <div className="d-md-flex align-items-center form-group">
                                    <DatePicker
                                        selected={state.startDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label className="form-label text-dark fs-16 mb-3">I want to work firms within</label>
                            </div>
                            <div className="col-md-8">
                                <label className="custom-control custom-radio mb-5">
                                    <input type="radio" className="custom-control-input" checked name="example-radios3" value="option1" />
                                    {/* <span className="">Visible to everyone</span> */}
                                    <div className="custom-control-label d-md-flex align-items-center">
                                        <select className="form-control w-100">
                                            <option>20 miles</option>
                                            <option>40 miles</option>
                                            <option>60 miles</option>
                                        </select>
                                        <span className="px-2 form-label text-dark fs-16">of</span>
                                        <div className="form-group w-100 mb-0">
                                            <input type="text" className="form-control" placeholder="Location" />
                                        </div>
                                    </div>
                                </label>
                                <label className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" name="example-radios3" value="option2" />
                                    {/* <span className="custom-control-label">Show me businesses nationwide</span> */}
                                    <label class="form-label">Show me businesses nationwide</label>
                                    <div className="d-md-flex align-items-center form-group">
                                        <input type="text" className="form-control" placeholder="Show me businesses nationwide" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
