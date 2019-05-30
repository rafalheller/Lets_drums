import React, {Component} from "react";
import BigTomSound from "./../../sounds/Big-Rack-Tom.mp3";

class BigTom extends Component {
    state = {
        click: false,
    }
    handleBigTom = () => {
        const audio = new Audio(BigTomSound);
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
            if(e.code === 'KeyB') {
                this.handleBigTom()
            }
        })
    }


    render() {
        let animation = 'animated fadeIn'

            let key = null;
            if (this.props.toggleShowKey) {
                key = <div className={this.state.click ? `keyboard-key press-btn ${animation}`  : `keyboard-key ${animation}`}>B</div>
            }

        return (
            <>
                <div className={this.state.click ? `big-tom click-big-tom ${animation}` : `big-tom ${animation}`}
                        onMouseDown={this.handleBigTom}
                        onKeyDown={this.handleKeyPress}>{key}
                </div>
            </>
        );
    }
}

export default BigTom;


