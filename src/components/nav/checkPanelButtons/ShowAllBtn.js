import React, {Component} from 'react';

class ShowAllBtn extends Component {
    render() {
        return (
            <a onClick={this.props.showAll} className='button'
               style={{borderLeft: '7px solid lightgrey'}}
               href="#">show all</a>
        );
    }
}

export default ShowAllBtn;