import React, {Component} from 'react';

import SnareBtn from './checkPanelButtons/SnareBtn';
import KickBtn from './checkPanelButtons/KickBtn';
import HihatBtn from "./checkPanelButtons/HihatBtn";
import FloorTomBtn from "./checkPanelButtons/FloorTomBtn";
import SmallTomBtn from "./checkPanelButtons/SmallTomBtn";
import BigTomBtn from "./checkPanelButtons/BigTomBtn";
import CrashBtn from "./checkPanelButtons/CrashBtn";
import ShowAllBtn from "./checkPanelButtons/ShowAllBtn";
import RideBtn from './checkPanelButtons/RideBtn'


class CheckPanel extends Component {
    state = {
        active: false,
    }

    render() {

        const {snare, crash, bigTom, hihat, kick, smallTom, showAll, floorTom, ride} = this.props;
        const {rideHide, snareHide, hihatHide, crashHide, kickHide, smallTomHide, bigTomHide, floorTomHide} = this.props;
        return (
            <div className='check-panel animated slideInLeft'>
                <SnareBtn snare={snare} active={snareHide}/>
                <KickBtn kick={kick} active={kickHide}/>
                <HihatBtn hihat={hihat} active={hihatHide}/>
                <FloorTomBtn floorTom={floorTom} active={floorTomHide}/>
                <SmallTomBtn smallTom={smallTom} active={smallTomHide}/>
                <BigTomBtn bigTom={bigTom} active={bigTomHide}/>
                <CrashBtn crash={crash} active={crashHide}/>
                <RideBtn ride={ride} active={rideHide}/>
                <ShowAllBtn showAll={showAll}/>
            </div>
        );
    }
}

export default CheckPanel;