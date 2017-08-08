import React from 'react';

const headerStyle = {
  backgroundColor: '#2d3e50',
  padding: '15px',
  marginBottom: '2%',
  color: 'white',
  textAlign: 'left',
  textTransform: 'uppercase'
};

const titleStyle = {
  margin: '0',
  fontSize: '150%'
};

export default function Header(props) {
  return (
    <div style={headerStyle}>
      <h2 style={titleStyle}>Shopping List</h2>
    </div>
  );
}