import React, {Component} from 'react';

class HihatBtn extends Component {
    render() {
        return (
            <>
                <a onClick={this.props.hihat}
                   className='button'
                   style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}
                   href="#">Hihat</a>
            </>
        );
    }
}

export default HihatBtn;