import React, {Component} from 'react';

class KickBtn extends Component {
    render() {
        return (
            <>
                <a onClick={this.props.kick}
                   className='button'
                   style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}href="#">Kick</a>
            </>
        );
    }
}

export default KickBtn;