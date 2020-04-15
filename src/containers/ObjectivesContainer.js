import React, { Component } from 'react';
import Objectives from '../components/Objectives/Objectives';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
import { addObjective, deleteObjective, fetchGoalObjectives, toggleCompleted } from '../actions/objectivesActions';
import { connect } from 'react-redux';
import { fetchGoal } from '../actions/goalsActions';

class ObjectivesContainer extends Component {

    // fetch requests to our back end api - asynchronous request
    // we make a fetch request when the component mounts
    // how do we access these objectives? this.props.fetchGoalObjectives
    // getting the objectives from our Redux stor
    // accessing them through props inside this component
    // sending those objectives down to our objectives component

    // this.props.match.params.goal.Id
    // the library passes in a prop called match into every route that is rendered
    // inside this match object is another object called params
    // this holds all matching params where the key is the name we specified when creating the route and the value is the actual value in the URL
    componentDidMount() {
        this.props.fetchGoalObjectives(this.props.match.params.goalId)
        this.props.fetchGoal(this.props.match.params.goalId)
    }

    render() {
        const goalId = this.props.match.params.goalId 

        return(
            <div>
                <Objectives
                    key={this.props.goal.id}
                    goal={this.props.goal}
                    objectives={this.props.objectives}
                    deleteObjective={this.props.deleteObjective}
                    toggleCompleted={this.props.toggleCompleted}
                />
                <ObjectiveInput addObjective={this.props.addObjective} goalId={goalId}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    objectives: state.objectives.objectivesData,
    goal: state.goals.goalData
})

const mapDispatchToProps = dispatch => ({
    fetchGoalObjectives: goalId => dispatch(fetchGoalObjectives(goalId)),
    fetchGoal: goalId => dispatch(fetchGoal(goalId)),
    addObjective: (objectiveInput, goalId) => dispatch(addObjective(objectiveInput, goalId)),
    deleteObjective: objectiveId => dispatch(deleteObjective(objectiveId)),
    toggleCompleted: objectiveId => dispatch(toggleCompleted(objectiveId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ObjectivesContainer);
