import React, { Component } from 'react';
import ShoppingList from '../components/ShoppingList';
import Prompt from '../components/Prompt';
import { addItem, getAllDocs } from '../utils'

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
    getAllDocs().then(result => {
      const currentItems = result.rows.map(item => {return {_id: item.doc._id, text: item.doc.text}});
      this.setState({
        items: currentItems
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e)  => {
    e.preventDefault();
    addItem(this.state.input).then(
      this.setState({
        input: ''
      }, this.getItemsFromPouch()));
  }

  renderListItems = () => {
    return this.state.items.slice().map(item => <li key={item._id}>{item.text}</li>);
  }

  getItemsFromPouch = () => {
    getAllDocs().then(result => {
      const currentItems = result.rows.map(item => {return {_id: item.doc._id, text: item.doc.text}});
      this.setState({
        items: currentItems
      });
    });
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
