import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  return (
    <li>{props.text}</li>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired
}