import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
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

export default function MyPostsDetails() {
    const pathList = [
        { to: "/posts-details", title: "My Posts Details" }
    ]
    return (
        <div>
            <BreadCrumbs title="My Posts Details" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                        <div className="custom-card">
                            <div className="card">
                                {/* <div className="card-header">
                                    <div className="filter-section">
                                        <div className="header-left">
                                            <h3 className="card-title">My Posts Details</h3>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="card-body">
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6 pr-md-0">
                                                    <label className="form-label">Title</label>
                                                    <div className="form-group" data-select2-id="10">
                                                        <select className="form-control w-100">
                                                            <option>Web Design</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Service</label>
                                                    <div className="form-group" data-select2-id="10">
                                                        <select className="form-control w-100">
                                                            <option>Web Design</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Project</label>
                                                    <div className="form-group" data-select2-id="10">
                                                        <select className="form-control w-100">
                                                            <option>Web Design</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Project Price</label>
                                                    <div className="d-md-flex align-items-center form-group">
                                                        <select className="form-control w-100">
                                                            <option>20 miles</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                        <span className="px-2 form-label text-dark fs-16">to</span>
                                                        <select className="form-control w-100">
                                                            <option>20 miles</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pr-md-0">
                                                    <label className="form-label">Start Date</label>
                                                    <div className="d-md-flex align-items-cente form-groupr">
                                                        <DatePicker
                                                            selected={state.startDate}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">End Date</label>
                                                    <div className="d-md-flex align-items-center form-group">
                                                        <DatePicker
                                                            selected={state.startDate}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-12 ">
                                                    <label className="form-label">Title</label>
                                                    <div className="form-group" data-select2-id="10">
                                                        <select className="form-control w-100">
                                                            <option>Create a new website</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Title</label>
                                                    <div className="d-md-flex align-items-center form-group">
                                                        <select className="form-control w-100">
                                                            <option>Status; Ready to Hire</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="form-label">Title</label>
                                                    <div className="d-md-flex align-items-center form-group">
                                                        <select className="form-control w-100">
                                                            <option>Going live/to be updated; Within a few weeks</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="form-label">Title</label>
                                                    <div className="d-md-flex align-items-center form-group">
                                                        <select className="form-control w-100">
                                                            <option>Goals/Targets; Sell more of my product/service</option>
                                                            <option>40 miles</option>
                                                            <option>60 miles</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="d-flex justify-content-center form-group">
                                                        <button type="submit" className="btn btn-primary ml-1"><i className="fa fa-pause" aria-hidden="true"></i> Play</button>
                                                        <button type="submit" className="btn btn-primary ml-1"><i className="fa fa-envelope" aria-hidden="true"></i> Message</button>
                                                        <button type="submit" className="btn btn-primary ml-1"><i className="fa fa-stop" aria-hidden="true"></i> Stop</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Upload Image</label>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" name="example-file-input-custom" />
                                                    <label className="custom-file-label">Choose file</label>
                                                </div>
                                            </div>

                                            <div className="">
                                                <label className="form-label text-dark fs-16 mb-4">I serve customer within</label>
                                                <div className="custom-controls-stacked rdb-steps-1">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-12 col-sm-12">
                                                            <label className="custom-control custom-radio mb-5">
                                                                <input type="radio" className="custom-control-input" checked name="example-radios5" value="option1" />
                                                                <div className="custom-control-label d-md-flex align-items-center  ml-2">
                                                                    <select className="form-control w-100">
                                                                        <option>20 miles</option>
                                                                        <option>40 miles</option>
                                                                        <option>60 miles</option>
                                                                    </select>
                                                                    <span className="px-2 form-label text-dark fs-16">of</span>
                                                                    <div className="form-group w-100  mb-0">
                                                                        <input type="text" className="form-control position-relative w-100" placeholder="Location" />
                                                                    </div>
                                                                </div>

                                                                <input type="radio" className="custom-control-input" name="example-radios5" value="option2" />
                                                                <div className="custom-control-label d-md-flex align-items-center  ml-2 mt-3">
                                                                    <div className="form-group w-100  mb-0">
                                                                        <input type="text" className="form-control position-relative w-100" placeholder="Show me businesses nationwide" />
                                                                    </div>
                                                                </div>

                                                                <div className="location-map-section my-5">
                                                                    <div className="col-lg-612 col-md-12 col-sm-12 col-12 bg-white p-0">
                                                                        <div className="post-section-map">
                                                                            <iframe title="For Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1523816246!2d72.68221020433099!3d21.15914250210564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1597424132065!5m2!1sen!2sin"
                                                                                frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-danger mr-2">Cancel</button>
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
