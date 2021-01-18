import React from 'react'

export default ({ children }) => (
  <div style={{ 
    background: '#fff',
    boxShadow: '0px 5px 20px #dddddd',
    maxWidth: '900px',
    padding: 'min(96px, 5%)',
    paddingTop: 0,
    paddingBottom: 0,
    margin: 'auto',
    marginBottom: 40,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#00000012',
    borderTopStyle: 'none',
    borderRadius: '0px 0px 15px 15px' }}>
      {children}
  </div>
)
