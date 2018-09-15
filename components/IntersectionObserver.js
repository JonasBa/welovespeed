import React from 'react'
import { PrimaryButton } from './Button';

const ScrollDetectorContainer = {
  height: "70vh",
  overflow: "scroll",
}
const ScrollDetectorInnerContainer = {
  height: "200vh",
  display: "flex",
  flexDirecton: "column",
}

const ImageStyles = {
  objectFit: 'contain',
  alignSelf: 'center'
}

class IntersectionObserverScrollDetection extends React.Component {
  containerRef = React.createRef();
  imageRef = React.createRef();

  state = {
    visible: false,
    intersectionRatio: false
  }

  marginOptions = {
    rootMargin: "150px 0px 0px 0px"
  }

  thresholdOptions = {
    threshold: [0, .3, .7, 1]
  }

  componentDidMount(){
    this.initializeObserver()
  }

  componentWillUnmount(){
    this.intersectionObserver.disconnect()
  }

  observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      this.setState({
        visible: entry.intersectionRatio === 1,
        intersectionRatio: entry.intersectionRatio
      })

      if(entry.isIntersecting) {
        // Do some work and
        this.intersectionObserver.unobserve(entry)
      }
    })
  }

  initializeObserver = (options = {}) => {
    this.intersectionObserver && this.intersectionObserver.disconnect()

    const observerOptions = {
      root: this.containerRef.current,
      rootMargin: '0px',
      threshold: 1.0,
      ...options
    }
    
    this.intersectionObserver = new IntersectionObserver(this.observerCallback, observerOptions);
    this.intersectionObserver.observe(this.imageRef.current)
  }

  render(){
    return (
      <div>
        <div style={{textAlign: 'left'}}>
            <div>Visible: <b>{String(this.state.visible)}</b></div>
            <div>Partialy visible: <b>{String(this.state.intersectionRatio)}</b></div>
          </div>
        <div ref={this.containerRef} style={ScrollDetectorContainer}>
          <div style={ScrollDetectorInnerContainer}>
            <img src="assets/logo-welovespeed.png" ref={this.imageRef}style={ImageStyles}></img>
          </div>
        </div>
        <PrimaryButton onClick={() => this.initializeObserver(this.marginOptions)}>Set margin</PrimaryButton>
        <PrimaryButton onClick={() => this.initializeObserver(this.thresholdOptions)}>Set threshold</PrimaryButton>
      </div>
    )
  }
}

export default IntersectionObserverScrollDetection