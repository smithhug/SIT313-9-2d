import React, {Component} from 'react'
import { Header, Form } from 'semantic-ui-react'

class Experience extends Component {
    render() {
        return (
        <div>
            <Header as="h3" block>
                Experience
            </Header>
            <Form>
                <Form.Group inline>
                    <Form.Field inline>
                        <label>Expereienced in</label>
                        <input/>
                    </Form.Field>
                    <Form.Field inline>
                        <label>For at least</label>
                        <input/>
                    </Form.Field>
                </Form.Group>
            </Form>
        </div>
        );
    }
}
  
export default Experience;
  