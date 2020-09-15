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
                <div className="question-list">
                    <div className="question-item">
                        <h4>Which channels are you looking to utilise/manage ?   </h4>
                        <Radio.Group onChange={this.onChange} value={value} className="mt-2">
                            <Radio style={radioStyle} value={2} className="mb-0">
                                <h4 className="font-weight-normal">Facebook </h4>
                            </Radio>
                            <Radio style={radioStyle} value={3} className="mb-0">
                                <h4 className="font-weight-normal"> Instagram </h4>
                            </Radio>
                            <Radio style={radioStyle} value={4} className="mb-0">
                                <h4 className="font-weight-normal"> Google Adwords ( Search and Display )  </h4>
                            </Radio>
                            <Radio style={radioStyle} value={5} className="mb-0">
                                <h4 className="font-weight-normal"> LinkedIn </h4>
                            </Radio>
                            <Radio style={radioStyle} value={6} className="mb-0">
                                <h4 className="font-weight-normal"> Twitter</h4>
                            </Radio>
                            <Radio style={radioStyle} value={7} className="mb-0">
                                <h4 className="font-weight-normal"> YouTube</h4>
                            </Radio>
                            <Radio style={radioStyle} value={8} className="mb-0" >
                                <h4 className="font-weight-normal"> Quora </h4>
                            </Radio>
                            <Radio style={radioStyle} value={9} className="mb-0">
                                <h4 className="font-weight-normal"> Pinterest </h4>
                            </Radio>
                            <Radio style={radioStyle} value={10} className="mb-0">
                                <h4 className="font-weight-normal"> Amazon </h4>
                            </Radio>
                            <Radio style={radioStyle} value={11} className="mb-0">
                                <h4 className="font-weight-normal"> Snapchat </h4>
                            </Radio>
                            <Radio style={radioStyle} value={12} className="mb-0">
                                <h4 className="font-weight-normal"> Spotify </h4>
                            </Radio>
                            <Radio style={radioStyle} value={13} className="mb-0">
                                <h4 className="font-weight-normal"> Unsure / Other </h4>
                            </Radio>

                        </Radio.Group>
                    </div>
                </div>


                {/* <Radio style={radioStyle} value={6}>
                        More...
                        {value === 6 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio> */}
            </div>
        );
    }
}


