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
                <Radio.Group onChange={this.onChange} value={value}>
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
                    {/* <Radio style={radioStyle} value={6}>
                        More...
                        {value === 6 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio> */}
                </Radio.Group>
            </div>
        );
    }
}
