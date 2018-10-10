import React from 'react'

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
  alignSelf: 'center',
}

class ScrollDetector extends React.Component {
  containerRef = React.createRef();
  imageRef = React.createRef();

  state = {
    visible: false,
    partialyVisible: false
  }

  componentDidMount(){
    this.containerRef.current.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount(){
    this.containerRef.current.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const container = this.containerRef.current
    const image = this.imageRef.current

    let containerTop = container.scrollTop;
    let containerBottom = containerTop + container.clientHeight;

    //Get element properties
    let elementTop = image.offsetTop;
    let elementBottom = elementTop + image.clientHeight;

    //Check if in view    
    let isTotal = elementTop >= containerTop && elementBottom <= containerBottom
    let isPartial = (
      (elementTop < containerTop && elementBottom > containerTop) ||
      (elementBottom > containerBottom && elementTop < containerBottom)
    );

    //Return outcome
    this.setState({
      visible: isTotal,
      partialyVisible: isPartial
    })
  }

  render(){
    return (
      <div>
        <div style={{textAlign: 'left'}}>
          <h2 style={{marginBottom: 0}}>Regular onscroll event</h2>
          <div>Visible: <b>{String(this.state.visible)}</b></div>
          <div>Partialy visible: <b>{String(this.state.partialyVisible)}</b></div>
        </div>
        <div ref={this.containerRef} style={ScrollDetectorContainer}>
          <div style={ScrollDetectorInnerContainer}>
            <img src="assets/logo-welovespeed.png" ref={this.imageRef}style={ImageStyles}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default ScrollDetector