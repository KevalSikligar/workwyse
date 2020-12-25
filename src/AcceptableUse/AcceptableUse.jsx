import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export default class AcceptableUse extends Component {
    render() {
        const pathList = [
            { to: "/acceptable-use", title: "Acceptable Use" }
        ];

        return (
            <div>

                <BreadCrumbs title="Acceptable Use" breadcrumbssegment={pathList} />
                <div className="sptb bg-white">
                    <div className="container">
                        <div className="section-title center-block text-center">
                            <h2>WEBSITE ACCEPTABLE USE POLICY</h2>
                        </div>
                        <div className="section-title center-block text-left">
                            <h2>PLEASE READ THE TERMS OF THIS POLICY CAREFULLY BEFORE USING THE SITE </h2>
                        </div>
                        <div className="data-section">
                            <p className="data-title"> What's in these terms?</p>
                            <p className="data-sec-p">
                                This acceptable use policy sets out the content standards that apply when you upload
                                content to our site, make contact with other users on our site, link to our site, or interact with
                                our site in any other way,
                            </p>
                            <p className="data-title">  Who we are and how to contact us</p>
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
                            <p className="data-sec-p">Our Terms of website use <span className="color-data"> www.workwyse.io/terms </span> also apply to your use of our site.</p>
                            <p className="data-title">We may make changes to the terms of this policy</p>
                            <p className="data-sec-p">We amend these terms from time to time. Every time you wish to use our site, please check
                            these terms to ensure you understand the terms that apply at that time.
                            Prohibited uses</p>
                            <p className="data-title"> You may use our site only for lawful purposes. You may not use our site:</p>
                            <ul className="list_data">
                                <li>
                                    <p className="data-sec-p">In any way that breaches any applicable local, national or international law or
                                    regulation.
                                    </p>
                                </li>
                                <li>
                                    <p className="data-sec-p">In any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or
                                    effect.
                                    </p>
                                </li>
                                <li><p className="data-sec-p">For the purpose of harming or attempting to harm minors in any way. </p></li>
                                <li><p className="data-sec-p">To bully, insult, intimidate or humiliate any person.</p></li>
                                <li>
                                    <p className="data-sec-p">To send, knowingly receive, upload, download, use or re-use any material which
                                    does not comply with our content standards.
                                    </p>
                                </li>
                                <li>
                                    <p className="data-sec-p">To transmit, or procure the sending of, any unsolicited or unauthorised advertising or
                                    promotional material or any other form of similar solicitation (spam).
                                    </p>
                                </li>
                                <li>
                                    <p className="data-sec-p">To knowingly transmit any data, send or upload any material that contains viruses,
                                    Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other
                                    harmful programs or similar computer code designed to adversely affect the
                                    operation of any computer software or hardware.
                                    </p>
                                </li>
                            </ul>
                            <p className="data-title">You also agree:</p>
                            <ul className="list_data">
                                <li>
                                    <p className="data-sec-p">Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the
                                    provisions of our terms of website use www.workwyse.io/terms.
                                    </p>
                                </li>
                                <li><p className="data-sec-p">Not to access without authority, interfere with, damage or disrupt:</p></li>
                                <li><p className="data-sec-p">any part of our site; </p></li>
                                <li><p className="data-sec-p">any equipment or network on which our site is stored;</p></li>
                                <li><p className="data-sec-p">any software used in the provision of our site; or</p></li>
                                <li><p className="data-sec-p">any equipment or network or software owned or used by any third party.</p></li>
                            </ul>
                            <p className="data-title"> Interactive services</p>
                            <p className="data-title"> We may from time to time provide interactive services on our site, including, without
                            limitation:</p>
                            <ul className="list_data">
                                <li><p className="data-sec-p"> Chat rooms. </p></li>
                                <li><p className="data-sec-p">Bulletin boards.</p></li>
                            </ul>
                            <p className="data-sec-p">
                                Where we do provide any interactive service, we will provide clear information to you about
                                the kind of service offered, if it is moderated and what form of moderation is used <span className="data-title">(including
                            whether it is human or technical).</span></p>
                            <p className="data-sec-p">We will do our best to assess any possible risks for users
                            <span className="data-title">(and in particular, for children)</span> from third parties when they use any interactive service provided on our site, and we will
                            decide in each case whether it is appropriate to use moderation of the relevant service
                            (including what kind of moderation to use) in the light of those risks. However, we are under
                            no obligation to oversee, monitor or moderate any interactive service we provide on our site,
                            and we expressly exclude our liability for any loss or damage arising from the use of any
                            interactive service by a user in contravention of our content standards, whether the service
                            is moderated or not.</p>
                            <p className="data-sec-p">The use of any of our interactive services by a minor is subject to the consent of their parent
                            or guardian. We advise parents who permit their children to use an interactive service that it
                            is important that they communicate with their children about their safety online, as
                            moderation is not foolproof. Minors who are using any interactive service should be made
                            aware of the potential risks to them.</p>
                            <p className="data-sec-p">Where we do moderate an interactive service, we will normally provide you with a means of
                            contacting the moderator, should a concern or difficulty arise.</p>
                            <p className="data-title">Content standards</p>
                            <p className="data-sec-p">These content standards apply to any and all material which you contribute to our site
                            (Contribution), and to any interactive services associated with it.</p>
                            <p className="data-sec-p">The Content Standards must be complied with in spirit as well as to the letter. The standards
                            apply to each part of any Contribution as well as to its whole.</p>
                            <p className="data-sec-p"> Workwyse Ltd will determine, in its discretion, whether a Contribution breaches the Content
                            Standards.</p>
                            <p className="data-title"> A Contribution must:</p>
                            <ul className="list_data">
                                <li><p className="data-sec-p"> Be accurate <span className="data-title"> (where it states facts).</span> </p></li>
                                <li><p className="data-sec-p">Be genuinely held <span className="data-title">(where it states opinions).</span></p></li>
                                <li><p className="data-sec-p">Comply with the law applicable in England and Wales and in any country from which
                            it is posted.</p></li>
                            </ul>
                            <p className="data-title"> A Contribution must not:</p>
                            <ul className="list_data">
                                <li><p className="data-sec-p"> Be defamatory of any person.</p></li>
                                <li><p className="data-sec-p"> Be obscene, offensive, hateful or inflammatory.</p></li>
                                <li><p className="data-sec-p"> Bully, insult, intimidate or humiliate.</p></li>
                                <li><p className="data-sec-p"> Promote sexually explicit material.</p></li>
                                <li><p className="data-sec-p"> Include child sexual abuse material.</p></li>
                                <li><p className="data-sec-p"> Promote violence.</p></li>
                                <li><p className="data-sec-p"> Promote discrimination based on race, sex, religion, nationality, disability, sexual
                            orientation or age.</p></li>
                                <li><p className="data-sec-p"> Infringe any copyright, database right or trademark of any other person.</p></li>
                                <li><p className="data-sec-p"> Be likely to deceive any person.</p></li>
                                <li><p className="data-sec-p"> Breach any legal duty owed to a third party, such as a contractual duty or a duty of
                            confidence.</p></li>
                                <li><p className="data-sec-p"> Promote any illegal content or activity.</p></li>
                                <li><p className="data-sec-p"> Be in contempt of court.</p></li>
                                <li><p className="data-sec-p"> Be threatening, abuse or invade another's privacy, or cause annoyance,
                            inconvenience or needless anxiety.</p></li>
                                <li><p className="data-sec-p"> Be likely to harass, upset, embarrass, alarm or annoy any other person.</p></li>
                                <li><p className="data-sec-p"> Impersonate any person or misrepresent your identity or affiliation with any person.</p></li>
                                <li><p className="data-sec-p"> Give the impression that the Contribution emanates from Workwyse Ltd, if this is not the case.</p></li>
                                <li><p className="data-sec-p"> Advocate, promote, incite any party to commit, or assist any unlawful or criminal act
                                    such as <span className="data-title">(by way of example only)</span> copyright infringement or computer misuse.</p></li>
                                <li><p className="data-sec-p"> Contain a statement which you know or believe, or have reasonable grounds for
                                believing, that members of the public to whom the statement is, or is to be, published
                                are likely to understand as a direct or indirect encouragement or other inducement to
                            the commission, preparation or instigation of acts of terrorism.</p></li>
                                <li><p className="data-sec-p">Contain any advertising or promote any services or web links to other sites.</p></li>
                            </ul>
                            <p className="data-title"> Breach of this policy</p>
                            <p className="data-sec-p"> When we consider that a breach of this acceptable use policy has occurred, we may take
                            such action as we deem appropriate.</p>
                            <p className="data-sec-p">Failure to comply with this acceptable use policy constitutes a material breach of the terms
                            of use <span className="color-data">www.workwyse.io/terms </span> upon which you are permitted to use our site, and may result
                            in our taking all or any of the following actions: </p>
                            <ul className="list_data">
                                <li><p className="data-sec-p"> Immediate, temporary or permanent withdrawal of your right to use our site.</p></li>
                                <li><p className="data-sec-p"> Immediate, temporary or permanent removal of any Contribution uploaded by you to
                            our site.</p></li>
                                <li><p className="data-sec-p"> Issue of a warning to you.</p></li>
                                <li><p className="data-sec-p"> Legal proceedings against you for reimbursement of all costs on an indemnity basis
                                <span className="data-title"> (including, but not limited to, reasonable administrative and legal costs)</span> resulting
                            from the breach.</p></li>
                                <li><p className="data-sec-p">Further legal action against you.</p></li>
                                <li><p className="data-sec-p">Disclosure of such information to law enforcement authorities as we reasonably feel
                            is necessary or as required by law.</p></li>
                            </ul>
                            <p className="data-sec-p">
                                We exclude our liability for all action we may take in response to breaches of this acceptable
                                use policy. The actions we may take are not limited to those described above, and we may
                                take any other action we reasonably deem appropriate.</p>
                            <p className="data-title"> How this contract can be transferred </p>
                            <p className="data-sec-p">We can transfer our rights and obligations under these terms to any third party, provided this
                            does not adversely affect your rights under these terms.</p>
                            <p className="data-title"> Which country's laws apply to any disputes?</p>
                            <p className="data-sec-p">If you are a consumer, please note that the terms of this policy, its subject matter and its
                            formation are governed by English law. You and we both agree that the courts of England
                            and Wales will have exclusive jurisdiction except that if you are a resident of Northern
                            Ireland you may also bring proceedings in Northern Ireland, and if you are resident of
                            Scotland, you may also bring proceedings in Scotland.</p>
                            <p className="data-sec-p">If you are a business, the terms of this policy, its subject matter and its formation <span className="data-title"> (and any
                            non-contractual disputes or claims)</span> are governed by English law. We both agree to the
                            exclusive jurisdiction of the courts of England and Wales.</p>

                    </div>
                    </div>
                </div>

            </div>
        )
    }
}
