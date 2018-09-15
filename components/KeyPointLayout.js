import React from 'react'
import Twitter from './Twitter'
import Conference from './Conference'

export default ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      background: 'rgb(84, 104, 255)',
      color: '#FFF',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }}
  >
    <div style={{marginLeft: 70, marginRight: 70}}>{children} <Twitter light/> <Conference light/></div>
  </div>
)