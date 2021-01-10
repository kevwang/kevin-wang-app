import React from 'react'

export default ({ children }) => (
  <div style={{ 
    background: '#fff',
    maxWidth: '900px',
    padding: '8%',
    paddingTop: '0px',
    paddingBottom: '0px',
    margin: 'auto',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#00000012',
    borderTopStyle: 'none' }}>
      {children}
  </div>
)
