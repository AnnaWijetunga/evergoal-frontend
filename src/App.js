import React from 'react';
import './App.css';

class App extends React.Component {

  // DELETE at some point
  // testing to see if I can fetch data from the back end 
  // success! fetched my array of 2 objects! too cool!
  componentDidMount() {
    fetch('http://localhost:3000/api/goals')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
