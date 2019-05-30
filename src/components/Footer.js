import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id='footer'>
                <div className="container">
                    <div className='contact'></div>
                    <div className='social-media '>
                        <a href="https://github.com/rafalheller" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/rafal-heller/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;