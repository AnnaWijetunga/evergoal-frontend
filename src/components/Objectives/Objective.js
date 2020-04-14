import React, { Component } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

export default class Objective extends Component {

    handleCheck = () => {
        this.props.toggleCompleted(this.props.id)
    }

    render() {
        return(
            <div>
                {/*  <Icon className="pointer" name='edit' color='blue' onClick={() => console.log("editing right now")} /> --> */}
                
                <Icon className="pointer" name='delete' color='red' onClick={() => this.props.deleteObjective(this.props.id)} />
                
                <Checkbox value={this.props.completed} checked={!!this.props.completed} onChange={(event) => this.handleCheck(event)} />{this.props.description}
            </div>
        )
    }
}