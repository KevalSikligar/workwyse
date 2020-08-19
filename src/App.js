import React from 'react';
import './App.css';
import Footer from "./layout/footer/footer"
import Header from "./layout/header/header"
import './assets/css/style.css';
import { Route, HashRouter } from "react-router-dom";
import FAQ from './faq/faq';
import Privacy from './privacy/privacy';
import TermsOfService from './terms-of-service/termsOfService';
import Pricing from './pricing/pricing';
import AboutUs from './about-us/aboutUs';
import HowItWorks from './how-it-works/howItWorks';
import GeneralSettings from './settings/general-settings';
import ProfileSettings from './settings/profile-settings';
import LocationSettings from './settings/location-settings';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Route path="/(about-us)?" exact component={AboutUs} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/terms-of-service" exact component={TermsOfService} />
        <Route path="/privacy-policy" exact component={Privacy} />
        <Route path="/how-it-works" exact component={HowItWorks} />
        <Route path="/general-setting" exact component={GeneralSettings} />
        <Route path="/profile-setting" exact component={ProfileSettings} />
        <Route path="/location-setting" exact component={LocationSettings} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
