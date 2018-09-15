import React from 'react';

class TextAlign extends React.PureComponent {
  render(){
    return (<div style={{textAlign: this.props.align || 'left'}}>
      {this.props.children}
    </div>)
  }
}

export default TextAlign