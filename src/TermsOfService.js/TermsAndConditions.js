import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
export default class TermsAndConditions extends Component {

    render() {

        const pathList = [{ to: "/terms-of-conditions", title: "Terms Of Conditions" }];
        
        return (
            <div>
                <BreadCrumbs title="Terms Of Conditions" breadcrumbssegment={pathList} />
                <div className="sptb bg-white">
                    <div className="container">
                        <div className="section-title center-block text-center">
                            <h2>WEBSITE TERMS AND CONDITIONS</h2>
                        </div>
                        <div className="section-title center-block text-left">
                            <h2>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE </h2>
                        </div>
                        <div className="data-section">
                            <p className="data-title">Who we are and how to contact us</p>
                            <p className="data-sec-p">
                                <span className="color-data">www.workwyse.io</span> is a site operated by
                                <span className="color-data"> Workwyse Ltd</span> ("We"). We are registered in England and Wales under company number 12649300 and have our registered office at
                                <span className="data-title"> WorkWyse Ltd, Kemp House, 152-160 City Road, London, EC1V 2NX.</span>
                            </p>
                            <p className="data-sec-p">We are a limited company. </p>
                            <p className="data-sec-p">To contact us, please email
                                <span className="color-data"> team@workwyse.io</span> or telephone our customer service line on <span className="data-title"> 0207 4594862.</span>
                            </p>
                            <p className="data-title">By using our site you accept these terms</p>
                            <p className="data-sec-p">By using our site, you confirm that you accept these terms of use and that you agree to comply with them. </p>
                            <p className="data-sec-p">If you do not agree to these terms, you must not use our site.</p>
                            <p className="data-sec-p">We recommend that you print a copy of these terms for future reference.</p>
                            <p className="data-title">There are other terms that may apply to you</p>
                            <p className="data-sec-p">These terms of use refer to the following additional terms, which also apply to your use of our site: </p>
                            <ul className="list_data">
                                <li><p className="data-sec-p">Our Privacy Policy <span className="color-data">www.workwyse.io/privacy</span>. See further under How we may use your personal information. </p></li>
                                <li><p className="data-sec-p">Our Acceptable Use Policy <span className="color-data">www.workwyse.io/acceptable-use</span> which sets out the permitted uses and prohibited uses of our site. When using our site, you must comply with this Acceptable Use Policy. </p></li>
                                <li><p className="data-sec-p">Our Cookie Policy <span className="color-data">www.workwyse.io/privacy,</span> which sets out information about the cookies on our site. </p></li>
                            </ul>
                            <p className="data-sec-p"> If you purchase goods or services from our site, our terms and conditions of supply <span className="color-data"> www.workwyse.io/terms</span> will apply to the sales. </p>
                            <p className="data-title">We may make changes to these terms</p>
                            <p className="data-sec-p">We amend these terms from time to time. Every time you wish to use our site, please check these terms to ensure you understand the terms that apply at that time.</p>
                            <p className="data-title">We may make changes to our site</p>
                            <p className="data-sec-p">We may update and change our site from time to time to reflect changes to our services, our users&#39; needs and our business priorities.</p>
                            <p className="data-title">We may suspend or withdraw our site</p>
                            <p className="data-sec-p">We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our site for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.</p>
                            <p className="data-sec-p">You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.</p>
                            <p className="data-title">We may transfer this agreement to someone else</p>
                            <p className="data-sec-p">We may transfer our rights and obligations under these terms to another organisation. We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract.</p>
                            <p className="data-title">User registration and information</p>
                            <p className="data-sec-p">You must ensure that the details provided by you on registration or at any time are correct and complete.</p>
                            <p className="data-sec-p">You must inform us immediately of any changes to the information that you provide when registering by updating your personal details to ensure we can communicate with you effectively.</p>
                            <p className="data-sec-p">We may suspend or cancel your registration with immediate effect for any reasonable purposes or if you breach these terms and conditions.</p>
                            <p className="data-sec-p">You may cancel your registration at any time by informing us in writing to the address at the end of these terms and conditions. If you do so, you must immediately stop using the Website. Cancellation or suspension of your registration does not affect any statutory rights.</p>
                            <p className="data-title">You must keep your account details safe</p>
                            <p className="data-sec-p">If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party.</p>
                            <p className="data-sec-p">We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms of use.</p>
                            <p className="data-sec-p">If you know or suspect that anyone other than you knows your login credentials, user identification code, billing details or password, you must promptly notify us at <span className="color-data">support@workwyse.io</span>.</p>
                            <p className="data-title">How you may use material on our site</p>
                            <p className="data-sec-p">We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
                            <p className="data-sec-p">You may print off one copy, and may download extracts, of any page(s) from our site for your personal use and you may draw the attention of others within your organisation to content posted on our site.</p>
                            <p className="data-sec-p">You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>
                            <p className="data-sec-p">Our status (and that of any identified contributors) as the authors of content on our site must always be acknowledged.</p>
                            <p className="data-sec-p">You must not use any part of the content on our site for commercial purposes without obtaining a licence to do so from us or our licensors.</p>
                            <p className="data-sec-p">If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
                            <p className="data-title">Do not rely on information on this site</p>
                            <p className="data-sec-p">The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.</p>
                            <p className="data-sec-p">Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up to date.</p>
                            <p className="data-title">We are not responsible for websites we link to</p>
                            <p className="data-sec-p">Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.</p>
                            <p className="data-sec-p">We have no control over the contents of those sites or resources.</p>
                            <p className="data-title">User-generated content is not approved by us</p>
                            <p className="data-sec-p">This website may include information and materials uploaded by other users of the site, including to bulletin boards and chat rooms. This information and these materials have not been verified or approved by us. The views expressed by other users on our site do not represent our views or values.</p>
                            <p className="data-title">How to complain about content uploaded by other users</p>
                            <p className="data-sec-p">If you wish to complain about content uploaded by other users, please contact us on support@workwyse.io.</p>
                            <p className="data-title">Our responsibility for loss or damage suffered by you</p>
                            <p className="data-title">Whether you are a consumer or a business user :</p>
                            <ul className="list_data">
                                <li><p className="data-sec-p">We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.</p></li>
                                <li><p className="data-sec-p">Different limitations and exclusions of liability will apply to liability arising as a result of the supply of any services to you, which will be set out in our terms and conditions of supply <span className="color-data">www.workwyse.io/terms</span>.</p> </li>
                            </ul>
                            <p className="data-sec-p">If you are a business user : </p>
                            <ul className="list_data">
                                <li><p className="data-sec-p">We exclude all implied conditions, warranties, representations or other terms that may apply to our site or any content on it.</p> </li>
                                <li><p className="data-sec-p">We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with :</p> </li>
                            </ul>
                            <ul className="list_data ml-5 pl-5">
                                <li> <p className="data-sec-p">Use of, or inability to use, our site; or</p></li>
                                <li> <p className="data-sec-p">Use of or reliance on any content displayed on our site.</p></li>
                                <li><p className="data-sec-p">In particular, we will not be liable for:</p></li>
                                <li><p className="data-sec-p">Loss of profits, sales, business, or revenue;</p></li>
                                <li><p className="data-sec-p">Business interruption;</p> </li>
                                <li><p className="data-sec-p">Loss of anticipated savings;</p> </li>
                                <li> <p className="data-sec-p">Loss of business opportunity, goodwill or reputation; or</p></li>
                                <li> <p className="data-sec-p">Any indirect or consequential loss or damage.</p></li>
                            </ul>
                            <p className="data-title">How we may use your personal information</p>
                            <p className="data-sec-p">We will only use your personal information as set out in our <span className="color-data">www.workwyse.io/privacy</span>.</p>
                            <p className="data-title">Uploading content to our site</p>
                            <p className="data-sec-p">Whenever you make use of a feature that allows you to upload content to our site, or to make contact with other users of our site, you must comply with the content standards set out in our Acceptable Use Policy <span className="color-data">www.workwyse.io/acceptable-use</span>.</p>
                            <p className="data-sec-p">You warrant that any such contribution does comply with those standards, and you will be liable to us and indemnify us for any breach of that warranty. This means you will be responsible for any loss or damage we suffer as a result of your breach of warranty.</p>
                            <p className="data-sec-p">Any content you upload to our site will be considered non-confidential and non-proprietary. You retain all of your ownership rights in your content, but you are required to grant us a limited licence to use, store and copy that content and to distribute and make it available to third parties.</p>
                            <p className="data-sec-p">We also have the right to disclose your identity to any third party who is claiming that any content posted or uploaded by you to our site constitutes a violation of their intellectual property rights, or of their right to privacy.</p>
                            <p className="data-sec-p">We have the right to remove any posting you make on our site if, in our opinion, your post does not comply with the content standards set out in our Acceptable Use Policy<span className="color-data">www.workwyse.io/acceptable-use</span>.</p>
                            <p className="data-sec-p">You are solely responsible for securing and backing up your content.</p>
                            <p className="data-sec-p">We do not store terrorist content.</p>
                            <p className="data-title">Rights you are giving us to use material you upload</p>
                            <p className="data-sec-p">When you upload or post content to our site, you grant us the following rights to use that content:</p>
                            <ul className="list_data">
                                <li><p className="data-sec-p">a worldwide, non-exclusive, royalty-free, transferable licence to use, reproduce, distribute, prepare derivative works of, display, and perform that user-generated content in connection with the service provided by the website and across different media including to promote the site or the service.</p></li>
                            </ul>
                            <p className="data-title">We are not responsible for viruses and you must not introduce them</p>
                            <p className="data-sec-p">We do not guarantee that our site will be secure or free from bugs or viruses.</p>
                            <p className="data-sec-p">You are responsible for configuring your information technology, computer programmes and platform to access our site. You should use your own virus protection software.</p>
                            <p className="data-sec-p">You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of- service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.</p>
                            <p className="data-title">Rules about linking to our site</p>
                            <p className="data-sec-p">You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.</p>
                            <p className="data-sec-p">You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>
                            <p className="data-sec-p">You must not establish a link to our site in any website that is not owned by you.</p>
                            <p className="data-sec-p">Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page.</p>
                            <p className="data-sec-p">We reserve the right to withdraw linking permission without notice.</p>
                            <p className="data-sec-p">The website in which you are linking must comply in all respects with the content standards set out in our Acceptable Use Policy <span className="color-data">www.workwyse.io/acceptable-use</span>.</p>
                            <p className="data-sec-p">If you wish to link to or make any use of content on our site other than that set out above, please contact <span className="color-data">team@workwyse.io</span>.</p>
                            <p className="data-title">Which country's laws apply to any disputes?</p>
                            <p className="data-sec-p">If you are a consumer, please note that these terms of use, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.</p>
                            <p className="data-sec-p">If you are a business, these terms of use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}