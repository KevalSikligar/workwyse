import React, { Component } from 'react';
import LinkedIn from "linkedin-login-for-react";
import { SignInWithLinkedIn } from '../Services/SocialLogin';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { addAuthUser, onauthError } from '../redux/action/User/UserAction';
class SignInLinkedIn extends Component {

    callbackLinkedIn = (error, code, redirectUri, _props) => {
        if (error) {
            swal("There was an error while fetching data! Please try again later");
        } else {
            redirectUri = "/home";
            SignInWithLinkedIn(code).then(res => {
                console.log('res => ', res);

                this.props.dispatch(addAuthUser('socialLogin',res));
            }).catch(err => {
                this.props.dispatch(onauthError(err));
            });
        }
    };

    render() {
        return (
            <div>
                <LinkedIn
                    clientId="78g9t5dnyhf0z3"
                    callback={(error, code, redirectUri) => this.callbackLinkedIn(error, code, redirectUri, this.props)}
                    scope={["r_liteprofile", "r_emailaddress"]}
                    text="Sign In With LinkedIn"
                    className="linkedin-login"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDark: state
    }
}

export default connect(mapStateToProps)(SignInLinkedIn)