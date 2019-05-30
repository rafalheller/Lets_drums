import React, {Component} from 'react';

class FloorTomBtn extends Component {
    render() {
        return (
            <a onClick={this.props.floorTom}
               className='button'
               style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}
               href="#">Floor tom</a>
        );
    }
}

export default FloorTomBtn;