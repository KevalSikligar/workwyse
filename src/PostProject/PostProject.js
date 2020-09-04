import React, { lazy } from 'react';
import { Modal, Button, Steps } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import swal from 'sweetalert';


const steps = [
    {
        title: "Step 1",
        content: <Step1 />
    },
    {
        title: "Step 2",
        content: <Step2 />
    },
    {
        title: "Step 3",
        content: <Step3 />
    },
    {
        title: "Step 4",
        content: <Step4 />
    },
    {
        title: "Step 5",
        content: <Step5 />
    },
    {
        title: "Step 6",
        content: <Step6 />
    },
    {
        title: "Step 7",
        content: <Step7 />
    },
    {
        title: "Step 8",
        content: <Step8 />
    },

];

lazy(import(`antd/dist/antd.css`))

class PostProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    handleCancel() {
        swal("Are you sure you want to Quit the process?")
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        let { current } = this.state
        const { isOpenModal, onClose } = this.props;

        return (
            <Modal
                visible={isOpenModal}
                onCancel={onClose}>
                <Steps current={current}>
                    {steps.map(item => (
                        <Steps.Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div>
                    {
                        current === 0 && <Step1 />
                    }
                    {
                        current === 1 && <Step2 />
                    }
                    {
                        current === 2 && <Step3 />
                    }
                    {
                        current === 3 && <Step4 />
                    }
                    {
                        current === 4 && <Step5 />
                    }
                    {
                        current === 5 && <Step6 />
                    }
                    {
                        current === 6 && <Step7 />
                    }
                    {
                        current === 7 && <Step8 />
                    }
                </div>
                <div className="model-popup-wizard">
                    {current > 0 && (
                        <Button onClick={() => this.prev()}>Previous</Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button onClick={() => this.next()}>Next</Button>
                    )}
                    {/* {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => this.handleDone()}>Done</Button>
                    )} */}
                </div>
            </Modal>
        )
    }
};

export default PostProject;
