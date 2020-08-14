import React from 'react';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default function Privacy() {

    const pathList = [
        { to: "/privacy-policy", title: "Privacy Policy" }
    ]

    return (

        <div>
            <BreadCrumbs title="Privacy Policy" breadcrumbssegment={pathList} />
            <h3>Privacy Policy & GDPR
            PRIVACY POLICY This privacy policy applies between you, the User of this website and Workwyse Ltd, the owner and provider of this website. Workwyse Ltd takes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website. This privacy policy should be read alongside, and in addition to our Terms and Conditions, which can be found at: www.workwyse.io/terms. Please read this privacy policy carefully. Definitions and interpretation 1. In this privacy policy, the following definitions are used: Data collectively all information that you submit to Workwyse Ltd via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws; Cookies a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the website. Details of the cookies used by this Website are set out in the clause below ( Cookies); Data Protection Laws any applicable law relating to the processing of personal Data, including but not limited to the Directive 96/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws, regulations and secondary legislation, for as long as the GDPR is effective in the UK; GDPR the General Data Protection Regulation (EU) 2016/679; Workwyse Ltd, we or us, Workwyse Ltd, a company incorporated in England and Wales with registered number 12649300 whose registered office is at 308 Knighton Lane East, Leicestershire, LE2 6FS; UK and EU Cookie Law the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011; User or you any third party that accesses the Website and is not either employed by Workwyse Ltd and acting in the course of their employment or (1) engaged as a consultant or otherwise providing services to Workwyse Ltd and accessing the Website in connection with
            </h3>
        </div>
    )
}
