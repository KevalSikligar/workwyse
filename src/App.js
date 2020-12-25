import React from 'react';
import './App.css';
import './assets/css/style.css';
import './assets/css/admin-custom.css';
import './assets/css/sidemenu.css';
import './assets/css/responsive.css';
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import { Route, Switch, BrowserRouter, Redirect, withRouter } from "react-router-dom";
import SignUpSeller from './SignUp/SignUpSeller';
import AboutUs from './AboutUs/AboutUs';
import Faq from './Faq/Faq';
import Pricing from './Pricing/Pricing';
import TermsOfService from './TermsOfService.js/TermsOfService';
import Privacy from './Privacy/Privacy';
import GeneralSettings from './Settings/GeneralSettings';
import FindBuyer from './Settings/FindBuyer';
import Inbox from './Settings/Inbox';
import Reviews from './Settings/Reviews';
import Notifications from './Settings/Notifications';
import Billings from './Settings/Billings';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Home from './Home/Home';
import Services from './Settings/Services';
import MyCompany from './Settings/MyCompany';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import MyPosts from './Settings/MyPosts';
import BuyerHome from './Home/BuyerHome';
import FindBuyerDetails from './Settings/FindBuyerDetails';
import MyPostsDetails from './Settings/MyPostsDetails';
import News from './News/News';
import ResetPassword from './ResetPassword/ResetPassword';
import NewsDetails from './News/NewsDetails';
import AdminHeader from './AdminPanel/_layouts/AdminHeader/AdminHeader';
import AdminDashboard from './AdminPanel/Components/AdminDashboard/AdminDashboard';
import AdminNews from './AdminPanel/Components/AdminNews/AdminNews';
import AdminNewsDetails from './AdminPanel/Components/AdminNews/AdminNewsDetails';
import AdminNewsList from './AdminPanel/Components/AdminNews/AdminNewsList';
import AdminFooter from './AdminPanel/_layouts/AdminFooter/AdminFooter';
import TermsAndConditions from './TermsOfService.js/TermsAndConditions';
import AdminSideNav from './AdminPanel/Components/AdminSideNav/AdminSideNav';
import ConfirmEmail from './Login/ConfirmEmail';
import ReactGA from 'react-ga';
import Cookies from './Cookies/Cookies';
import AcceptableUse from './AcceptableUse/AcceptableUse';
import SellerHome from './Home/SellerHome';
import ContactUs from './ContactUs/ContactUs';
import { connect } from 'react-redux';
import UnderConstruction from './UnderConstruction/UnderConstruction';
import Requests from './Settings/Requests';
import InboxBuyer from './Settings/InboxBuyer';
import { history, getUserDetail } from "./const";
import PrivateRouter from './PrivateRouter/PrivateRouter';

class App extends React.Component {

  componentWillReceiveProps() {
    ReactGA.initialize('UA-173091947-1', { debug: false });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {

    var href = window.location.href;
    const route = href.match(/([^\/]*)\/*$/)[1];
    var role = getUserDetail('roles')

    return (
      <section>
        <BrowserRouter history={history}>
          <div className={this.props.class.postaproject.class === true ? "main_section active" : "main_section"}>
            <div className={route.includes('admin') ? "page" : ''}>
              <div className={route.includes('admin') ? "page-main" : ''}>
                {route.includes('admin') ? <AdminHeader /> : <Header />}
                <div>
                  {route.includes('admin') ? <AdminSideNav /> : ''}
                  <Switch>
                    <Route exact path="/">
                      {role === "Seller" ?
                        <Redirect to="/seller" />
                        :
                        <Redirect to="/home" />
                      }
                    </Route>
                    <Route path="/home" exact component={Home} />
                    <Route path="/faq" exact component={Faq} />
                    <Route path="/pricing" exact component={Pricing} />
                    <Route path="/terms-of-service" exact component={TermsOfService} />
                    <Route path="/terms-and-conditions" exact component={TermsAndConditions} />
                    <Route path="/privacy-policy" exact component={Privacy} />
                    <Route path="/cookies" exact component={Cookies} />
                    <Route path="/acceptable-use" exact component={AcceptableUse} />
                    <Route path="/how-it-works" exact component={AboutUs} />
                    <PrivateRouter path="/general-setting" exact component={GeneralSettings} />
                    <PrivateRouter path="/my-company" exact component={MyCompany} />
                    <PrivateRouter path="/service-setting" exact component={Services} />
                    <Route path="/sign-up/(seller|buyer)" exact component={SignUpSeller} />
                    <PrivateRouter path="/find-buyer" exact component={FindBuyer} />
                    <PrivateRouter path="/find-buyer-details" exact component={FindBuyerDetails} />
                    <PrivateRouter path="/billing" exact component={Billings} />
                    <PrivateRouter path="/inbox/:projectId?" exact component={Inbox} />
                    <PrivateRouter path="/buyer-inbox/:projectId?/:sellerId?" exact component={InboxBuyer} />
                    <Route path="/news" exact component={News} />
                    <Route path="/news-details/:id" exact component={NewsDetails} />
                    <PrivateRouter path="/reviews" exact component={Reviews} />
                    <PrivateRouter path="/notifications" exact component={Notifications} />
                    <PrivateRouter path="/posts" exact component={MyPosts} />
                    <PrivateRouter path="/posts-details/:projectId" exact component={MyPostsDetails} />
                    {/* Check this Path for Private Router */}
                    <Route path="/dashboard-buyer/:buyerId/:projectId" exact component={BuyerHome} />
                    <PrivateRouter path="/seller" exact component={SellerHome} />
                    <Route path="/forgot-password" exact component={ForgotPassword} />
                    <Route path="/resetpassword/:email/:token" exact component={ResetPassword} />
                    <Route path="/confirm/:id/:token" exact component={ConfirmEmail} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <PrivateRouter path="/requests" exact component={Requests} />
                    {/* Under Construction */}
                    <Route path="/under-construction" component={UnderConstruction} />

                    {/* Admin Routes */}
                    <Route exact path="/admin-dashboard" component={AdminDashboard} />
                    <Route exact path="/admin-news" component={AdminNews} />
                    <Route exact path="/admin-news-list" component={AdminNewsList} />
                    <Route exact path="/admin-news-details/:id" component={AdminNewsDetails} />

                    <Route component={NotFoundPage} />
                  </Switch>
                </div>
              </div>
            </div>
            {route.includes('admin') ? <AdminFooter /> : <Footer />}
          </div>
        </BrowserRouter>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    class: state
  };
};

export default withRouter(connect(mapStateToProps)(App));