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

    // when someone types, we want to change our state
    // pass in event as the parameter
    // abstracting here - id is being used for aim and strategy
    // brackets around [event.target.id]: evaluationg what's inside, whether it's aim or strategy. First read the value associated and THEN set it as the proper key
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

    // original: onChange for aim
    // onChange={(event) => this.handleChange(event)} - don't have to pass in the event, it's passed automatically for me
    render() {
        return(
            <Form inverted className="new-goal-form" onSubmit={(event) => this.handleOnSubmit(event)}>
                <h5>Set a New Goal</h5>
                <Form.Field>
                    <label className="form-label">Aim</label>
                    <input placeholder="Your Next Achievement" id="aim" required value={this.state.aim} onChange={this.handleChange} />
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

// this component does not need access to what's already in the Redux store - null for mapStateToProps
// this is only for adding something new - a new goal
// we call that action creator - { addGoal } vs mapDispatchToProps
export default connect(null, { addGoal })(GoalInput);