
import React from 'react'
import { Radio } from 'antd';
import 'antd/dist/antd.css';

export default class Step7 extends React.Component {

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
                        <h4>What goals/targets do you have ?</h4>
                        <Radio.Group onChange={this.onChange} value={value} className="mt-2">
                            <Radio style={radioStyle} value={2} className="mb-0">
                                <h4 className="font-weight-normal">Increase Brand Awareness </h4>
                            </Radio>
                            <Radio style={radioStyle} value={3} className="mb-0">
                                <h4 className="font-weight-normal"> Sell more of my product/service </h4>
                            </Radio>
                            <Radio style={radioStyle} value={4} className="mb-0">
                                <h4 className="font-weight-normal"> Google Adwords ( Search and Display )  </h4>
                            </Radio>
                            <Radio style={radioStyle} value={5} className="mb-0">
                                <h4 className="font-weight-normal"> Provide customer support </h4>
                            </Radio>
                            <Radio style={radioStyle} value={6} className="mb-0">
                                <h4 className="font-weight-normal"> Improve search position / ranking</h4>
                            </Radio>
                            <Radio style={radioStyle} value={7} className="mb-0">
                                <h4 className="font-weight-normal"> Gain followers on social media </h4>
                            </Radio>
                            <Radio style={radioStyle} value={8} className="mb-0">
                                <h4 className="font-weight-normal"> Advertise on Social media </h4>
                            </Radio>
                            <Radio style={radioStyle} value={9} className="mb-0">
                                <h4 className="font-weight-normal"> Technical SEO </h4>
                            </Radio>
                            <Radio style={radioStyle} value={10} className="mb-0">
                                <h4 className="font-weight-normal"> Website Copywriting and Content </h4>
                            </Radio>
                            <Radio style={radioStyle} value={11} className="mb-0">
                                <h4 className="font-weight-normal"> Unsure / Other </h4>
                            </Radio>                            

                        </Radio.Group>
                    </div>
                </div>               
            </div>
        );
    }
}


