import React from 'react'
import {PrimaryButton, SecondaryButton} from './Button'
import {Appear } from 'mdx-deck'

class Ben extends React.Component {
  render(){
    return (
      <div style={{position: 'relative', width: '80vw', display: "flex", justifyContent:"space-between", textAlign: 'center'}}>
        <div>
          <h3>Oversized: 55KB</h3>
          <div style={{height: 500}}>
            <img src="assets/ben.png"></img>
          </div>
          <PrimaryButton onClick={(event) => this.changeStep(event, 2)}>Resize</PrimaryButton>
        </div>
        <Appear>
        <div style={{margin: "0 40px"}}>
            <div>
              <h3>Resized: 30KB 👍</h3>
              <div style={{height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src="assets/ben.png" width="320"></img>
              </div>
              <PrimaryButton onClick={(event) => this.changeStep(event, 3)}>Convert to WebP</PrimaryButton>
            </div>
        </div>

          <div>
              <div>
              <h3>Compressed: 21KB🚀</h3>
              <div style={{height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src="assets/ben.png" width="320"></img>
              </div>
              <SecondaryButton onClick={(event) => this.changeStep(event)}>Voila 🤩</SecondaryButton>
              </div>
          </div>
        </Appear>
      </div>
    )
  }
}

export default Ben;