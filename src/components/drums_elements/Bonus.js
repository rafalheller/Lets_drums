import React, {Component} from 'react';
import BonusSound from "../../sounds/acDc.mp3";

class Bonus extends Component {
    state = {
        bonusPlay: false,
    }

    audio = null;

    componentDidMount() {
        this.audio = new Audio(BonusSound)
    }

    handleBonus = () => {
        this.setState({
            bonusPlay: !this.state.bonusPlay
        }, () => {
            if (this.state.bonusPlay) {
                this.audio.currentTime = 0;
                this.audio.volume = 0.4;
                this.audio.play()

            } else {
                this.audio.pause()
            }
        })


    };


    render() {

        const stopStyle = {
            backgroundColor: 'transparent',
            border: '2px solid white',
            opacity: 0.5
        }
        const boomStyle = {
            display: 'block',
            position: 'absolute',
            left: '60%',
            top: '30%'

        }

        if (!this.state.bonusPlay) {

            return <div className='bonus'
                        onClick={this.handleBonus}>
            </div>
        } else {

            return (<>

                    <div className='bonus'
                         style={stopStyle}
                         onClick={this.handleBonus}
                    >x
                    </div>
                    <div style={boomStyle}
                         className=' boom animated fadeOutDown '></div>


                </>
            );

        }
    }
}

export default Bonus;