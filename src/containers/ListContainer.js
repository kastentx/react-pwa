import React, { Component } from 'react';
import ShoppingList from '../components/ShoppingList';
import Prompt from '../components/Prompt';
import PouchDB from 'pouchdb';

const localDB = new PouchDB('http://localhost:5984/shoppingList');

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    }
  }
  
  componentDidMount = () => {
    console.log('did mount');
    this.getPouchDocs();
  }

  getPouchDocs = () => {
    return localDB.allDocs({
      include_docs: true
    }).then(response => {
      console.log('getting updated items from PouchDB.')
      this.setState({
        items: response.rows.map(item => {return {_id: item.doc._id, text: item.doc.text}})
      })
    });
  }

  addPouchDoc = (item) => {
  if (item.length) {
    return localDB.post({
      text: item
    }).then(response => {
      console.log(item + " added to PouchDB.");
      this.getPouchDocs();
    }).catch(err => {
      console.log(err);
    });
  }
}

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e)  => {
    e.preventDefault();
    this.addPouchDoc(this.state.input);
    this.setState({
      input: ''
    });
  }

  renderListItems = () => {
    return this.state.items.slice().map(item => <li key={item._id}>{item.text}</li>);
  }

  render() {
    return (
      <div className="col-sm-offset-4 col-sm-4 list-wrapper">
        <Prompt
          value={this.state.input}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ShoppingList>
          {this.renderListItems()}
        </ShoppingList>
      </div>
    );
  }
}

export default ListContainer;
