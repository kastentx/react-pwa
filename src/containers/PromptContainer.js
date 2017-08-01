import React, { Component } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    return (
      <Prompt
      value={this.state.input}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      />
    );
  }
}

export default PromptContainer;
