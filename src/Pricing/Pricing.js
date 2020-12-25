import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { Link } from 'react-router-dom';
import PostProject from '../PostProject/PostProject';
import { getKey } from '../redux/action/Category/CategoryAction';
import swal from 'sweetalert';
import { connect } from 'react-redux';
class Pricing extends Component {

  state = {
    showModal: false
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

  render() {

    const pathList = [{ to: "/pricing", title: "Pricing" }]

    return (
      <div>
        <BreadCrumbs title="Pricing" breadcrumbssegment={pathList} />
        <div className="sptb">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 pricingTable2-responsive">
                <div className="pricingTable2 primary h-100">
                  <div className="pricingTable2-header">
                    <h3>BUYERS</h3> <span>Completely free for Buyers , Forever</span>
                  </div>
                  <div className="pricing-plans">
                    <span className="price-value1"><span>£0.00</span></span>
                    <span className="month">/month</span>
                  </div>
                  <div className="pricingContent2 pricing_custom">
                    <ul>
                      <li> <p className="data-sec-p">Post A Project</p> </li>
                      <li> <p className="data-sec-p">Upload Brief/Project Documents </p> </li>
                      <li> <p className="data-sec-p">5 Contact Requests per Project</p> </li>
                      <li> <p className="data-sec-p">Admin Dashboard</p> </li>
                      <li> <p className="data-sec-p">Messaging System</p> </li>
                    </ul>
                  </div>
                  <div className="pricingTable2-sign-up"> <Link className="btn btn-block btn-primary" onClick={() => this.toggleModal("header")}>Post A Project</Link> </div>
                </div>
              </div>
              {/* second card */}
              <div className="col-md-6 col-sm-12">
                <div className="pricingTable2 orange h-100">
                  <div className="pricingTable2-header"> <h3>SELLERS</h3>
                    <span>Pay Per Lead based on buying stage</span>
                  </div>
                  <div className="pricingContent2 pricing_custom data-section">
                    <ul>
                      <li> <p className="data-sec-p">Buyers that are doing their research - <span className="data-title">£10 per lead</span></p> </li>
                      <li> <p className="data-sec-p">Buyers that are looking for quotes - <span className="data-title">£15 per lead</span></p> </li>
                      <li> <p className="data-sec-p">Buyers that are very likely to hire - <span className="data-title">£20 per lead</span></p> </li>
                      <li> <p className="data-sec-p">Buyers that are ready to hire now - <span className="data-title">£25 per lead</span></p> </li>
                      <li> <p className="data-sec-p">Purchase as many leads as you wish </p> </li>
                      <li> <p className="data-sec-p">Receive buyer contact and project details</p> </li>
                      <li> <p className="data-sec-p">Pay for leads securely via Stripe at the end of each week</p> </li>
                    </ul>
                  </div>
                  <div className="pricingTable2-sign-up"> <Link to="/sign-up/seller" className="btn btn-block btn-secondary">Sign up</Link> </div>
                </div>
              </div>
              <PostProject isOpenModal={this.state.showModal} onClose={() => this.toggleModal("header")} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pricing: state
  };
};

export default connect(mapStateToProps)(Pricing)