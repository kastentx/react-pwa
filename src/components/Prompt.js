import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group row" >
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