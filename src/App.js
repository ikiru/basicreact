import React, { Component } from 'react';
import './App.css';
import Userinput from './Userinput/Userinput';
import Useroutput from './Useroutput/Useroutput';
// this is a learning exercise

class App extends Component {
  render() {
    return (
      <div className="App">
        <App />
        <Userinput />
        <Useroutput />
      </div>
    );
  }
}

export default App;
