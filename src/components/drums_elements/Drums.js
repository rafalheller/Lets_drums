import React, {Component} from "react";

import Kick from "./Kick";
import Snare from "./Snare";
import HiHat from "./HiHat";
import Crash from "./Crash";
import FloorTom from "./FloorTom";
import SmallTom from "./SmallTom";
import BigTom from "./BigTom";
import Ride from "./Ride";
import Bonus from "./Bonus"

class Drums extends Component {


    render() {
        const {
            toggleRide, toggleCrash,
            toggleSmallTom, toggleKick,
            toggleHihat, toggleBigTom,
            toggleSnare, toggleFloorTom
        } = this.props;
        return (

            <div className="drums">
                {toggleSnare ? null : <Snare toggleShowKey={this.props.toggleShowKey}/>}
                {toggleKick ? null : <Kick toggleShowKey={this.props.toggleShowKey}/>}
                {toggleHihat ? null : <HiHat toggleShowKey={this.props.toggleShowKey}/>}
                {toggleCrash ? null : <Crash toggleShowKey={this.props.toggleShowKey}/>}
                {toggleFloorTom ? null : <FloorTom toggleShowKey={this.props.toggleShowKey}/>}
                {toggleSmallTom ? null : <SmallTom toggleShowKey={this.props.toggleShowKey}/>}
                {toggleBigTom ? null : <BigTom toggleShowKey={this.props.toggleShowKey}/>}
                {toggleRide ? null : <Ride toggleShowKey={this.props.toggleShowKey}/>}
               <Bonus bonusPlay={this.props.toggleBonus}/>
            </div>
        );
    }
}

export default Drums;
