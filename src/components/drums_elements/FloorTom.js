import React, { Component } from "react";
import FloorTomSound from "./../../sounds/Floor-Tom.mp3";

class FloorTom extends Component {
  state = {
    click: false,
  }
  handleFloorTom = () => {
    const audio = new Audio(FloorTomSound);
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
      if(e.code === 'KeyL') {
        this.handleFloorTom()
      }
    })
  }


  render() {
    let animation = 'animated fadeIn'

      let key = null;
      if (this.props.toggleShowKey) {
        key = <div className={this.state.click ? `keyboard-key press-btn ${animation}` : `keyboard-key ${animation}`}>L</div>
      }
    return <div
        className={this.state.click ? `floor-tom click-floor-tom ${animation}` : `floor-tom ${animation}`}
        onMouseDown={this.handleFloorTom}>{key}</div>;
  }
}

export default FloorTom;
