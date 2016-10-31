import React from 'react'

import '../../styles/Nav.less';

const Nav = React.createClass ({
    render() {
        return (
            <ul className="navigation">
                <li className="home"><a href="#/fb/section0">Home</a></li>
                <li className="olso"><a href="#/fb/section1">Horeca</a></li>
                <li className="olso"><a href="#/fb/section2">Clothes</a></li>
                <li className="olso"><a href="#/fb/section3">Decol</a></li>
                <li className="olso"><a href="#/fb/section4">Clothes</a></li>
                <li className="olso"><a href="#/fb/section5">Decol</a></li>
            </ul>
        )
    }
});

export default Nav