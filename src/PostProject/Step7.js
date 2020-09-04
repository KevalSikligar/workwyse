
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
                <Radio.Group onChange={this.onChange} value={value}>
                    <Radio style={radioStyle} value={1}>
                        <h4> What goals/targets do you have ? </h4>
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                        <h4> Increase Brand Awareness </h4>
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                        <h4> Sell more of my product/service </h4>
                    </Radio>
                    <Radio style={radioStyle} value={4}>
                        <h4> Provide customer support </h4>
                    </Radio>
                    <Radio style={radioStyle} value={5}>
                        <h4> Improve search position / ranking </h4>
                    </Radio>
                    <Radio style={radioStyle} value={6}>
                        <h4> Gain followers on social media </h4>
                    </Radio>
                    <Radio style={radioStyle} value={7}>
                        <h4> Advertise on Social media </h4>
                    </Radio>
                    <Radio style={radioStyle} value={8}>
                        <h4> Technical SEO </h4>
                    </Radio>
                    <Radio style={radioStyle} value={9}>
                        <h4> Website Copywriting and Content </h4>
                    </Radio>
                    <Radio style={radioStyle} value={10}>
                        <h4> Unsure / Other </h4>
                    </Radio>
                    {/* <Radio style={radioStyle} value={6}>
                        More...
                        {value === 6 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio> */}
                </Radio.Group>
            </div>
        );
    }
}


