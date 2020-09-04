import React from 'react'
import { Radio } from 'antd';
import 'antd/dist/antd.css';
export default class Step4 extends React.Component {
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
                        <h4> Which types of advertising are interested in ? </h4>
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                        <h4> Online (Paid advertising/PPC, Social Media) </h4>
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                        <h4> Broadcast (TV/Radio) </h4>
                    </Radio>
                    <Radio style={radioStyle} value={4}>
                        <h4> Outdoor (Billboards, Kiosks) </h4>
                    </Radio>
                    <Radio style={radioStyle} value={5}>
                        <h4> Print (Newspapers, magazines, leaflests) </h4>
                    </Radio>
                    <Radio style={radioStyle} value={6}>
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

