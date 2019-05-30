import React, {Component} from 'react';
import MetronomeSound from "./../../sounds/metronome.mp3";


class Metronome extends Component {
    state = {
        metronomeActive: false,
        active: false,
        tempo: 100

    }


    toggleMetronome = () => {
        if (this.id) {
            clearInterval(this.id);
            this.id = 0;
            this.setState({
                metronomeActive: false,
            })
        } else {
            this.id = setInterval(() => {
                const audio = new Audio(MetronomeSound);
                audio.volume = 0.6;
                audio.play();
            }, 60 / this.state.tempo * 1000)
            this.setState({
                metronomeActive: true
            })

        }
    }


    handleClick = () => {
        this.setState({
            active: !this.state.active,
        });
    }

    setTempo = (e) => {
        this.setState({
            tempo: e.target.value
        });
    }


    render() {

        if (!this.state.active) {
            return <div className='metronome button' onClick={this.handleClick} href="#"><i
                className="fas fa-stopwatch"></i>  show metronome</div>
        } else {
            return (
                <>
                    <div className='button' onClick={this.handleClick} href="#"><i className="fas fa-stopwatch"></i>  hide metronome
                    </div>
                    {/*<div>*/}

                    <div className='button'>
                        <div className='' onClick={this.toggleMetronome}>
                            {this.state.metronomeActive ? <i class="fas fa-stop"></i> : <i className="fas fa-play"></i>}
                        </div>
                    </div>
                    {/*{this.state.metronomeActive ? <i className="far fa-stop-circle">STOP</i> : 'Start'}*/}

                    {this.state.metronomeActive ? null : <div className='tempo'><input className='button set-tempo' onChange={this.setTempo}
                                                                  type="number"
                                                                  min={30}
                                                                  max={200}
                                                                  placeholder='set tempo'
                                                                  value={this.state.tempo}
                    />
                        <span className='set-tempo button'> set your tempo</span> </div>}


                    {/*</div>*/}
                </>)
        }


    }
}

export default Metronome;