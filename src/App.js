import React from 'react';
import './App.css';
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import './assets/css/style.css';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import SignUpSeller from './SignUp/SignUpSeller';
import AboutUs from './AboutUs/AboutUs';
import Faq from './Faq/Faq';
import Pricing from './Pricing/Pricing';
import TermsOfService from './TermsOfService.js/TermsOfService';
import Privacy from './Privacy/Privacy';
import HowItWorks from './HowItWorks/HowItWorks';
import GeneralSettings from './Settings/GeneralSettings';
import LocationSettings from './Settings/LocationSettings';
import PostProject from './PostProject/PostProject';
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
import SignInLinkedIn from './SignUp/SignInLinkedIn';
import News from './News/News';
import ResetPassword from './ResetPassword/ResetPassword';

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" exact component={Home} />
                    <Route path="/about-us" exact component={AboutUs} />
                    <Route path="/faq" exact component={Faq} />
                    <Route path="/pricing" exact component={Pricing} />
                    <Route path="/terms-of-service" exact component={TermsOfService} />
                    <Route path="/privacy-policy" exact component={Privacy} />
                    <Route path="/how-it-works" exact component={HowItWorks} />
                    <Route path="/general-setting" exact component={GeneralSettings} />
                    <Route path="/my-company" exact component={MyCompany} />
                    <Route path="/location-setting" exact component={LocationSettings} />
                    <Route path="/service-setting" exact component={Services} />
                    <Route path="/sign-up/(seller|buyer)" exact component={SignUpSeller} />
                    <Route path="/post-a-project" exact component={PostProject} />
                    <Route path="/find-buyer" exact component={FindBuyer} />
                    <Route path="/find-buyer-details" exact component={FindBuyerDetails} />
                    <Route path="/billings" exact component={Billings} />
                    <Route path="/inbox" exact component={Inbox} />
                    <Route path="/news" exact component={News} />
                    <Route path="/reviews" exact component={Reviews} />
                    <Route path="/notifications" exact component={Notifications} />
                    <Route path="/posts" exact component={MyPosts} />
                    <Route path="/posts-details" exact component={MyPostsDetails} />
                    <Route path="/dashboard-buyer" exact component={BuyerHome} />
                    <Route path="/linkedin" component={SignInLinkedIn} />
                    <Route path="/forgot-password" exact component={ForgotPassword} />
                    <Route path="/reset-password" exact component={ResetPassword} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}