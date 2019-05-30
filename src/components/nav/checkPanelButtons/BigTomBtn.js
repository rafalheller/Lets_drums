import React, {Component} from 'react';

class BigTomBtn extends Component {
    render() {
        return (
            <a onClick={this.props.bigTom} className='button'
               style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}
               href="#">Big Tom</a>
        );
    }
}

export default BigTomBtn;