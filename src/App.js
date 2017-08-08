import React from 'react';
import ListContainer from './containers/ListContainer';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App(props) {
  return (
    <div className="App">
      <Header />
      <ListContainer />
      <Footer />
    </div>
  );
}
