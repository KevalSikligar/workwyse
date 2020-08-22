import React from 'react';
import './App.css';
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import './assets/css/style.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignUpBuyer from './SignUp/SignUpBuyer';
import SignUpSeller from './SignUp/SignUpSeller';
import AboutUs from './AboutUs/AboutUs';
import Faq from './Faq/Faq';
import Pricing from './Pricing/Pricing';
import TermsOfService from './TermsOfService.js/TermsOfService';
import Privacy from './Privacy/Privacy';
import HowItWorks from './HowItWorks/HowItWorks';
import GeneralSettings from './Settings/GeneralSettings';
import ProfileSettings from './Settings/ProfileSettings';
import LocationSettings from './Settings/LocationSettings';
import Login from './Login/Login';
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

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/(home)?" exact component={Home} />
                        <Route path="/about-us" exact component={AboutUs} />
                        <Route path="/faq" exact component={Faq} />
                        <Route path="/pricing" exact component={Pricing} />
                        <Route path="/terms-of-service" exact component={TermsOfService} />
                        <Route path="/privacy-policy" exact component={Privacy} />
                        <Route path="/how-it-works" exact component={HowItWorks} />
                        <Route path="/general-setting" exact component={GeneralSettings} />
                        <Route path="/profile-setting" exact component={ProfileSettings} />
                        <Route path="/my-company" exact component={MyCompany} />
                        <Route path="/location-setting" exact component={LocationSettings} />
                        <Route path="/service-setting" exact component={Services} />
                        <Route path="sign-up-buyer" exact component={SignUpBuyer} />
                        <Route path="/sign-up-seller" exact component={SignUpSeller} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/post-a-project" exact component={PostProject} />
                        <Route path="/find-buyer" exact component={FindBuyer} />
                        <Route path="/billings" exact component={Billings} />
                        <Route path="/inbox" exact component={Inbox} />
                        <Route path="/reviews" exact component={Reviews} />
                        <Route path="/notifications" exact component={Notifications} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}