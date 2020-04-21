import React, { Component } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

export default class Objective extends Component {

    // what starts the process for allowing our box (of an objective) to be checked off or unchecked
    // helps make our form controlled vs uncontrolled
    handleCheck = () => {
        this.props.toggleCompleted(this.props.id)
    }

    // started to make an edit button here on line 16 - not complete
    render() {
        return(
            <div>
                {/* <Icon className="pointer" name='edit' color='blue' onClick={() => console.log("editing")} /> */}
                
                <Icon className="pointer" name='delete' color='red' onClick={() => this.props.deleteObjective(this.props.id)} />
                
                <Checkbox value={this.props.completed} checked={!!this.props.completed} onChange={this.handleCheck} />{this.props.description}
            </div>
        )
    }
}