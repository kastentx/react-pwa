import React from 'react';
import PropTypes from 'prop-types';

export default function ShoppingList(props) {
  return (
    <div>
      {props.children ? <ul>{props.children}</ul> : <p>EMPTY SHOPPING LIST</p>}
    </div>
  );
}

ShoppingList.propTypes = {
  children: PropTypes.array
}