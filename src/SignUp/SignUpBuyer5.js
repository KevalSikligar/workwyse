import React from 'react'
import { Form } from 'semantic-ui-react'
export default function SignUpBuyer5() {
    return (
        <div>
            <div>
                <Form.Field>
                    <h1>Complete your industry</h1>
                </Form.Field>
                <Form.Field>
                    <select>
                        <option>Whole Sale</option>
                        <option>Retail</option>
                        <option>Market</option>
                        <option>Purchase</option>
                        <option>Seller</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="This will ensure that you are matched with Sellers who focus on your industry" />
                </Form.Field>
            </div>
        </div>
    )
}
