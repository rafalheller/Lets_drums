import React, {Component} from 'react';


class SnareBtn extends Component {
    state = {
        active: false,
    }

    // handleClick = () => {
    //     this.setState({
    //         active: !this.state.active
    //     })
    // }
    render() {
        return (
            <>
                <a
                    onClick={this.props.snare}
                    style={this.props.active === true ? {borderLeft: '7px solid #8B0000'} : {borderLeft: '7px solid #556B2F'}}

                   className={this.props.active === false ? "button active" : "button"}
                   href="#">Snare</a>
            </>
        );
    }
}

export default SnareBtn;