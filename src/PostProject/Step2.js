import React from 'react'
import { Radio } from 'antd';
import 'antd/dist/antd.css';

class Step2 extends React.Component {
    state = {
        value: 1
    };

    onChange = (e) => {
        console.log('e => ', e);
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
        console.log('this.state.value => ', this.state.value);

        console.log('props in step2  => ', this.props.content.questionOptions);

        return (
            <div className="radio-section">

                <div className="question-list">
                    <div className="question-item">
                        <h4>{this.props.content.question}</h4>
                        <Radio.Group onChange={this.onChange} value={value} className="mt-2">
                            {this.props.content.questionOptions.map((data, index) => (
                                <Radio style={radioStyle} value={index} className="mb-0">
                                    <h4 className="font-weight-normal">{data.option}</h4>
                                </Radio>
                            ))}
                        </Radio.Group>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step2;