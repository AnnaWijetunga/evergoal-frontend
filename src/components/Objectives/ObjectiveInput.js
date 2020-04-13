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
        return(
            <Form inverted className="new-objective form" onSubmit={(event) => this.handleOnSubmit(event)}>
                <Form.Field>
                    <label className="form-label">Add Objective</label>
                    <input placeholder="Actionable milestones to reach your goal" id="description" required value={this.state.description} onChange={this.handleChange} />            
                </Form.Field>

                <Button size='mini' type="submit">Submit</Button>
            </Form>
        )
    }
}

export default ObjectiveInput;