import React, { lazy } from "react";
import { Modal, Button } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import IntroStep from "./IntroStep";
import { connect } from "react-redux";
import FinalPostAProject from "./FinalPostAProject";
lazy(import(`antd/dist/antd.css`));

class PostProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            steps: [
                {
                    title: "Step 1",
                    content: <IntroStep />,
                },
                {
                    title: "Step 2",
                    content: <Step1 />
                }
            ]
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps => ', nextProps);

        let questions = [...this.state.steps];
        console.log('questions => ', questions);

        if (nextProps.category !== this.props.category) {
            nextProps.category.category.category.length > 0 &&
                nextProps.category.category.category.map((d) => {
                    questions.push({
                        title: d.question,
                        content: <Step2 content={d} />
                    });
                });
            questions.push({
                title: "Step 3",
                content: <FinalPostAProject />
            });
            this.setState({ steps: questions }, () => {
                return true;
            });
            return true;
        } else {
            console.log('in else');
        }

    }

    render() {
        let { current } = this.state;
        const { isOpenModal, onClose } = this.props;
        // const category = this.props.category && this.props.category.category.category;

        return (
            <Modal
                title="Post A Project"
                visible={isOpenModal}
                centered
                onCancel={onClose} >
                {/* <Steps current={current}>
                    {this.state.steps.map(item => (
                        <Steps.Step key={item.title} title={item.title} />
                    ))}
                </Steps> */}
                <div>{this.state.steps[current].content}</div>
                <div className="model-popup-wizard">
                    <div className="px-5">
                        {current > 0 && (
                            <Button className="btn-prev" onClick={() => this.prev()}> Previous</Button>
                        )}
                        {current < this.state.steps.length - 1 && (
                            <Button className="mr-0 btn-next" onClick={() => this.next()}>Next</Button>
                        )}
                        {current === this.state.steps.length - 1 && (
                            <Button type="primary" onClick={() => this.handleDone()}> Finish</Button>
                        )}
                    </div>
                </div>
            </Modal>
        );
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    handleDone() {
        this.props.history.push("/home");
    }

}

const mapStateToProps = (state) => {
    return {
        category: state,
    };
};

export default connect(mapStateToProps)(PostProject);
