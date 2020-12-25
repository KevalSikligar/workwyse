import React, { Component } from 'react'
import { confirmEmail } from '../Services/Authentication';
import { notification } from 'antd';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { withRouter } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getPostAProjectData, clearAllData, clearProjectData } from '../redux/action/PostAProject/PostAProject';
import { clearSignupData } from '../redux/action/SignUp/SignUpAction';
import { connect } from 'react-redux';
import { logout } from '../redux/action/User/UserAction';
class ConfirmEmail extends Component {

    state = {
        token: '',
        userId: '',
        loading: false
    };

    componentDidMount() {
        localStorage.clear();
        this.props.dispatch(getPostAProjectData('current', 0));
        this.props.dispatch(clearSignupData());
        this.props.dispatch(clearAllData());
        this.props.dispatch(clearProjectData());
        this.props.dispatch(logout());
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ token: this.props.match.params.token, userId: this.props.match.params.id }, () => {
                confirmEmail(this.state.userId, this.state.token).then(res => {
                    if (res.status === 200) {
                        this.setState({ loading: false });
                        notification.open({
                            message: 'Success',
                            description: 'Email has been confirmed successfully!'
                        });
                        this.props.history.push('/home');
                    }
                }).catch(err => {
                    notification.open({
                        message: 'Error',
                        description: 'There was an error while confirming your email! Please try again!'
                    });
                })
            });
        }, 5000);
    }

    render() {

        const pathList = [
            { to: "/", title: "Confirm Email" }
        ];

        return (
            <div>
                <BreadCrumbs title="Confirm Email" breadcrumbssegment={pathList} />
                <section className="sptb">
                    <div className="container">
                        <div className="section-title center-block text-center">
                            {this.state.loading ? <Loader /> : ''}
                            {/* <h1>Your email is being confirmed</h1> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        confirmEmail: state
    }
}
export default withRouter(connect(mapStateToProps)(ConfirmEmail));