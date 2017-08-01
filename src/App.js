import React, { Component } from 'react';
import PromptContainer from './containers/PromptContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Robust Shopping List</h2>
        </div>
        <p className="App-intro">
          This is an example written in <code>React</code> showing the offline first capabilitiers of a PWA.
        </p>
        <PromptContainer/>
      </div>
    );
  }
}

export default App;
