import React from 'react';

import Circle, {CX} from './Circle'
import {PrimaryButton, SecondaryButton} from 'components/Button'

export default class CircleAnimator extends React.Component {
  constructor(props){
    super(props)
    this.ref = React.createRef();
  }

  componentDidMount(){
    this.canvas = this.ref.current
    this.context = this.canvas.getContext("2d");
    this.scale = window.devicePixelRatio;

    this.canvas.width = CX * this.scale;
    this.canvas.height = CX * this.scale;
    this.circles = Array.from(Array(10).keys()).map((n,i) => new Circle(this.context, i))
  }

  clear = (context) => {
    context.clearRect(0,0, 500 * this.scale, 500 * this.scale)
    window.requestAnimationFrame(() => this.clear(context || this.context))
  }

  showCircles = () => {
    this.circles.forEach((c,i) => {
      c.draw()
      setTimeout(() => {
        c.show(performance.now())
      }, i * 200)
    })
  }

  animateCircles = () => {
    if(!this.circles) return

    this.circles.map(c => c.die())
    this.circles = Array.from(Array(10).keys()).map((n,i) => {
      const c = new Circle(this.canvas.getContext('2d'), i)
      c.draw()
      setTimeout(() => {
        c.show(performance.now())
      }, i * 70)
      return c
    })
    
    setTimeout(() => this.animateCircles(), 1200)
  }

  onStart = () => {
    this.canvas = this.ref.current
    this.context = this.canvas.getContext("2d");
    this.clear(this.context)
    this.showCircles()
    setTimeout(this.animateCircles, 2800)
  }

  onStop = ( ) => {
    this.circles.map(c => c.die())
    this.circles = undefined;
    this.circles = Array.from(Array(10).keys()).map((n,i) => {
      return new Circle(this.canvas.getContext('2d'), i)
    })
  }

  render(){
    return (
      <div>
      <canvas ref={this.ref} width={200} height={200}></canvas>
      <div>
        <PrimaryButton onClick={this.onStart}>Start</PrimaryButton>
        <SecondaryButton onClick={this.onStop}>Stop</SecondaryButton>
      </div>
      </div>
    )
  }
}