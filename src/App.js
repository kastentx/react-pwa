import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shopping List</h2>
        </div>
        <ListContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
