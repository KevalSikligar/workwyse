import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { getKey } from '../redux/action/Category/CategoryAction';
import swal from "sweetalert";
import PostProject from '../PostProject/PostProject';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { getUserDetail } from '../const';
class AboutUs extends React.Component {

  state = {
    showModal: false
  }

  toSellerDashboard = () => {
    this.props.history.push('/seller');
  }

  render() {

    const pathList = [{ to: "/how-it-works", title: "How It Works" }];

    return (
      <>
        <BreadCrumbs title="How It Works" breadcrumbssegment={pathList} />
        <div>
          <div className="sptb bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="section-title center-block text-center">
                    <h1>For Buyers</h1>
                  </div>
                  <div className="about-desc pb-md-7 pb-0">
                    <p className="data-sec-p">Our powerful engine in the back room matches your outsourcing requirements with companies that are able to cover your most important needs.</p>
                    <div className="">
                      <label className="color-data label-title">Search</label>
                      <p className="data-sec-p"><span className="data-title">Accurate - </span>	Post a Project, define your requirements, and get matched with the most relevant companies.</p>
                      <p className="data-sec-p"><span className="data-title">Experienced -  </span>	Companies with experience working with your industry are listed first (Industry Focus’ under Seller profiles).</p>
                      <p className="data-sec-p"><span className="data-title">Trustworthy - </span>	See company ratings all in one place from all across the web.</p>
                    </div>
                    <div className="">
                      <label className="color-data label-title">Select</label>
                      <p className="data-sec-p"><span className="data-title"> - </span>	Send your request to your top matched sellers.</p>
                      <p className="data-sec-p">Or</p>
                      <p className="data-sec-p"><span className="data-title"> - </span>	Receive  requests from our sellers.</p>
                    </div>
                    <div className="">
                      <label className="color-data label-title">Speak</label>
                      <p className="data-sec-p"><span className="data-title"> - </span>	Once you’ve found the right match, you can message using our system or email/call.</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-success add-post mt-1" onClick={() => this.toggleModal("header")}><i className="fa fa-edit"></i> Post a Project</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-title center-block text-center">
                    <h1>For Sellers</h1>
                  </div>
                  <div className="about-desc pb-md-7 pb-0">
                    <p className="data-sec-p">Our powerful engine in the back room matches your requirements with buyers that are match your company’s service and industry focus.</p>
                    <div className="">
                      <label className="color-data label-title">Search</label>
                      <p className="data-sec-p"><span className="data-title">Accurate - </span>	Get matched with buyers that fit your industry and service focus, so you can focus on your specialty.</p>
                      <p className="data-sec-p"><span className="data-title">Qualified -  </span>	Contact buyers that fit within your ideal customer profile (budget, industry and requirements).</p>
                      <p className="data-sec-p"><span className="data-title">Fair  - </span>	We don’t make you compete with everyone - our buyers are limited to contacting only 5 sellers per project.</p>
                    </div>
                    <div className="">
                      <label className="color-data label-title">Select</label>
                      <p className="data-sec-p"><span className="data-title"> - </span>	Send a request to your top buyer matches and instantly receive full project & contact details.</p>
                      <p className="data-sec-p">Or</p>
                      <p className="data-sec-p"><span className="data-title"> - </span>	Receive  requests from our buyers.</p>
                    </div>
                    <div className="">
                      <label className="color-data label-title">Speak</label>
                      <p className="data-sec-p"><span className="data-title"> - </span>	Once you’ve found the right match, you can message using our system or email/call</p>
                    </div>
                    {getUserDetail('roles') === 'Seller' ? <div className="d-flex justify-content-center" onClick={() => this.toSellerDashboard()}>
                      <button className="btn btn-secondary add-post mt-1"><i className="fa fa-edit"></i> Find Buyers</button>
                    </div> :
                      <>
                        <div className="d-flex justify-content-center">
                          <Link as={Button} to="/sign-up/seller" className="btn btn-secondary add-post mt-1">Sign Up Seller</Link>
                        </div>
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            <PostProject className="btn btn-lg btn-block btn-success br-tl-md-0 br-bl-md-0" isOpenModal={this.state.showModal}
              onClose={() => this.toggleModal("home")} />
          </div>
        </div>
      </>
    )
  }

  toggleModal = (key) => {
    this.props.dispatch(getKey(key))
    if (this.state.showModal === true) {
      this.setState({ showModal: false });
    } else {
      this.setState({ showModal: true });
    }
    if (this.state.showModal === true) {
      swal("Are you sure you want to Quit the process?", {
        buttons: { cancel: "No", catch: "Yes" },
        icon: "error",
      }).then((value) => {
        switch (value) {
          case "catch":
            this.setState({ showModal: false });
            break;
          default:
            this.setState({ showModal: true });
        }
      });
    }
  };
}


const mapStateToProps = (state) => {
  return {
    howItWork: state
  };
};

export default connect(mapStateToProps)(AboutUs);


