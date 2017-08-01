import React, { Component } from 'react';
import ShoppingList from '../components/ShoppingList';
import Prompt from '../components/Prompt';
import Item from '../components/Item';
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
        text: item,
        _id: new Date()
      }).then(response => {
        console.log(item + " added to PouchDB.");
        this.getPouchDocs();
      }).catch(err => {
        console.log(err);
      });
    }
  }

  delPouchDoc = (item) => {
    console.log(item.target.dataset.item + " is gonna get deleted!");
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
    return this.state.items.slice().map(item => <Item key={item._id} text={item.text} delDoc={this.delPouchDoc}/>);
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
