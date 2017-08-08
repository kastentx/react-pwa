import React from 'react';
import PropTypes from 'prop-types';

const itemStyle = {
  textAlign: 'left',
  paddingLeft: '2%',
  paddingRight: '2%',
  margin: '.25% auto 0 auto',
  fontSize: 'large'
};

const delBtnStyle = {
  color: 'crimson',
  float: 'right',
  cursor: 'pointer',
  fontSize: '80%'
};

export default function Item(props) {
  return (
    <div>
      <li style={itemStyle}>
        {props.text} 
        <span 
          style={delBtnStyle} 
          onClick={props.delDoc} 
          data-item={props.text} 
          data-id={props.id}>
          X
        </span>
      </li>
    </div>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  delDoc: PropTypes.func
}