import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  return (
    <div>
      <li>{props.text} <span className="delete-btn" onClick={props.delDoc} data-item={props.text} data-id={props.id}>X</span></li>
    </div>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  delDoc: PropTypes.func
}