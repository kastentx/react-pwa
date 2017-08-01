import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Robust Shopping List</h2>
        </div>
        <p className="App-intro">
          This is an example written in <code>React</code> showing the offline first capabilities of a PWA when using PouchDB.
        </p>
        <ListContainer />
      </div>
    );
  }
}

export default App;
