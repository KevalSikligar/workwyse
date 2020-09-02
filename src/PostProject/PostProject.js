import React, { lazy, useEffect, useState } from 'react';
import { Modal, Button, Steps } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
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
                </div>
                <div>
                    {current > 0 && (
                        <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>Previous</Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>Next</Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => this.handleDone()}>Done</Button>
                    )}
                </div>
            </Modal>
        )
    }
};

export default PostProject;
