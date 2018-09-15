import React from 'react'
import Twitter from './Twitter'
import Conference from './Conference'

export default ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(#fff, #f5f5fa)',
      color: '#3a416f',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }}
  >
    <div style={{marginLeft: 70, marginRight: 70}}>{children} <Twitter/><Conference/></div>
  </div>
)