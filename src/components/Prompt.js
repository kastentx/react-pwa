import React from 'react';
import PropTypes from 'prop-types';

const inputStyle = {
  margin: '0 0 5% 0'
};

export default function Prompt(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group row" style={inputStyle}>
        <input
          onChange={props.onChange}
          value={props.value}
          className="form-control"
          placeholder="add an item..."
          type="text"
        />
      </div>
    </form>
  );
}

Prompt.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}