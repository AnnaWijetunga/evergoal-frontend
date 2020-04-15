// CONTAINER COMPONENTS
// usually class components, usually render other components
// a neater way to organize: these components render the components in the Components folder

import React, { Component } from 'react';
import Goals from '../components/Goals/Goals';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal } from '../actions/goalsActions';
import { Container } from 'semantic-ui-react';
import GoalsHeader from '../components/Goals/GoalsHeader';

class GoalsContainer extends Component {

    // fetch request to our back end api - asynchronous request
    componentDidMount(){
        // debugger
        this.props.fetchGoals()
    }

    render() {
        return(
            <Container>
                <GoalsHeader />
                <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal} />
                <GoalInput />
            </Container>
        )
    }
}

// mapStateToProps: we want access to what's in the store
const mapStateToProps = (state) => {
    return {
        goals: state.goals.goalsData
    }
}

// mapDispatchToProps: we want the ability to dispatch new actions to our store from our component
const mapDispatchToProps = dispatch => ({
    fetchGoals: () => dispatch(fetchGoals()),
    deleteGoal: id => dispatch(deleteGoal(id))
})

// connect to our store
// this connect automatically calls store.dispatch for us on the return values of our mapDisptachToProps (fetchGoals and deleteGoal)
// what's passed to our dispatch is our action object
// we don't SEE dispatch because it happen within connect automatically
// mapStateToProps: we want access to what's in the store
// mapDispatchToProps: we want the ability to dispatch new actions to our store from our component
export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);