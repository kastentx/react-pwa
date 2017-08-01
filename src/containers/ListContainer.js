import React, { Component } from 'react';
import ShoppingList from '../components/ShoppingList';
import Prompt from '../components/Prompt';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: ['cat hair', 'frog legs']
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e)  => {
    e.preventDefault();
  }

  render() {
    let listItems = this.state.items.map(item => <li>{item}</li>)
    return (
      <div>
        <Prompt
          value={this.state.input}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ShoppingList
          items={listItems}
        />
      </div>
    );
  }
}

export default ListContainer;
