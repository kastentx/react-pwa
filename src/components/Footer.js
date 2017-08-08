import React from 'react';

const footerStyle = {
    backgroundColor: '#111',
    color: '#7f8c8d',
    padding: '15px',
    position: 'fixed',
    bottom: '0',
    width: '100%'
};

export default function Footer(props) {
  return (
    <div style={footerStyle}>
      This is an example written with <code>React</code> and <code>PouchDB</code> showing the offline first capabilities of a PWA.
    </div>
  );
}