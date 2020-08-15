import React from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default function TermsOfService() {

    const pathList = [
        { to: "/terms-of-service", title: "Terms of Service" }
    ]

    return (
        <div>
            <BreadCrumbs title="Terms of Service" breadcrumbssegment={pathList} />
            <div class="sptb bg-white">
                    <div class="container">
                        <div class="section-title center-block text-center">
                            <h1>WE PROTECT YOUR INFORMATION. OUR TERMS & CONDITIONS </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text priint.</p>
                        </div>
                        <div class="privacy-policy">                        
                            <h3>Genral Terms</h3>
                            <p>Workwyse is a service provided by Workwyse Ltd (the Company) of ....... ----, United Kingdom. These terms of service ("Terms") govern your access and use of all Workwyse services so please read them carefully before using the services.  </p>
                            <p>By using the Services you agree to be bound by these Terms in their entirety.</p>
                            <p>If you are using the services on behalf of an organization then you are agreeing to these terms for that organization and are warranting that you have the authority to bind that organization to these terms. In that case "you" and "your" will refer to that organization.</p>
                            <p>You may use the Services only in compliance with these Terms. You may use the Services only if you have the power to form a contract with Workwyse Ltd and are not barred under any applicable laws from doing so. The Services may continue to change over time as we refine and add more features. We may stop, suspend, or modify the Services at any time without prior notice to you. We may also remove any content from our Services at our discretion. </p>
                            <h3>Account Security</h3>
                            <p>You are responsible for safeguarding the password that you use to access the Services and you agree not to disclose your password to any third party You are responsible for any activity using your account, whether or not you authorized that activity. You should immediately notify Workwyse Ltd of any unauthorized use of your account.</p>
                            <h3>Your General Responsibilities</h3>
                            <p>Files and other content in the Services may be protected by intellectual property rights of others. Please do not copy, upload, download, or share files unless you have the right to do so. You, not Workwyse Ltd, will be fully responsible and liable for what you copy, share, upload, download or otherwise use while using the Services. You must not upload spyware or any other malicious software to the Service. You, and not Workwyse Ltd, are responsible for maintaining and protecting your account. If your contact information, or other information related to your account, changes, you must notify us promptly and keep your information current.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
