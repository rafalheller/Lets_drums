import React, {Component} from 'react';

class CrashBtn extends Component {
    render() {
        const {crash} = this.props;
        return (
            <a onClick={crash} className='button'
               style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}
               href="#">Crash</a>
        );
    }
}

export default CrashBtn;