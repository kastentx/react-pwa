import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div style={{marginTop : '20px'}}>
        <div className="form-group" >
          <input
            style={{width: '70%', float: 'left', margin: '0 0 0 10%'}}
            onChange={props.onChange}
            value={props.value}
            className="form-control"
            placeholder="Enter your message..."
            type="text" />
        </div>
        <div className="form-group">
          <button
            style={{width: '10%', backgroundColor: 'blue', marginLeft: '0'}}
            className="btn"
            type="submit">
            Submit
          </button>
        </div>
    </div>
    </form>
  );
}

Prompt.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
}