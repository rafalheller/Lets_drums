import React, { Component } from "react";
import SmallTomSound from "./../../sounds/Small-Rack-Tom.mp3";

class SmallTom extends Component {
  state = {
    click: false,
  }
  handleSmallTom = () => {
    const audio = new Audio(SmallTomSound);
    audio.play();
    this.setState({
      click: true})
    setTimeout(()=> {
      this.setState({
        click: false})
    },100)
  };
  componentDidMount =()=> {
    document.addEventListener('keypress',(e) => {
      if(e.code === 'KeyD') {
        this.handleSmallTom()
      }
    })
  }


  render() {
    let animation = 'animated fadeIn'
    let key = null;
    if (this.props.toggleShowKey) {
      key = <div className={this.state.click ? `keyboard-key ${animation} press-btn` : `keyboard-key ${animation}`}>D</div>
    }
    return <div className= {this.state.click ?`small-tom click-small-tom ${animation}` : `small-tom ${animation}`} onMouseDown={this.handleSmallTom}> {key}</div>;
  }
}

export default SmallTom;
