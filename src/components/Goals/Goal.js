import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// complete button deletes the goal
const Goal = ({ aim, deleteGoal, id }) => {
    return(
        <div className="goal">
            <NavLink key={id} to={`/goals/${id}/objectives`}><h3>{aim}</h3></NavLink>

            <Button className="complete-button" basic color='green' size='mini' onClick={() => deleteGoal(id)}>Complete</Button>
            
            <Button className="delete-button" basic color='red' size='mini' onClick={() => deleteGoal(id)}>Delete</Button>
        </div>
    )
}

export default Goal;

// testing out a new format to incorportate an event listener
// import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';
// import { Checkbox } from 'semantic-ui-react';

// export default class Goal extends Component {

//     handleCheck = () => {
//         this.props.toggleComplete(this.props.id)
//     }

//     render() {
//         return(
//             <div className="goal">
//                 <NavLink key={this.props.id} to={`/goals/${id}/objectives`}><h3>{this.props.aim}</h3></NavLink>

//                 <Checkbox value={this.props.complete} checked={!!this.props.complete} onChange={this.handleCheck} />

//                 <Button className="delete-button" basic color='red' size='mini' onClick={() => this.props.deleteGoal(this.props.id)}>Delete</Button>
//             </div>
//         )
//     }
// }