import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export default function TermsOfService() {

    const pathList = [{ to: "/terms-of-service", title: "Terms of Service" }]

    return (
        <div>
            <BreadCrumbs title="Terms of Service" breadcrumbssegment={pathList} />
            <div className="sptb bg-white">
                <div className="container">
                    <div className="section-title center-block text-center">
                        <h2>AGREED TERMS</h2>
                    </div>
                    <div className="data-section">
                        <p className="data-title">1 ABOUT US</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">1.1 Company details</p>
                        <p className="data-sec-p">
                            <span className="color-data">Workwyse Ltd (company number 12649300)</span> (we and us) is a company registered in <span className="color-data">England and Wales</span> and our registered office is at
                            <span className="data-title"> Workwyse Ltd, Kemp House, 152-160 City Road, London, EC1V 2NX</span>. We operate the website
                            <span className="color-data"> www.workwyse.io.</span>
                        </p>
                        <p className="data-title">1.2 Contacting us</p>
                        <p className="data-sec-p">To contact us, telephone our customer service team at
                            <span className="data-title"> 0207 4594862.</span> or email us at
                            <span className="color-data"> team@workwyse.io .</span> How to give us formal notice of any matter under the Contract is set out in
                            <span className="color-data"> 15.2.</span>
                        </p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">2. OUR CONTRACT WITH YOU</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">2.1 Our contract.</p>
                        <p className="data-sec-p">
                            These terms and conditions <span className="data-title">(Terms)</span>  apply to the order by you and
                            supply of Services by us to you<span className="data-title"> (Contract)</span>. They apply to the exclusion of any other
                            terms that you seek to impose or incorporate, or which are implied by law, trade
                            custom, practice or course of dealing.
                        </p>
                        <p className="data-title">2.2 Entire agreement.</p>
                        <p className="data-sec-p">
                            The Contract is the entire agreement between you and us in
                            relation to its subject matter. You acknowledge that you have not relied on any
                            statement, promise or representation or assurance or warranty that is not set out in
                            the Contract.
                        </p>
                        <p className="data-title">2.3 Language</p>
                        <p className="data-sec-p">
                            These Terms and the Contract are made only in the English language.
                        </p>
                        <p className="data-title">2.4 Your copy.</p>
                        <p className="data-sec-p">
                            You should print off a copy of these Terms or save them to your
                            computer for future reference.
                        </p>
                    </div>
                    <div className="data-section">
                        <p className="data-title"> 3. PLACING AN ORDER AND ITS ACCEPTANCE</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title"> 3.1 Placing your order.</p>
                        <p className="data-sec-p">
                            Please follow the onscreen prompts to place your order. You
                            may only submit an order using the method set out on the site. Each order is an
                            offer by you to buy the services specified in the order <span className="data-title"> (Services) </span>subject to these
                            Terms.
                        </p>
                        <p className="data-title">3.2 Correcting input errors.</p>
                        <p className="data-sec-p">
                            Our order process allows you to check and amend any
                            errors before submitting your order to us. Please check the order carefully before
                            confirming it. You are responsible for ensuring that your order and any specification
                            submitted by you is complete and accurate.
                        </p>
                        <p className="data-title"> 3.3 Acknowledging receipt of your order.</p>
                        <p className="data-sec-p">
                            After you place your order, you will receive
                            an email from us acknowledging that we have received it, but please note that this
                            does not mean that your order has been accepted. Our acceptance of your order
                            will take place as described in 3.4.
                        </p>
                        <p className="data-title">3.4 Accepting your order.</p>
                        <p className="data-sec-p">
                            Our acceptance of your order takes place when we send an email to you to accept it
                            <span className="data-title"> (Order Confirmation)</span>, at which point and on which date
                            <span className="data-title"> (Commencement Date)</span> the Contract between you and us will come into existence.
                            The Contract will relate only to those Services confirmed in the Order Confirmation.
                        </p>
                        <p className="data-title"> 3.5 If we cannot accept your order.</p>
                        <p className="data-sec-p">
                            If we are unable to supply you with the Services
                            for any reason, we will inform you of this by email and we will not process your
                            order. If you have already paid for the Services, we will refund you the full amount.
                        </p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">4. CANCELLING YOUR ORDER</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title">4.1 </span>You may cancel the Contract with us if you deactivate your account from the
                        settings page. You cannot cancel the Contract once we have completed the
                        Services.
                        </p>
                        <p className="data-sec-p"><span className="data-title">4.2</span> You can also email us at support@workwyse.io or by calling our Customer Services
                        team on 0207 4594862 or by post to Workwyse Ltd, Kemp House, 152-160 City
                        Road, London, EC1V 2NX. If you are emailing us or writing to us, please include
                        details of your order to help us to identify it.
                        </p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">5. OUR SERVICES</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title"> 5.1 Descriptions and illustrations.</p>
                        <p className="data-sec-p"> Any descriptions or illustrations on our site are published for
                        the sole purpose of giving an approximate idea of the services described in them.
                        They will not form part of the Contract or have any contractual force.
                        </p>
                        <p className="data-title"> 5.2 Compliance with specification.</p>
                        <p className="data-sec-p">Subject to our right to amend the specification<span className="color-data"> (see 5.3)</span> we will supply the Services to you in accordance with the specification for the Services
                        appearing on our website at the date of your order in all material respects.
                        </p>
                        <p className="data-title">5.3 Changes to specification.</p>
                        <p className="data-sec-p">We reserve the right to amend the specification of the Services
                        if required by any  applicable statutory or regulatory requirement or if the  amendment
                        will not materially affect the nature or quality of the Services.
                        </p>
                        <p className="data-title"> 5.4 Reasonable care and skill.</p>
                        <p className="data-sec-p">
                            We warrant to you that the Services will be provided using reasonable care and skill.
                        </p>
                        <p className="data-title"> 5.5 Time for performance.</p>
                        <p className="data-sec-p">We will use all reasonable endeavours to meet any
                        performance dates specified in the Order Confirmation, but any such dates are
                        estimates only and failure to perform the Services by such dates will not give you
                        the right to terminate the Contract.
                        </p>
                    </div>

                    <div className="data-section">
                        <p className="data-title"> 6. YOUR OBLIGATIONS</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">  6.1 It is your responsibility to ensure that:</p>
                        <ul className="list_data">
                            <p className="data-sec-p"> <span className="data-title"> (a)</span> The terms of your order are complete and accurate; </p>
                            <p className="data-sec-p"><span className="data-title">(b) </span> You cooperate with us in all matters relating to the Services;</p>
                            <p className="data-sec-p"><span className="data-title">(c) </span> You provide us with such information and materials we may reasonably
                            require in order to supply the Services, and ensure that such information is
                            complete and accurate in all material respects; </p>
                        </ul>
                        <p className="data-sec-p"> <span className="data-title">(d)</span> You comply with all applicable laws, including health and safety laws;</p>
                        <p className="data-sec-p"> <span className="data-title">(e) </span>Insert any other relevant obligations.</p>
                        <p className="data-title"> 6.2 If our ability to perform the Services is prevented or delayed by any failure by you to fulfil any obligation
                        listed in <span className="color-data"> 6.1 (Your Default) </span>
                        </p>
                        <ul className="list_data">
                            <p className="data-sec-p">  <span className="data-title"> (a)</span> we will be entitled to suspend performance of the Services until you remedy
                            Your Default, and to rely on Your Default to relieve us from the performance
                            of the Services, in each case to the extent Your Default prevents or delays
                            performance of the Services. In certain circumstances Your Default may
                            entitle us to terminate the Contract under 15 (Termination); </p>
                            <p className="data-sec-p">  <span className="data-title">(b)</span> we will not be responsible for any costs or losses you sustain or incur arising
                            directly or indirectly from our failure or delay to perform the Services; and</p>
                            <p className="data-sec-p"> <span className="data-title"> (c)</span> it will be your responsibility to reimburse us on written demand for any costs
                            or losses we sustain or incur arising directly or indirectly from Your Default. </p>
                        </ul>
                    </div>
                    <div className="data-section">
                        <p className="data-title">7. CHARGES</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title"> 7.1.</span> In consideration of us providing the Services you must pay our charges (Charges)
                        in accordance with this 7</p>
                        <p className="data-sec-p"><span className="data-title">7.2</span> The Charges are the prices quoted on our site at the time you submit your order.</p>
                        <p className="data-sec-p"><span className="data-title">7.3 </span>If you wish to change the scope of the Services after we accept your order, and we
                        agree to such change, we will modify the Charges accordingly.</p>
                        <p className="data-sec-p"><span className="data-title">7.4</span>We take all reasonable care to ensure that the prices stated for the Services are
                        correct at the time when the relevant information was entered into the system.
                        However, please see 7.6 for what happens if we discover an error in the price of the
                        Services you ordered.</p>
                        <p className="data-sec-p"><span className="data-title">7.5 </span>Our Charges may change from time to time, but changes will not affect any order
                        you have already placed.</p>
                        <p className="data-sec-p"><span className="data-title">7.6 </span>It is always possible that, despite our reasonable efforts, some of the Services on
                        our site may be incorrectly priced. If the correct price for the Services is higher than
                        the price stated on our site, we will contact you as soon as possible to inform you of
                        this error and we will give you the option of continuing to purchase the Services at
                        the correct price or cancelling your order. We will not process your order until we
                        have your instructions. If we are unable to contact you using the contact details you
                        provided during the order process, we will treat the order as cancelled and notify
                        you in writing. However, if we mistakenly accept and process your order where a
                        pricing error is obvious and unmistakable and could reasonably have been
                        recognised by you as a mispricing, we may cancel supply of the Services and
                        refund you any sums you have paid.</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title"> 8. HOW TO PAY FOR OUR SERVICES</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title"> 8.1</span>  Payment for the Services is in advance. We will take your payment upon
                            acceptance of your order when you confirm the order by selecting ‘This lead will
                            cost £X to contact. Do you wish to proceed?’. ‘X’ denotes the price for the relevant
                            lead.
                        </p>
                        <p className="data-sec-p"><span className="data-title">8.2</span>  You must pay by submitting your credit or debit card details with your Order and we
                            will take payment at the end of each week depending on how many Orders have
                            been purchased. For example, 1 lead/contact = 1 order.
                        </p>
                        <p className="data-sec-p"><span className="data-title">8.3 </span> In the case of subscription payments, and premium leads, we will take payment at
                            the end of each week depending on how many Orders have been purchased.
                        </p>
                        <p className="data-sec-p"><span className="data-title"> 8.4</span> You can pay for the Services using a debit card or credit card via the payment
                            processor Stripe. We accept the following cards:
                            Visa, American Express, Mastercard, Discover, JCB
                        </p>
                    </div>

                    <div className="data-section">
                        <p className="data-title">  9. INTELLECTUAL PROPERTY RIGHTS</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title">9.1</span> All intellectual property rights in or arising out of or in connection with the Services
                            (other than intellectual property rights in any materials provided by you) will be
                            owned by us.
                        </p>
                        <p className="data-sec-p"><span className="data-title">9.2</span> You agree to grant us a fully paid-up, non-exclusive, royalty-free, non-transferable
                            licence to copy and modify any materials provided by you to us for the term of the
                            Contract for the purpose of providing the Services to you.
                        </p>
                    </div>

                    <div className="data-section">
                        <p className="data-title">10. HOW WE MAY USE YOUR PERSONAL INFORMATION</p>
                    </div>
                    <div className="data-section">
                        <ul className="list_data">
                            <p className="data-sec-p"><span className="data-title">10.1</span> We will use any personal information you provide to us to: </p>
                            <p className="data-sec-p"><span className="data-title"> (a)</span> Provide the Services;</p>
                            <p className="data-sec-p"><span className="data-title">(b) </span> Process your payment for the Services; and</p>
                            <p className="data-sec-p"><span className="data-title">(c) </span> Inform you about similar products or services that we provide, but you may
                                stop receiving these at any time by contacting us.
                            </p>
                        </ul>
                        <p className="data-title"> 10.2 We will process your personal information in accordance with our Privacy Policy
                        <span className="color-data"> (www.workwyse.io/privacy) </span> ,the terms of which are incorporated into this Contract.</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">11. LIMITATION OF LIABILITY</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">11.1 Nothing in the Contract limits any liability which cannot legally be limited, including
                        liability for:
                        </p>
                        <ul className="list_data">
                            <p className="data-sec-p"> <span className="data-title"> (a)</span> death or personal injury caused by negligence;</p>
                            <p className="data-sec-p"><span className="data-title">(b) </span> fraud or fraudulent misrepresentation; and</p>
                            <p className="data-sec-p"><span className="data-title">(c) </span> breach of the terms implied by section 2 of the Supply of Goods and
                                Services Act 1982 (title and quiet possession).
                            </p>
                        </ul>
                        <p className="data-title"> 11.2 Subject to 11.1, we will not be liable to you, whether in contract, tort
                        <span className="color-data"> (including negligence)</span>, for breach of statutory duty, or otherwise, arising under or in connection with the Contract for:
                        </p>
                        <ul className="list_data">
                            <p className="data-sec-p"> <span className="data-title">(a)</span> Death or personal injury caused by negligence;</p>
                            <p className="data-sec-p"><span className="data-title">(b) </span> Fraud or fraudulent misrepresentation; and</p>
                            <p className="data-sec-p"><span className="data-title">(c) </span> Breach of the terms implied by section 2 of the Supply of Goods and
                                Services Act 1982 <span className="color-data">(title and quiet possession)</span>.
                            </p>
                        </ul>
                        <ul className="list_data">
                            <p className="data-sec-p">  <span className="data-title">(a)</span> Loss of profits; </p>
                            <p className="data-sec-p">  <span className="data-title">(b)</span> Loss of sales or business;</p>
                            <p className="data-sec-p"> <span className="data-title"> (c)</span> Loss of agreements or contracts; </p>
                            <p className="data-sec-p"> <span className="data-title"> (d)</span> Loss of anticipated savings; </p>
                            <p className="data-sec-p"> <span className="data-title"> (e)</span> Loss of use or corruption of software, data or information; </p>
                            <p className="data-sec-p"> <span className="data-title"> (f)</span> Loss of or damage to goodwill; and </p>
                            <p className="data-sec-p"> <span className="data-title"> (g)</span> Any indirect or consequential loss. </p>
                        </ul>
                        <p className="data-sec-p"><span className="data-title">9.1</span> All intellectual property rights in or arising out of or in connection with the Services
                            (other than intellectual property rights in any materials provided by you) will be
                            owned by us.
                        </p>
                        <p className="data-sec-p"><span className="data-title"> 11.3 </span> Subject to 11.1, our total liability to you arising under or in connection with the
                            Contract, whether in contract, tort (including negligence), breach of statutory duty,
                            or otherwise, will be limited to the amount of the total Charges paid under the
                            Contract.
                        </p>
                        <p className="data-sec-p"><span className="data-title"> 11.4</span> We have given commitments as to compliance of the Services with the relevant
                            specification in 5.2. In view of these commitments, the terms implied by sections 3
                            and 5 of the Supply of Goods and Services Act 1982 are, to the fullest extent
                            permitted by law, excluded from the Contract.
                        </p>
                        <p className="data-sec-p"><span className="data-title"></span> 11.5 Unless you notify us that you intend to make a claim in respect of an event within
                            the notice period, we shall have no liability for that event. The notice period for an
                            event shall start on the day on which you became, or ought reasonably to have
                            become, aware of the event having occurred and shall expire three months from
                            that date. The notice must be in writing and must identify the event and the grounds
                            for the claim in reasonable detail.
                        </p>
                        <p className="data-sec-p"><span className="data-title"> 11.6 </span>This 11 will survive termination of the Contract.
                        </p>
                    </div>

                    <div className="data-section">
                        <p className="data-title">12. CONFIDENTIALITY</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title">12.1</span> We each undertake that we will not at any time during the Contract, and for a period
                            of three years after termination of the Contract, disclose to any person any
                            confidential information concerning one another's business, affairs, customers,
                            clients or suppliers, except as permitted by 12.2.
                        </p>
                        <ul className="list_data">
                            <p className="data-sec-p"> <span className="data-title"> (a)</span> to such of our respective employees, officers, representatives,
                                subcontractors or advisers who need to know such information for the
                                purposes of exercising our respective rights or carrying out our respective
                                obligations under the Contract. We will each ensure that such employees,
                                officers, representatives, subcontractors or advisers comply with this 12; and
                            </p>
                            <p className="data-sec-p"><span className="data-title">(b) </span> as may be required by law, a court of competent jurisdiction or any
                                governmental or regulatory authority.
                            </p>
                        </ul>
                        <p className="data-title"> 12.2 We each may disclose the other's confidential information: </p>
                        <ul className="list_data">
                            <p className="data-sec-p"> <span className="data-title">(a)</span> Death or personal injury caused by negligence;</p>
                            <p className="data-sec-p"><span className="data-title">(b) </span> Fraud or fraudulent misrepresentation; and</p>
                            <p className="data-sec-p"><span className="data-title">(c) </span> Breach of the terms implied by section 2 of the Supply of Goods and
                                Services Act 1982 <span className="color-data">(title and quiet possession)</span>.
                            </p>
                        </ul>
                        <p className="data-sec-p"><span className="data-title">12.3</span> Each of us may only use the other&#39;s confidential information for the purpose of
                            fulfilling our respective obligations under the Contract.
                        </p>
                    </div>

                    <div className="data-section">
                        <p className="data-title"> 13. TERMINATION, CONSEQUENCES OF TERMINATION AND SURVIVAL</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title">13.1 </span> Termination. Without limiting any of our other rights, we may suspend the
                            performance of the Services, or terminate the Contract with immediate effect by
                            giving written notice to you if:
                        </p>
                        <ul className="list_data">
                            <p className="data-sec-p"> <span className="data-title">(a)</span> You commit a material breach of any term of the Contract and (if such a
                                breach is remediable) fail to remedy that breach within 14 days of you being
                                notified in writing to do so;
                            </p>
                            <p className="data-sec-p"><span className="data-title">(b) </span> You fail to pay any amount due under the Contract on the due date forpayment;</p>
                            <p className="data-sec-p"><span className="data-title">(c) </span> You take any step or action in connection with you entering administration,
                                provisional liquidation or any composition or arrangement with your creditors
                                (other than in relation to a solvent restructuring), applying to court for or
                                obtaining a moratorium under Part A1 of the Insolvency Act 1986, being
                                wound up (whether voluntarily or by order of the court, unless for the
                                purpose of a solvent restructuring), having a receiver appointed to any of
                                your assets or ceasing to carry on business;
                            </p>
                            <p className="data-sec-p"><span className="data-title">(d) </span> You suspend, threaten to suspend, cease or threaten to cease to carry on all
                                or a substantial part of your business; or
                            </p>
                            <p className="data-sec-p"><span className="data-title">(e) </span> Your financial position deteriorates to such an extent that in our opinion your
                                capability to adequately fulfil your obligations under the Contract has been
                                placed in jeopardy.
                            </p>
                        </ul>
                        <p className="data-sec-p"><span className="data-title">13.2 Consequences of termination </span>
                            <ul className="list_data">
                                <p className="data-sec-p"> <span className="data-title">(a)</span> Termination of the Contract will not affect your or our rights and remedies
                                    that have accrued as at termination.
                                </p>
                            </ul>
                        </p>
                        <p className="data-sec-p"><span className="data-title">13.3 </span> Survival. Any provision of the Contract that expressly or by implication is intended
                            to come into or continue in force on or after termination will remain in full force and
                            effect.
                        </p>
                    </div>

                    <div className="data-section">
                        <p className="data-title">14. EVENTS OUTSIDE OUR CONTROL</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title">14.1 </span> We will not be liable or responsible for any failure to perform, or delay in
                            performance of, any of our obligations under the Contract that is caused by any act
                            or event beyond our reasonable control (Event Outside Our Control).
                        </p>
                        <p className="data-sec-p"><span className="data-title">14.2 </span>If an Event Outside Our Control takes place that affects the performance of our
                             obligations under the Contract:
                            <ul className="list_data">
                                <p className="data-sec-p"> <span className="data-title">(a)</span> we will contact you as soon as reasonably possible to notify you; and</p>
                                <p className="data-sec-p"><span className="data-title">(b) </span>our obligations under the Contract will be suspended and the time for
                                    performance of our obligations will be extended for the duration of the Event
                                    Outside Our Control. We will arrange a new date for performance of the
                                    Services with you after the Event Outside Our Control is over.
                                </p>
                            </ul>
                        </p>
                        <p className="data-sec-p"><span className="data-title">14.3 </span> You may cancel the Contract affected by an Event Outside Our Control. To cancel
                            you can deactivate your account on the settings page. If you opt to cancel, we will
                            refund the price you have paid, less the charges reasonably and actually incurred
                            us by in performing the Services up to the date of the occurrence of the Event
                            Outside Our Control.
                        </p>
                    </div>
                    <div className="data-section">
                        <p className="data-title">15. COMMUNICATIONS BETWEEN US</p>
                    </div>
                    <div className="data-section">
                        <p className="data-sec-p"><span className="data-title">15.1 </span> When we refer to "in writing" in these Terms, this includes email.
                        </p>
                        <p className="data-sec-p"><span className="data-title"> 15.2</span> If an Event Outside Our Control takes place that affects the performance of our
                             obligations under the Contract:
                        </p>
                        <p className="data-sec-p"><span className="data-title"> 15.3</span> A notice or other communication is deemed to have been received:
                            <ul className="list_data">
                                <p className="data-sec-p"> <span className="data-title">(a)</span> If delivered personally, on signature of a delivery receipt or at the time the
                                    notice is left at the proper address;</p>
                                <p className="data-sec-p"><span className="data-title">(b) </span> If sent by pre-paid first class post or other next working day delivery service,
                                    at 9.00 am on the second working day after posting; or.
                                </p>
                                <p className="data-sec-p"><span className="data-title">(c) </span> If sent by email, at 9.00 am the next working day after transmission.
                                </p>
                            </ul>
                        </p>
                        <p className="data-sec-p"><span className="data-title">15.4 </span> In proving the service of any notice, it will be sufficient to prove, in the case of a
                            letter, that such letter was properly addressed, stamped and placed in the post and,
                            in the case of an email, that such email was sent to the specified email address of
                            the addressee.
                        </p>
                        <p className="data-sec-p"><span className="data-title">15.5 </span> The provisions of this clause will not apply to the service of any proceedings or
                             other documents in any legal action.
                        </p>
                    </div>

                    <div className="data-section">
                        <p className="data-title"> 16. GENERAL</p>
                    </div>
                    <div className="data-section">
                        <p className="data-title"> 16.1 Assignment and transfer</p>
                        <ul className="list_data">
                            <p className="data-sec-p"> <span className="data-title">(a)</span> IWe may assign or transfer our rights and obligations under the Contract to
                                    another entity but will always notify you by posting on this webpage if this
                                    happens.</p>
                            <p className="data-sec-p"><span className="data-title">(b) </span>  You may only assign or transfer your rights or your obligations under the
                                     Contract to another person if we agree in writing.
                            </p>
                            <p className="data-sec-p"><span className="data-title">(c) </span> If sent by email, at 9.00 am the next working day after transmission.
                            </p>
                        </ul>
                        <p className="data-title">16.2 Variation. </p>
                        <p className="data-sec-p">Any variation of the Contract only has effect if it is in writing and signed
                            by you and us <span className="data-title"> (or our respective authorised representatives).</span></p>
                       
                        <p className="data-title">16.3 Waiver.</p>
                        <p className="data-sec-p">If we do not insist that you perform any of your obligations under the
                        Contract, or if we do not enforce our rights against you, or if we delay in doing so,
                        that will not mean that we have waived our rights against you or that you do not
                        have to comply with those obligations. If we do waive any rights, we will only do so
                        in writing, and that will not mean that we will automatically waive any right related to
                            any later default by you.</p>
                        <p className="data-title">16.4 Severence.</p>
                        <p className="data-sec-p">Each paragraph of these Terms operates separately. If any court or
                        relevant authority decides that any of them is unlawful or unenforceable, the
                        remaining paragraphs will remain in full force and effect.</p>

                        <p className="data-title">16.5 Third party rights.</p>
                        <p className="data-sec-p"> The Contract is between you and us. No other person has any
                         rights to enforce any of its terms.</p>

                        <p className="data-title">  16.6 Governing law and jurisdiction. </p>
                        <p className="data-sec-p"> The Contract is governed by English law and we
                            each irrevocably agree to submit all disputes arising out of or in connection with the
                            Contract to the exclusive jurisdiction of the English courts.</p>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}
