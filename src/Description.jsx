import React, {Component} from 'react'
import { Header, Form } from 'semantic-ui-react'

class Description extends Component {

    render() {
        return (
        <div>
            <Header as="h3" block>
                Describe your job
            </Header>
            <Form>
                <Form.Field inline>
                    <label>Title/Position</label>
                    <input size={100}/>
                </Form.Field>
                <Form.Field inline>
                    <label>Job description</label>
                    <input size={100}/>
                </Form.Field>
                <Form.Field inline fluid>
                    <label>Skills</label>
                    <input placeholder='Please add skills that your job is required e.g., Java' size={100}/>
                </Form.Field>
            </Form>
        </div>
        );
    }
}
  
export default Description;
  