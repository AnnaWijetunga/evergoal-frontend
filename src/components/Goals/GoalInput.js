// note to self:
// I added a validation!
// line 49 const validated
// line 65 - button disabled if not validated
// question for Howard: is this enough to prevent malicious code? is this protective enough?

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
    // telling this form to change the value inside the state upon input
    // pass in event as the parameter
    // abstracting here - id is being used for aim and strategy
    // brackets around [event.target.id]: evaluating what's inside, whether it's aim or strategy. First read the value associated and THEN set it as the proper key
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    // event handler
    // b/c this data needs to go to our database
    // importing { addGoal } above and passing that function directly to connect gives us access to the props: this.props.addGoal 
    // event.preventDefault(); - means DON'T submit as per usual - we CARE about what is entered in those inputs and we want to use that info
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addGoal(this.state);
        this.setState({
            aim: "",
            strategy: ""
        })
    }

    // instead of the form ontrolling the values, our React component needs control
    // add a value to each input to give React component control
    // 
    // original: onChange for aim
    // onChange={(event) => this.handleChange(event)} - don't have to pass in the event, it's passed automatically for me
    render() {
        // validates that aim and strategy are longer than 2 characters, otherwise Add Goal button will be disabled
        const validated = this.state.aim.length > 2 && this.state.strategy.length > 2;

        return(
            <Form inverted className="new-goal-form" onSubmit={this.handleOnSubmit}>
                <h5>Set a New Goal</h5>
                <Form.Field>
                    <label className="form-label">Aim</label>
                    <input placeholder="Your Next Achievement" id="aim" required value={this.state.aim} onChange={this.handleChange} />
                </Form.Field>

                <Form.Field>
                    <label className="form-label">Your Strategy:</label>
                    <textarea placeholder="What's your plan?" required id="strategy" value={this.state.strategy} onChange={this.handleChange} />
                </Form.Field>

                <Button disabled={!validated} type="submit">Add Goal</Button>
            </Form>
        )
    }
}

// this component does not need access to what's already in the Redux store - null for mapStateToProps
// this is only for adding something new - a new goal - and we want to dispatch this new action of adding a goal to our store from our component
// we call that action creator - { addGoal } vs mapDispatchToProps
export default connect(null, { addGoal })(GoalInput);