import React, {Component} from 'react';

class RideBtn extends Component {
    render() {
        const {ride} = this.props;
        return (
            <a onClick={ride} className='button'
               style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}
               href="#">Ride</a>
        );
    }
}

export default RideBtn;