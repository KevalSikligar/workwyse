import React, { Component } from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default class HowItWorks extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         videoURL: 'https://www.youtube.com/watch?v=M8iQq7A9pXc'
    //     }
    // }

    render() {
        const pathList = [
            { to: "/how-it-works", title: "How It Works" }
        ]
        return (
            <div>
                <BreadCrumbs title="How It Works" breadcrumbssegment={pathList} />
                <div>
                    <div class="sptb bg-white">
                        <div class="container">
                            <div class="section-title center-block text-center">
                                <h1>HOW DOES WORKWYSE WORK? ITS VERY SIMPLE</h1>
                                <p>Our powerful engine in the back room matches your requirements with firms that are able to cover your most important needs.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 hiw-video-section">
                                <img src={require('../assets/images/video-player-image.png')} alt="img" />
                                    {/* https://www.youtube.com/watch?v= this will not work*/}
                                     {/* <iframe src="https://www.youtube.com/embed/QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"> </iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                   <div class="sptb">
                    <div class="container">
                        <div class="section-title center-block text-center pb-7">
                            <h1>HOW DOES WORKWYSE WORK? ITS VERY SIMPLE</h1>
                            <p>Our powerful engine in the back room matches your requirements with firms that are able to cover your most important needs.</p>
                        </div>
                        <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="hiw-poster">
                            <img src={require('../assets/images/hiw-volunteer.png')} alt="img" />
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div class="steps-item">
                                        <div class="steps-title"><span>1</span> Search</div>                                
                                        <div class="steps-desc">
                                            <p>Browse our list of companies, see prices and much more using advanced filters, or you can post a project and define any requirements </p>
                                            <p>Firms that have experience working with your industry are listed first (see Industry Focus under Seller profiles).</p>
                                            <p>View company profiles, see company ratings that are pulled from all across the Internet.</p>
                                        </div>   
                                    </div>
                                    <div class="steps-item">
                                        <div class="steps-title"><span>2</span> Speak</div>                                        
                                        <div class="steps-desc">
                                            <p>Send a message to your top matches or a 'Work With' request.</p>
                                            <p>Discuss project particulars, share email addresses & contact information, upload documents.</p>
                                            <p>View company profiles, see company ratings that are pulled from all across the Internet.</p>
                                        </div>   
                                    </div>
                                    <div class="steps-item">
                                        <div class="steps-title"><span>3</span> Select</div>                                        
                                        <div class="steps-desc">
                                            <p>Once you've found the right match, we'll leave you to it</p>                                            
                                        </div>   
                                    </div>
                                </div>
                        </div>
                    </div>
                   </div>
                   </div>
            </div>
        )
    }
}
