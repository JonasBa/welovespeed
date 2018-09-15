import React from 'react'

export default ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1f243f',
      color: '#FFF',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'left',
      backgroundImage: 'url(assets/landing-bg.png)',
      backgroundSize: 'cover',
      padding: "0 120px",
    }}
  >
    <div style={{width: '100%'}}>{children}</div>
  </div>
)