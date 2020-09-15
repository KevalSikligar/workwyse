
import React from 'react'
import { Radio } from 'antd';
import 'antd/dist/antd.css';

export default class Step8 extends React.Component {

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
                        <h4>How likely are you to hire ? </h4>
                        <Radio.Group onChange={this.onChange} value={value} className="mt-2">
                            <Radio style={radioStyle} value={2} className="mb-0">
                                <h4 className="font-weight-normal">Ready to Hire </h4>
                            </Radio>
                            <Radio style={radioStyle} value={3} className="mb-0">
                                <h4 className="font-weight-normal"> Very likely  </h4>
                            </Radio>
                            <Radio style={radioStyle} value={4} className="mb-0">
                                <h4 className="font-weight-normal"> I'm Dong my research   </h4>
                            </Radio>
                            <Radio style={radioStyle} value={5} className="mb-0">
                                <h4 className="font-weight-normal"> I'm looking for quotes </h4>
                            </Radio>
                        </Radio.Group>
                    </div>
                </div>                    
            </div>

        );
    }
}


