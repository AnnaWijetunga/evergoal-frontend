import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';

class App extends Component {

  // testing to see if I can fetch data from the back end 
  // success! fetched my array of 2 objects! too cool!
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/goals/1/objectives')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
