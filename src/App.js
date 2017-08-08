import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
