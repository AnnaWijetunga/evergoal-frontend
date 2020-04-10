// functional component
// just needs a return, not a render

import React from 'react';
import Goal from './Goal';
// import { Container } 

const Goals = props => {
    const goalsList =  props.goals.map(goal => <Goal key={goal.id} goal={goal} {...goal} deleteGoal={props.deleteGoal}/>)
    return (
        <Container>
            {goalsList}
        </Container>
    );
};

export default Goals;