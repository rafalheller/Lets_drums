import React, {Component} from 'react';

class SmallTomBtn extends Component {
    render() {
        return (
            <a onClick={this.props.smallTom} className='button'
               style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}
               href="#">Small tom</a>
        );
    }
}

export default SmallTomBtn;