import React, { Component } from 'react';
import Objectives from '../components/Objectives/Objectives';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
import { addObjective, deleteObjective, fetchGoalObjectives, toggleCompleted } from '../actions/objectivesActions';
import { connect } from 'react-redux';
import { fetchGoal } from '../actions/goalsActions';

class ObjectivesContainer extends Component {
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
    deleteObjective: objectiveId => dispatch(deleteObjective(ObjectiveId)),
    toggleCompleted: objectiveId => dispatch(toggleCompleted(objectiveId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ObjectivesContainer);
