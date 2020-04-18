// functional component
// just needs a return, not a render

// will return a list of all goals

import React from 'react';
import Goal from './Goal';
import { Container } from 'semantic-ui-react';

const Goals = props => {
    const goalsList =  props.goals.map(goal => 
        <Goal 
            key={goal.id} 
            goal={goal} 
            {...goal} 
            deleteGoal={props.deleteGoal}
            // toggleComplete={props.toggleComplete}
        />)
    return (
        <Container>
            {goalsList}
        </Container>
    );
};

export default Goals;