// class component
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { addGoal } from '../../actions/goalsActions';
import { connect } from 'react-redux';

class GoalInput extends Component {
    
    state = {
        aim: "",
        strategy: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addGoal(this.state);
        this.setState({
            aim: "",
            strategy: ""
        })
    }

    render() {
        return(
            <Form inverted className="new-goal-form" onSubmit={(event) => this.handleOnSubmit(event)}>
                <h5>Set a New Goal</h5>
                <Form.Field>
                    <label className="form-label">Aim</label>
                    <input placeholder="Your Next Achievement" id="aim" required value={this.state.aim} onChange={(event) => this.handleChange(event)} />
                </Form.Field>

                <Form.Field>
                    <label className="form-label">Your Strategy:</label>
                    <textarea placeholder="What's your plan?" required id="strategy" value={this.state.strategy} onChange={this.handleChange} />
                </Form.Field>

                <Button type="submit">Add Goal</Button>
            </Form>
        )
    }
}

export default connect(null, { addGoal })(GoalInput);