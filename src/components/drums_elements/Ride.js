import React, { Component } from "react";
import RideSound from "./../../sounds/Ride.mp3";

class Ride extends Component {
    state = {
        click: false,
    }
    handleRide = () => {
        const audio = new Audio(RideSound);
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
            if(e.code === 'KeyU') {
                this.handleRide()
            }
        })
    }

    render() {
        let animation = 'animated fadeIn'
        let key = null;
        if (this.props.toggleShowKey) {
            key =  <div className={this.state.click ? `keyboard-key ${animation} press-btn` : `keyboard-key ${animation}` }>U</div>
        }
        return <div className={this.state.click ? `ride click-ride ${animation}` : `ride ${animation}`} onMouseDown={this.handleRide}>
            {key}
        </div>;
    }
}

export default Ride;
