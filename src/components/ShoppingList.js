import React from 'react';
import PropTypes from 'prop-types';

const listStyle = {
  listStyle: 'inside',
  padding: '0'
};

export default function ShoppingList(props) {
  return (
    <div>
      {props.children ? <ul style={listStyle}>{props.children}</ul> : <p>EMPTY SHOPPING LIST</p>}
    </div>
  );
}

ShoppingList.propTypes = {
  children: PropTypes.array
}