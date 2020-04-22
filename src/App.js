// typically, if a component is only rendering another component, best to combine
// did not do that yet, but could be a nice to do for later
// perhaps this component can cease to exist and we can import Main into index.js vs App

import React, { Component } from 'react';

// import css for App - header, form, links, buttons
import './App.css';

// Main contains important routes and components that need to be imported here
import Main from './containers/Main';

class App extends Component {

  // testing to see if I can fetch data from the back end 
  // success! fetched my array of 2 objects! too cool!

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/goals/1/objectives')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  // rendering the Main component here - which holds our routes and components

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

// needed in order to be imported by other files/components
export default App;
