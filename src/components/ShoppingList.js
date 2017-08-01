import React from 'react';
import PropTypes from 'prop-types';

export default function ShoppingList(props) {
  return (
    <div>
      {props.items.length ? <ul>{props.items}</ul> : <p>EMPTY SHOPPING LIST</p>}
    </div>
  );
}

ShoppingList.propTypes = {}