import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
// this is a learning exercise

class App extends Component {
  render() {
    return (
      <div className="App">
        <App />
        <UserInput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
