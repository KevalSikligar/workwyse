import React from 'react';
import './App.css';
import Footer from "./layout/footer/footer"
import Header from "./layout/header/header"
import './assets/css/style.css';
import { Route } from "react-router-dom";
import FAQ from './faq/faq';
import Privacy from './privacy/privacy';
import TermsOfService from './terms-of-service/termsOfService';
import Pricing from './pricing/pricing';
import AboutUs from './about-us/aboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/(about-us)?" exact component={AboutUs} />
      <Route path="/faq" component={FAQ} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={Privacy} />
      <Footer />
    </div>
  );
}

export default App;
