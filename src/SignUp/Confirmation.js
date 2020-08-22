import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class Confirmation extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props

        return (
            <div>
                <Form>
                    {/* <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>{age} Years</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{city}, {country}</List.Content>
                    </List.Item>
                </List> */}
                    <Form.Field>
                        <label>Logo</label>
                        <input type="file"
                            defaultValue={values.country}
                        />
                        <input type="text" placeholder="Company Name"
                            defaultValue={values.companyName}
                        />
                        <input type="file"
                            defaultValue={values.country}
                        />
                    </Form.Field>
                    <Form.Field>
                        <textarea rows="5" columns="25"></textarea>
                    </Form.Field>
                    <Form.Field>
                        <label>Company Size</label>
                        <select>
                            <option>1-5</option>
                            <option>6-10</option>
                            <option>11-15</option>
                        </select>
                    </Form.Field>
                    <Form.Field>
                        <label>What is the scale of you operation(s)?</label>
                        <select>
                            <option>Local</option>
                            <option>Nation</option>
                            <option>Global</option>
                        </select>
                    </Form.Field>

                    <Button onClick={this.back}><i className="fa fa-backward"></i></Button>
                    <Button onClick={this.saveAndContinue}>Next</Button>
                </Form>
            </div>
        )
    }
}

export default Confirmation;