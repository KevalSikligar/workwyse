import React, { lazy } from "react";
import { Modal } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import IntroStep from "./IntroStep";
import { connect } from "react-redux";
import FinalPostAProject from "./FinalPostAProject";
import HeaderStep from "./HeaderStep";
import LastStepNotSignedUp from "./LastStepNotSignedUp";
import { getPostAProjectData } from "../redux/action/PostAProject/PostAProject";
import { withRouter } from "react-router-dom";
lazy(import(`antd/dist/antd.css`));
class PostProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            steps: [
                {
                    title: "Step 1",
                    content: <IntroStep onClose={() => { this.props.onClose(this.resetWizard); }} next={this.next} previous={this.prev} />,
                },
                {
                    title: "Step 2",
                    content: <Step1 onClose={() => { this.props.onClose(this.resetWizard); }} next={this.next} previous={this.prev} />
                }
            ]
        };
    }

    resetWizard = () => {
        this.setState({ current: 0 });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.current !== this.state.current) {
            this.props.dispatch(getPostAProjectData('steps', this.state.steps));
            this.props.dispatch(getPostAProjectData('current', this.state.current));
        }
    }

    componentWillReceiveProps(nextProps) {
        let questions = [...this.state.steps];
        if (questions.length > 2) {
            questions.splice(2)
        }
        if (nextProps.category !== this.props.category) {
            nextProps.category.category.category.length > 0 &&
                nextProps.category.category.category.map((d) => {
                    questions.push({
                        title: d.question,
                        content: <Step2 onClose={() => { this.props.onClose(this.resetWizard); }} content={d} next={this.next} previous={this.prev} />
                    });
                });
            questions.push({
                title: "Step 3",
                content: <FinalPostAProject onClose={() => { this.props.onClose(this.resetWizard); }} closeModal={() => { this.props.closeModal && this.props.closeModal(); this.resetWizard() }} next={this.next} previous={this.prev} />
            });
            if (this.props.category.user.isLoggedIn === false) {
                questions.push({
                    title: "Login",
                    content: <LastStepNotSignedUp onClose={() => { this.props.onClose(this.resetWizard); }} closeModal={() => { this.props.closeModal && this.props.closeModal(); this.resetWizard() }} next={this.next} previous={this.prev} />
                });
            }
            this.setState({ steps: questions }, () => {
                return true;
            });
            return true;
        } else {
            // console.log('in else');
        }
    }

    render() {

        let { current } = this.state;
        const { isOpenModal } = this.props;
        var steps = [...this.state.steps];
        if (this.props.category.category.key === 'header' || this.props.category.category.key === 'home-popup') {
            var introStep = {
                title: "Intro Header Step",
                content: <HeaderStep onClose={() => { this.props.onClose(this.resetWizard); }} next={this.next} previous={this.prev} />
            }
            steps = [introStep, ...steps]
        }

        return (

            <Modal className="post-project-f post_project_model" title="Post A Project" visible={isOpenModal} centered destroyOnClose={true} onCancel={() => { this.props.onClose(this.resetWizard); }} >
                {/* <Steps current={current}>
                    {this.state.steps.map(item => (
                        <Steps.Step key={item.title} title={item.title} />
                    ))}
                </Steps> */}
                <div>{steps[current] && steps[current].content}</div>
            </Modal>
        );
    }

    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

}

const mapStateToProps = (state) => {
    return { category: state };
};

export default withRouter(connect(mapStateToProps)(PostProject));