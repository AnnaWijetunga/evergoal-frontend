import React, { Component } from 'react';
// will need to import other files here
// import Goals
// import GoalsInput
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal } from '../actions/goalsActions';
// import { Container }
// import GoalsHeader

class GoalsContainer extends Compoent {

    componentDidMount(){
        this.props.fetchGoals()
    }

    // will need to fill out our return
    render() {
        return(

        )
    }
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals.goalsData
    }
}

const mapDispatchToProps = dispatch => ({
    fetchGoals: () => dispatch(fetchGoals()),
    deleteGoal: id => dispatch(deleteGoal(id))
})

// connect to our store
// mapStateToProps: we want access to what's in the store
// mapDispatchToProps: we want the ability to dispatch new actions to our store from our component
export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);