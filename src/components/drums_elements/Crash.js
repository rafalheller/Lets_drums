import React, {Component} from "react";
import CrashSound from "./../../sounds/Crash.mp3";

class Crash extends Component {
    state = {
        click: false,
    }
    handleCrash = () => {
        const audio = new Audio(CrashSound);
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
            if (e.code === 'KeyC') {
                this.handleCrash()
            }
        })
    }

    render() {

        let animation = 'animated fadeIn'
        let key = null;
        if (this.props.toggleShowKey) {
            key = <div
                className={this.state.click ? `keyboard-key press-btn ${animation}` : `keyboard-key ${animation}`}>C</div>
        }

        return <div className={this.state.click ? `crash click-crash ${animation}` : `crash ${animation}`}
                    onMouseDown={this.handleCrash}>
            {key}</div>;
    }
}

export default Crash;
