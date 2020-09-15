import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import StripeCheckout from 'react-stripe-checkout';
export default function Billings() {
    const pathList = [
        { to: "/billings", title: "Billings" }
    ]
    const onToken = (token, addresses) => {
        console.log({ "token": token, "addresses": addresses })
    }
    return (
        <div>
            <BreadCrumbs title="Billings" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12">
                        <div className="sptb pb-0">
                            <div className="card mb-0">
                                {/* <div className="card-header">
                                    <h3 className="card-title">Billing Details</h3>
                                </div> */}
                                <div className="card-body">
                                    <StripeCheckout
                                        amount='5'
                                        currency='EUR'
                                        name="Hamza Datoo"
                                        // billingAddress
                                        // shippingAddress
                                        token={onToken}
                                        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                                    />
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="card-blocks">
                                                <div className="company-profile-head bg-background3 ">
                                                    <h4>Leads Purchased</h4>
                                                </div>
                                                <table class="services-table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td>New Website & Social Media Advertising</td>
                                                        </tr>
                                                        <tr>
                                                            <td>New Website & Social Media Advertising</td>
                                                        </tr>
                                                        <tr>
                                                            <td>New Website & Social Media Advertising</td>
                                                        </tr>
                                                        <tr>
                                                            <td>New Website & Social Media Advertising</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-blocks">
                                                <div className="company-profile-head bg-background3 ">
                                                    <h4>Total</h4>
                                                </div>
                                                <h5><b>$15 this Week (Week begining on 20/10/2020)</b></h5>
                                                <p className="note"><b>Note:</b> You will automatically be billed on <b>27th October 2020</b> to be card ending in <b>1234</b><br /><br />You can amend billing methods when there are no outstanding payments.</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card-blocks">
                                                <div className="company-profile-head bg-background3 ">
                                                    <h4>Billing Address</h4>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-12">
                                                        <input type="text" className="form-control" placeholder="House Number" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <input type="text" className="form-control" placeholder="Street Name" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control" placeholder="State/Province" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control" placeholder="Post Code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card-blocks mb-0">
                                                <div className="company-profile-head bg-background3 ">
                                                    <h4>Billing Information</h4>
                                                </div>
                                                <div class="wrapped">
                                                    <div class="radio-in">
                                                        <label class="wrapper">
                                                            <input type="radio" name="paymentradio" />
                                                            <span><img src={require('../assets/images/payment-icon.png')} alt="img" /></span>
                                                        </label>
                                                        <label class="wrapper">
                                                            <input type="radio" name="paymentradio" />
                                                            <span><img src={require('../assets/images/paytm-icon.png')} alt="img" /></span>
                                                        </label>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-label">Card Holder</label>
                                                        <input type="text" class="form-control" name="" placeholder="Card Holder" />
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="form-label">Card Number</label>
                                                        <input type="text" class="form-control" name="" placeholder="Card Number" />
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="form-label">Expires</label>
                                                            <input type="text" class="form-control" name="" placeholder="MM/YY" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="form-label">CVV</label>
                                                            <input type="text" class="form-control" name="" placeholder="CVC" />
                                                        </div>
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
                        <div className="sptb top-com-pad">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h3 className="card-title">Previous Invoices</h3>
                                </div>
                                <div className="card-body">
                                    <table className="services-table table-bordered invoice-table text-center table-striped">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>View</th>
                                                <th>Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Marketing.inc WorkWyse Inc 21/06/2020</th>
                                                <td><button className="view-btns" type="button"><i className="fa fa-eye"></i></button></td>
                                                <td><button className="view-btns" type="button"><i className="fa fa-download"></i></button></td>
                                            </tr>
                                            <tr>
                                                <th>Marketing.inc WorkWyse Inc 21/06/2020</th>
                                                <td><button className="view-btns" type="button"><i className="fa fa-eye"></i></button></td>
                                                <td><button className="view-btns" type="button"><i className="fa fa-download"></i></button></td>
                                            </tr>
                                            <tr>
                                                <th>Marketing.inc WorkWyse Inc 21/06/2020</th>
                                                <td><button className="view-btns" type="button"><i className="fa fa-eye"></i></button></td>
                                                <td><button className="view-btns" type="button"><i className="fa fa-download"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
