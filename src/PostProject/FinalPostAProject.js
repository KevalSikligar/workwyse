import React, { Component } from 'react'
import axios from 'axios';
import { GET_PROJECT_HIRE_TYPE } from '../Services/ConstantURI';
import { Radio } from 'antd';

export default class FinalPostAProject extends Component {

    state = {
        hireType: []
    }

    componentDidMount() {
        axios.get(GET_PROJECT_HIRE_TYPE).then(res => {
            this.setState({ hireType: res.data })
        }).catch(err => {
            console.log('err => ', err);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 post-project-radio">
                        <label className="form-label text-dark fs-16">How likely are you to hire?</label>
                        <div className="custom-controls-stacked rdb-steps-1">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 datepicker-w-auto">
                                    {this.state.hireType.map((data, index) => (
                                        <Radio className="mb-3" value={index}>
                                            <span className="font-weight-semibold"> {data.name} </span>
                                        </Radio>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
