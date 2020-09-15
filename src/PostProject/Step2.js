import React from 'react'
import { Radio, Input } from 'antd';
import 'antd/dist/antd.css';
export default class Step2 extends React.Component {
    state = {
        value: 1,
    };

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const radioStyle = {
            display: 'block',
        };
        const { value } = this.state;
        return (
            <div class="radio-section">
                <div class="title_Section_pop">
                    <h3 class="model-title-set">Post a project</h3>
                </div>
                <div className="question-list">
                    <div className="question-item">
                        <h4>How do you currently do your marketing ? </h4>
                        <Radio.Group onChange={this.onChange} value={value} className="mt-2">                    
                            <Radio style={radioStyle} value={2} className="mb-0">
                                <h4 className="font-weight-normal"> Dont't currently do any marketing </h4>
                            </Radio>
                            <Radio style={radioStyle} value={3}  className="mb-0">
                                <h4 className="font-weight-normal"> Small in-house </h4>
                            </Radio>
                            <Radio style={radioStyle} value={4}  className="mb-0">
                                <h4 className="font-weight-normal"> Large in-house </h4>
                            </Radio>
                            <Radio style={radioStyle} value={5}  className="mb-0">
                                <h4 className="font-weight-normal"> External Agency </h4>
                            </Radio>                   
                    </Radio.Group>
                    </div>
                   
                </div>
                {/* <Radio.Group onChange={this.onChange} value={value}>
                    <Radio style={radioStyle} value={1}>
                        <h4> How do you currently do your marketing ? </h4>
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                        <h4> Dont't currently do any marketing </h4>
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                        <h4> Small in-house </h4>
                    </Radio>
                    <Radio style={radioStyle} value={4}>
                        <h4> Large in-house </h4>
                    </Radio>
                    <Radio style={radioStyle} value={5}>
                        <h4> External Agency </h4>
                    </Radio>                   
                </Radio.Group> */}
            </div>
        );
    }
}
