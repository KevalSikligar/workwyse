import React from 'react'
import DatePicker from "react-datepicker";
import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css";

const state = {
    startDate: new Date()
};

const handleChange = date => {
    this.setState({
        startDate: date
    });
};
export default class IntroStep extends React.Component {
    render() {


        const options = [
            { value: 'advertising_marketing', label: 'Advertising & Marketing' },
            { value: 'Paid Advertising', label: 'Paid Advertising' },
            { value: 'web_design', label: 'Web Design' },
            { value: 'videography', label: 'Videography' },
            { value: 'market_research', label: 'Market Research' },
        ]

        return (
            <>
            <div class="">
                <div class="title_Section_pop">
                    <h3 class="model-title-set">Post a project</h3>
                </div>

                <div class="">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label className="form-label">Post Title</label>
                                <input type="text" className="form-control" placeholder="Project Title" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label className="form-label">Category</label>
                                <select className="form-control">
                                    <option>Digital Marketing</option>
                                    <option>Web Designing</option>
                                    <option>Facebook Marketing</option>
                                </select>
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
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" placeholder="Please provide a description with any specifications or upload a brief below…" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div class="form-group mb-0">
                                <label className="form-label">Upload Documents</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="example-file-input-custom" />
                                    <label className="custom-file-label">Choose file</label>
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
