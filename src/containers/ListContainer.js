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
    this.setState({
      items:  [...this.state.items, this.state.input]
    })
  }

  renderListItems = () => {
    return this.state.items.slice().map((item, i) => <li key={i}>{item}</li>)
  }

  render() {
    return (
      <div>
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
