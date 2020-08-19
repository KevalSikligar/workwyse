import React from 'react';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import { Link } from 'react-scroll';

export default function Privacy() {
  const pathList = [{ to: '/privacy-policy', title: 'Privacy Policy' }];

  return (
    <div>
      <BreadCrumbs title='Privacy Policy' breadcrumbssegment={pathList} />
      <div className='sptb bg-white'>
        <div className='container'>
          <div className='section-title center-block text-center'>
            <h1>WE PROTECT YOUR INFORMATION. OUR PRIVACY POLICY </h1>
            <p>
              Workwyse takes all necessary steps to keep your personal
              information safe and secure. We don’t share or sell your
              information with third parties. It is important for us to make you
              feel safe and secure using our platform. With this private policy,
              we want to be transparent with what information we collect and how
              we use it.
            </p>
          </div>
          <div className='privacy-policy'>
            <div className='ml-auto'>
              <Link
                href='#'
                to='cookies'
                smooth={true}
                duration={2000}
                className='btn btn-cookies'
              >
                Cookies Policy
              </Link>
            </div>
            <h3>Privacy Policy & GDPR</h3>
            <p>
              This privacy policy applies between you, the User of this website
              and Workwyse Ltd, the owner and provider of this website. Workwyse
              Ltd takes the privacy of your information very seriously. This
              privacy policy applies to our use of any and all Data collected by
              us or provided by you in relation to your use of the Website.
            </p>
            <p>
              {' '}
              This privacy policy should be read alongside, and in addition to
              our Terms and Conditions, which can be found at:
              www.workwyse.io/terms. Please read this privacy policy carefully.
            </p>
            <h3> Definitions and interpretation</h3>
            <div className='privacy-sub-section'>
              <h4>
                {' '}
                In this privacy policy, the following definitions are used:
              </h4>
              <ul>
                <li>
                  Data collectively all information that you submit to WorkWyse
                  Ltd via the Website. This definition incorporates, where
                  applicable, the definitions provided in the Data Protection
                  Laws;
                </li>
                <li>
                  Cookies a small text file placed on your computer by this
                  Website when you visit certain parts of the Website and/or
                  When you use certain features of the Website. Details of the
                  cookies used by this Website are set out in the clause below (
                  Cookies);{' '}
                </li>
                <li>
                  Data Protection Laws any applicable law relating to the
                  processing of personal Data, including but not limited to the
                  Directive 96/46/EC (Data Protection Directive) or the GDPR,
                  and any national implementing laws, regulations and secondary
                  legislation, for as long as the GDPR is effective in the UK;
                </li>
                <li>
                  GDPR the General Data Protection Regulation (EU) 2016/679;
                </li>
                <li>
                  WorkWyse Ltd, we or us WorkWyse Ltd, a company incorporated in
                  England and Wales with registered number 12649300 whose
                  registered office is at 308 Knighton Lane East,
                  Leicestershire, LE2 6FS;{' '}
                </li>
                <li>
                  UK and EU Cookie Law the Privacy and Electronic Communications
                  (EC Directive) Regulations 2003 as amended by the Privacy and
                  Electronic Communications (EC Directive) (Amendment)
                  Regulations 2011;
                </li>
                <li>
                  User or you any third party that accesses the Website and is
                  not either (i) employed by WorkWyse Ltd and acting in the
                  course of their employment or (ii) engaged as a consultant or
                  otherwise providing services to WorkWyse Ltd and accessing the
                  Website in connection with the provision of such services; and
                </li>
                <li>
                  Website the website that you are currently using,
                  www.workwyse.io, and any sub-domains of this site unless
                  expressly excluded by their own terms and conditions.
                </li>
              </ul>
            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h4>
                {' '}
                In this privacy policy, unless the context requires a different
                interpretation:
              </h4>
              <ul>
                <li>The singular includes the plural and vice versa;</li>
                <li>
                  Cookie is a small text file placed on your computer by this
                  Website when you visit certain parts of the Website and/or
                  when you use certain features of the Website. Details of the
                  cookies used by this Website are set out in the clause below (
                  Cookies);{' '}
                </li>
                <li>
                  References to sub-clauses, clauses, schedules or appendices
                  are to sub-clauses, clauses, schedules or appendices of this
                  privacy policy;
                </li>
                <li>
                  A reference to a person includes firms, companies, government
                  entities, trusts and partnerships;
                </li>
                <li>
                  "Including" is understood to mean "including without
                  limitation";{' '}
                </li>
                <li>
                  Reference to any statutory provision includes any modification
                  or amendment of it;
                </li>
                <li>
                  The headings and sub-headings do not form part of this privacy
                  policy.
                </li>
              </ul>
            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h3> Scope of this privacy policy</h3>
              <p>
                {' '}
              This privacy policy applies only to the actions of WorkWyse Ltd and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.
            </p>
              <p>
                {' '}
              For purposes of the applicable Data Protection Laws, WorkWyse Ltd is the "data controller". This means that WorkWyse Ltd determines the purposes for which, and the manner in which, your Data is processed.
            </p>
            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h3> Data collected</h3>
              <h4> We may collect the following Data, which includes personal Data, from you:</h4>
              <ul>
                <li>Name;</li>
                <li>Job title;</li>
                <li>Profession;</li>
                <li>Contact Information such as email addresses and telephone numbers;</li>
                <li>Demographic information such as postcode, preferences and interests;</li>
                <li>Financial information such as credit / debit card numbers;</li>
                <li>IP address (automatically collected);</li>
                <li>Web browser type and version (automatically collected);</li>
                <li>Company number, vat number, email address, phone number, location, additional company and user information required as per sign up process;</li>
              </ul>
              <p className="mt-md-4">
                {' '}
              in each case, in accordance with this privacy policy.
            </p>

            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h3>How we collect Data</h3>
              <h4>We collect Data in the following ways:</h4>
              <ul>
                <li>Data is given to us by you ; </li>
                <li>Data is received from other sources; and</li>
                <li>Data is collected automatically.</li>
              </ul>
            </div>

            <div className='privacy-sub-section mt-md-5'>
              <h3>Data that is given to us by you</h3>
              <h4>WorkWyse Ltd will collect your Data in a number of ways, for example:</h4>
              <ul>
                <li>When you contact us through the Website, by telephone, post, e-mail or through any other means; </li>
                <li>When you register with us and set up an account to receive our products/services;</li>
                <li>When you complete surveys that we use for research purposes (although you are not obliged to respond to them);</li>
                <li>When you enter a competition or promotion through a social media channel;</li>
                <li>When you make payments to us, through this Website or otherwise;</li>
                <li>When you elect to receive marketing communications from us;</li>
                <li>When you use our services;</li>
              </ul>
              <p className="mt-md-4">
                {' '}
              in each case, in accordance with this privacy policy.
            </p>
            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h3>Data that is received from third parties</h3>
              <h4>WorkWyse Ltd will receive Data about you from the following third parties:</h4>
              <ul>
                <li>LinkedIn. </li>
              </ul>
            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h3>Data that is received from publicly available third parties sources</h3>
              <h4>We will receive Data about you from the following publicly available third party sources:</h4>
              <ul>
                <li>Trustpilot, Glassdoor, Google, Facebook.</li>
              </ul>
            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h3>Data that is collected automatically</h3>
              <h4>To the extent that you access the Website, we will collect your Data automatically, for example:</h4>
              <ul>
                <li>We automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.</li>
                <li>We will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed "Cookies".</li>
              </ul>
            </div>
            <div className='privacy-sub-section mt-md-5'>
              <h3>Our use of Data</h3>
              <h4>Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:</h4>
              <ul>
                <li>Internal record keeping;</li>
                <li>Improvement of our products / services;</li>
                <li>Transmission by email of marketing materials that may be of interest to you;</li>
                <li>Contact for market research purposes which may be done using email, telephone, fax or mail. Such information may be used to customise or update the Website;</li>
              </ul>
              <p className="mt-md-4">
                {' '}
              in each case, in accordance with this privacy policy.
            </p>
              <p>
                {' '}
              We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed "Your rights" below).
            </p>
            </div>


            <h3 className='mt-7' id="cookies">Cookies</h3>
            <p>
              This Website may place and access certain Cookies on your
              computer. WorkWyse Ltd uses Cookies to improve your experience of
              using the Website and to improve our range of services. WorkWyse
              Ltd has carefully chosen these Cookies and has taken steps to
              ensure that your privacy is protected and respected at all times.
            </p>
            <p>
              All Cookies used by this Website are used in accordance with
              current UK and EU Cookie Law.
            </p>
            <p> Before the Website places Cookies on your computer, you
            will be presented with a message bar requesting your consent to set
            those Cookies. By giving your consent to the placing of Cookies, you
            are enabling WorkWyse Ltd to provide a better experience and service
            to you. You may, if you wish, deny consent to the placing of
            Cookies; however certain features of the Website may not function
            fully or as intended.</p>
            <p>You can find a list of Cookies that we use in the Cookies Schedule.</p>
            <p>You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser.</p>
            <p>You can choose to delete Cookies at any time; however you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.</p>
            <p>It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.</p>
            <p>For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer.</p>
            <h3>General</h3>
            <p>You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.</p>
            <p>If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.</p>
            <p>Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.</p>
            <p>This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts.</p>
            <h3>Changes to this privacy policy</h3>
            <p>WorkWyse Ltd reserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations.   You may contact WorkWyse Ltd by email at team@workwyse.io.</p>

            {/* 
                            <p>You are responsible for safeguarding the password that you use to access the Services and you agree not to disclose your password to any third party You are responsible for any activity using your account, whether or not you authorized that activity. You should immediately notify Workwyse Ltd of any unauthorized use of your account.</p>
                            <h3>Your General Responsibilities</h3>
                            <p>Files and other content in the Services may be protected by intellectual property rights of others. Please do not copy, upload, download, or share files unless you have the right to do so. You, not Workwyse Ltd, will be fully responsible and liable for what you copy, share, upload, download or otherwise use while using the Services. You must not upload spyware or any other malicious software to the Service. You, and not Workwyse Ltd, are responsible for maintaining and protecting your account. If your contact information, or other information related to your account, changes, you must notify us promptly and keep your information current.</p> */}
          </div>
        </div>
      </div>
      {/* <h3>Privacy Policy & GDPR
            PRIVACY POLICY  This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website. This privacy policy should be read alongside, and in addition to our Terms and Conditions, which can be found at: www.workwyse.io/terms. Please read this privacy policy carefully. Definitions and interpretation 1. In this privacy policy, the following definitions are used: Data collectively all information that you submit to Workwyse Ltd via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws; Cookies a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the website. Details of the cookies used by this Website are set out in the clause below ( Cookies); Data Protection Laws any applicable law relating to the processing of personal Data, including but not limited to the Directive 96/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws, regulations and secondary legislation, for as long as the GDPR is effective in the UK; GDPR the General Data Protection Regulation (EU) 2016/679; Workwyse Ltd, we or us, Workwyse Ltd, a company incorporated in England and Wales with registered number 12649300 whose registered office is at 308 Knighton Lane East, Leicestershire, LE2 6FS; UK and EU Cookie Law the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011; User or you any third party that accesses the Website and is not either employed by Workwyse Ltd and acting in the course of their employment or (1) engaged as a consultant or otherwise providing services to Workwyse Ltd and accessing the Website in connection with
            </h3> */}
    </div>
  );
}
