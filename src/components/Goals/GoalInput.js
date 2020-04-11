// class component
import React, { Component } from 'react';

import { addGoal } from '../../actions/goalsActions';
import { connect } from 'react-redux';

class GoalInput extends Component {
    
    // correct syntax here?
    state = {
        aim: "",
        strategy: ""
    }

    render() {
        return(
           <div>
               GoalInput
           </div> 
        )
    }
}

export default connect(null, { addGoal })(GoalInput);