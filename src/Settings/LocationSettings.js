import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import SideNav from '../SideNav/SideNav'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

export default function LocationSettings() {

    const pathList = [
        { to: "/location-setting", title: "Location Settings" }
    ]
    return (
        <div>
            <BreadCrumbs title="Location Settings" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                        <div className="card mb-0">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Location Settings</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12">
                                            <label className="form-label text-dark fs-16 mb-4">I serve customer within</label>
                                            <div className="custom-controls-stacked rdb-steps-1">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 col-sm-12">
                                                        <label className="custom-control custom-radio mb-5">
                                                            <input type="radio" className="custom-control-input" checked name="example-radios3" value="option1" />
                                                            {/* <span className="">Visible to everyone</span> */}
                                                            <div className="custom-control-label d-md-flex align-items-center  ml-4">
                                                                <select className="form-control w-100">
                                                                    <option>20 miles</option>
                                                                    <option>40 miles</option>
                                                                    <option>60 miles</option>
                                                                </select>
                                                                <span className="px-5 form-label text-dark fs-16">of</span>
                                                                <div className="form-group w-100  mb-0">
                                                                    <input type="text" className="form-control position-relative w-100" placeholder="Location" />
                                                                    <span className="map-icon"><img src={require('../assets/images/svg/gps.svg')} className="location-gps" alt="img" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="location-map-section my-5">
                                                                <div className="col-lg-612 col-md-12 col-sm-12 col-12 bg-white p-0">
                                                                    <div className="about-map-section">
                                                                        <iframe title="For Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1523816246!2d72.68221020433099!3d21.15914250210564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1597424132065!5m2!1sen!2sin"
                                                                            frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" name="example-radios3" value="option2" />
                                                            {/* <span className="custom-control-label">Visible to only my Customers</span> */}
                                                            <div className="custom-control-label d-md-flex  align-items-center  ml-4">
                                                                <input type="text" className="form-control w-100" placeholder="Show me businesses nationwide" />
                                                                <span className="px-5 form-label text-dark fs-16">from</span>
                                                                <div className="form-group w-100  mb-0">
                                                                    <input type="text" className="form-control w-100 position-relative" placeholder="Location" />
                                                                    <span className="map-icon"><img src={require('../assets/images/svg/gps.svg')} className="location-gps" alt="img" /></span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-danger  mr-2">Cancel</Button>
                                    <Button className="btn btn-primary">Save</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
