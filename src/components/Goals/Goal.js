import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// complete button deletes the goal
// prioritize button is front end only - does not persist to database
const Goal = ({ aim, deleteGoal, id }) => {

    // const [count, setCount] = useState(0);

    return(
        <div className="goal">
            <NavLink key={id} to={`/goals/${id}/objectives`}><h3>{count}. {aim}</h3></NavLink>
            <Button className="delete-button" color='red' size='mini' onClick={() => deleteGoal(id)}>Delete</Button>
            <Button className="complete-button" color='green' size='mini' onClick={() => deleteGoal(id)}>Complete</Button>

            {/* <Button className="priority-button" color='yellow' size='mini' onClick={() => setCount(count + 1)}> Prioritize</Button> */}

        </div>
    )
}

export default Goal;