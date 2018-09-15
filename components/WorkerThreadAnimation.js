import React from 'react';

import {CX} from './Circle'
import {PrimaryButton, SecondaryButton} from 'components/Button'

export default class WorkerThreadAnimation extends React.Component {
  constructor(props){
    super(props)
    this.ref = React.createRef();
    this.worker = new Worker("./components/WorkerThreadAnimation.worker.compiled.js");
  }

  onStart = () => {
    const offscreenControl = this.ref.current.transferControlToOffscreen();
    this.worker.postMessage({canvas: offscreenControl}, [offscreenControl]);
  }

  render(){
    const size = CX * window.devicePixelRatio;
    return (
      <div>
      <canvas ref={this.ref} width={size} height={size}></canvas>
      <div>
        <PrimaryButton onClick={this.onStart}>Start</PrimaryButton>
        <SecondaryButton onClick={this.onStop}>Stop</SecondaryButton>
      </div>
      </div>
    )
  }
}