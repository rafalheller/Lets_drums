import React, {Component} from "react";
import HiHatSound from "./../../sounds/Hi-Hat-Closed.mp3";


// var clickTouchRTDrumDone = false;
// rightTomDrumAll.on("touchstart click", function() {
//   if(!clickTouchRTDrumDone) {
//     clickTouchRTDrumDone = true;
//     setTimeout(function() {
//       clickTouchRTDrumDone = false;
//     }, 100);
//     rightTom();
//     return false;
//   }
// });


class HiHat extends Component {
    state = {
        click: false,
    }
    handleHiHat = () => {
        const audio = new Audio(HiHatSound);
        audio.play();
        this.setState({
            click: true
        })
        setTimeout(() => {
            this.setState({
                click: false
            })
        }, 100)
    };
    componentDidMount = () => {
        document.addEventListener('keypress', (e) => {
            if (e.code === 'KeyH') {
                this.handleHiHat()
            }
        })
    }

    render() {
        let animation = 'animated fadeIn'
        let key = null;
        if (this.props.toggleShowKey) {
            key = <div
                className={this.state.click ? `keyboard-key press-btn ${animation}` : `keyboard-key ${animation}`}>H</div>
        }
        return <div
            className={this.state.click ? `hihat click-hihat ${animation}` : `hihat ${animation}`}
            onMouseDown={this.handleHiHat}>
            {key}

        </div>;
    }
}

export default HiHat;
