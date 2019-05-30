import React, {Component} from "react";

import Drums from "./drums_elements/Drums";
import Logo from "./nav/Logo";
import Metronome from "./nav/Metronome";
import CheckPanel from "./nav/CheckPanel";
import ShowKeyboard from "./nav/ShowKeyboard";
import Footer from './Footer';



class App extends Component {
    state = {
        kickHide: false,
        snareHide: false,
        hihatHide: false,
        floorTomHide: false,
        smallTomHide: false,
        bigTomHide: false,
        crashHide: false,
        rideHide: false,
        showkey: false,
        bonusPlay: false,
    }


    toggleShowKey = () => {
        const {showkey} = this.state;
        this.setState({
            showkey: !showkey
        })
    }


    toggleAllInstrument = () => {
        this.setState({
            kickHide: false,
            snareHide: false,
            hihatHide: false,
            floorTomHide: false,
            smallTomHide: false,
            bigTomHide: false,
            crashHide: false,
            rideHide: false,

        })

    }

    toggleSnare = () => {
        this.setState({
            snareHide: !this.state.snareHide,
            active: !this.state.active
        })
    }
    toggleKick = () => {
        this.setState({
            kickHide: !this.state.kickHide,

        })
    }
    toggleHihat = () => {
        this.setState({
            hihatHide: !this.state.hihatHide,

        })
    }
    toggleFloorTom = () => {
        this.setState({
            floorTomHide: !this.state.floorTomHide,

        })
    }
    toggleSmallTom = () => {
        this.setState({
            smallTomHide: !this.state.smallTomHide,

        })
    }
    toggleBigTom = () => {
        this.setState({
            bigTomHide: !this.state.bigTomHide,

        })
    }
    toggleCrash = () => {
        this.setState({
            crashHide: !this.state.crashHide,

        })
    }
    toggleRide = () => {
        this.setState({
            rideHide: !this.state.rideHide,

        })
    }
    toggleBonus = () => {
        console.log("ok")
        this.setState({
            bonusPlay: !this.state.bonusPlay
        })
    }

    render() {

        return <>
            <div className="container">
                <Logo/>
                <header id='header' className='animated slideInRight'>
                    <ShowKeyboard showkey={this.toggleShowKey}/>
                    <Metronome/>
                </header>
                <div className="main">
                    <CheckPanel snare={this.toggleSnare}
                                kick={this.toggleKick}
                                hihat={this.toggleHihat}
                                floorTom={this.toggleFloorTom}
                                smallTom={this.toggleSmallTom}
                                bigTom={this.toggleBigTom}
                                crash={this.toggleCrash}
                                showAll={this.toggleAllInstrument}
                                ride={this.toggleRide}

                                snareHide={this.state.snareHide}
                                kickHide={this.state.kickHide}
                                hihatHide={this.state.hihatHide}
                                floorTomHide={this.state.floorTomHide}
                                smallTomHide={this.state.smallTomHide}
                                bigTomHide={this.state.bigTomHide}
                                crashHide={this.state.crashHide}
                                rideHide={this.state.rideHide}
                    />


                    <Drums toggleKick={this.state.kickHide}
                           toggleSnare={this.state.snareHide}
                           toggleHihat={this.state.hihatHide}
                           toggleFloorTom={this.state.floorTomHide}
                           toggleSmallTom={this.state.smallTomHide}
                           toggleBigTom={this.state.bigTomHide}
                           toggleCrash={this.state.crashHide}
                           toggleShowAll={this.state.showAll}
                           toggleRide={this.state.rideHide}
                           toggleShowKey={this.state.showkey}
                           bonusPlay={this.state.toggleBonus}
                    />
                </div>

            </div>
            <Footer/>
        </>;
    }
}

export default App;
