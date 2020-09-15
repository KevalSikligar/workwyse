
import React from 'react'
import { Radio } from 'antd';
import 'antd/dist/antd.css';
export default class Step6 extends React.Component {
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
                        <h4>When would you like the website to go live/be updated ? </h4>
                        <Radio.Group onChange={this.onChange} value={value} className="mt-2">
                            <Radio style={radioStyle} value={2} className="mb-0">
                                <h4 className="font-weight-normal">ASAP </h4>
                            </Radio>
                            <Radio style={radioStyle} value={4} className="mb-0">
                                <h4 className="font-weight-normal">Within a few weeks</h4>
                            </Radio>
                            <Radio style={radioStyle} value={5} className="mb-0">
                                <h4 className="font-weight-normal">Within a few months</h4>
                            </Radio>
                            <Radio style={radioStyle} value={6} className="mb-0">
                                <h4 className="font-weight-normal">I'd need to discuss with the agency</h4>
                            </Radio>
                        </Radio.Group>
                    </div>
                </div>                
            </div>
        );
    }
}


