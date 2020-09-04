import React from 'react'
import { Radio } from 'antd';
import 'antd/dist/antd.css';
export default class Step5 extends React.Component {
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
                        <h4> Which channels are you looking to utilise/manage ? </h4>
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                        <h4> Facebook </h4>
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                        <h4> Instagram </h4>
                    </Radio>
                    <Radio style={radioStyle} value={4}>
                        <h4> Google Adwords ( Search and Display ) </h4>
                    </Radio>
                    <Radio style={radioStyle} value={5}>
                        <h4> LinkedIn </h4>
                    </Radio>
                    <Radio style={radioStyle} value={6}>
                        <h4> Twitter </h4>
                    </Radio>
                    <Radio style={radioStyle} value={7}>
                        <h4> YouTube </h4>
                    </Radio>
                    <Radio style={radioStyle} value={8}>
                        <h4> Quora </h4>
                    </Radio>
                    <Radio style={radioStyle} value={9}>
                        <h4> Pinterest </h4>
                    </Radio>
                    <Radio style={radioStyle} value={10}>
                        <h4> Amazon </h4>
                    </Radio>
                    <Radio style={radioStyle} value={11}>
                        <h4> Snapchat </h4>
                    </Radio>
                    <Radio style={radioStyle} value={12}>
                        <h4> Spotify </h4>
                    </Radio>
                    <Radio style={radioStyle} value={13}>
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


