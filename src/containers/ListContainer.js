import React, { Component } from 'react';
import ShoppingList from '../components/ShoppingList';
import Prompt from '../components/Prompt';
import { addItem } from '../utils'

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
    let submission = this.state.input
    this.setState({
      input: '',
      items:  [...this.state.items, submission]
    })
  }

  renderListItems = () => {
    return this.state.items.slice().map((item, i) => <li key={i}>{item}</li>)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.items.length !== prevState.items.length)
      addItem(prevState.input)
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
