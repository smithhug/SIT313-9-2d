import React, {Component} from 'react'
import { Header, Form } from 'semantic-ui-react'

class Conditions extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
            
        const { value } = this.state
        return (
        <div>
            <Header as="h3" block>
                Project Conditions
            </Header>
            <Form>
                <Form.Field inline>
                    <label>Project length</label>
                    <input/>
                </Form.Field>
                <Form.Group inline>
                    <Form.Field inline>
                        <label>Payment</label>
                    </Form.Field>
                    <Form.Field inline>
                        <label>Min</label>
                        <input/>
                    </Form.Field>
                    <Form.Field inline>
                        <label>Max</label>
                        <input/>
                    </Form.Field>
                </Form.Group>
                <Form.Field inline fluid>
                    <label>Working Hours</label>
                    <input/>
                </Form.Field>
            </Form>
        </div>
        );
    }
}
  
export default Conditions;
  