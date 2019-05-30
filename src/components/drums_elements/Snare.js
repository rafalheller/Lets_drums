import React, {Component} from "react";
import SnareSound from "./../../sounds/Snare.mp3";

class Snare extends Component {
    state = {
        click: false,
    };
    handleSnare = () => {
        const audio = new Audio(SnareSound);
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
        document.addEventListener('keydown', (e) => {
            if (e.code === 'KeyS') {
                this.handleSnare()
            }
        })
    };


    render() {
        let animation = 'animated fadeIn';
        let key = null;

        if (this.props.toggleShowKey) {
            key = <div
                className={this.state.click ? 'keyboard-key animated fadeIn press-btn' : 'keyboard-key animated fadeIn'}>S</div>
        }
        return <div
            className={this.state.click ? `snare click-snare ${animation} ` : `snare ${animation} `}
            onMouseDown={this.handleSnare}> {key}</div>;
    }
};

export default Snare;
