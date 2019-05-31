import React, {Component} from 'react';
import Bonus1Sound from "../../sounds/metallica.mp3";

class Bonus1 extends Component {
    state = {
        bonusPlay: false,
    }

    audio = null;

    componentDidMount() {
        this.audio = new Audio(Bonus1Sound)
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
            border: '2px solid red',
            color:'red',
            cursor:'pointer'

        }
        const boomStyle = {
            display: 'block',
            position: 'absolute',
            right: '-250px',
            top: '0'

        }

        if (!this.state.bonusPlay) {

            return <div className='bonus1'
                        onClick={this.handleBonus}>
            </div>
        } else {

            return (<>

                    <div className='bonus1'
                         style={stopStyle}
                         onClick={this.handleBonus}
                    >x
                    </div>
                    <div style={boomStyle}
                         className=' boom1 animated '></div>


                </>
            );

        }
    }
}

export default Bonus1;