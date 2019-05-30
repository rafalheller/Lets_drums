import React, {Component} from 'react';

class ShowKeyboard extends Component {
    state = {
        showKeyboard: true,
    }

    toggleKeyboard = () => {
        this.setState({
            showKeyboard: !this.state.showKeyboard
        });
        this.props.showkey()
    }

    render() {
        return (
            <>
                <a className='button' onClick={this.toggleKeyboard}
                   href="#"><i className="fas fa-keyboard"></i>
                     {this.state.showKeyboard ? ' Show Keyboard' : ' Hide Keyboard'}</a>
            </>
        );
    }
}

export default ShowKeyboard;