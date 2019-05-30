import React, {Component} from "react";
import KickSound from "./../../sounds/Kick.mp3";

class Kick extends Component {
    state = {
        click: false,
    }
    handleKick = () => {
        const audio = new Audio(KickSound);
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
            if (e.code === 'KeyK') {
                this.handleKick()
            }
        })
    }


    render() {
        let key = null;
        if (this.props.toggleShowKey) {
            key = <div className={this.state.click ? 'keyboard-key animated fadeIn press-btn' : 'keyboard-key animated fadeIn'}>K</div>
        }
        return <div

            className={this.state.click ? "kick click-kick animated fadeIn" : 'kick animated fadeIn'}
            onMouseDown={this.handleKick}>{key}</div>;
    }
}

export default Kick;
