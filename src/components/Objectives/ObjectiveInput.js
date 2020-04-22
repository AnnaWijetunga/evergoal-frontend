// note to self (for Howard):
// I added a validation! 
// line 32 const validated
// line 41 - button disabled if not validated
// question for Howard: is this enough to prevent malicious code? is this protective enough

import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class ObjectiveInput extends Component {

    state = {
        description: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addObjective(this.state, this.props.goalId);
        this.setState({
            description: ""
        })
    }

    // old onChange: onChange={(event) => this.handleChange(event)}
    // don't need to pass in event - it gets passed automatically for us
    render() {
        const validated = this.state.description.length > 2;

        return(
            <Form inverted className="new-objective form" onSubmit={(event) => this.handleOnSubmit(event)}>
                <Form.Field>
                    <label className="form-label">Add Objective</label>
                    <input placeholder="Actionable milestones to reach your goal" id="description" required value={this.state.description} onChange={this.handleChange} />            
                </Form.Field>

                <Button disabled={!validated} size='mini' type="submit">Submit</Button>
            </Form>
        )
    }
}

export default ObjectiveInput;