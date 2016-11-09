import React from 'react'
import { Link } from 'react-router'

import '../../styles/Nav.less';


const Nav = React.createClass ({
    propTypes: {
        lang: React.PropTypes.string.isRequired
    },
    render() {
        console.log(this.props.lang);

        return (
            <ul className="navigation-bar">
                <li className="home"><Link to='/'>HOME</Link></li>
                <li className="blockimage"><a/></li>
                <li className="olso"><Link to='/horeca'>HOERECA</Link></li>
                <li className="olso"><a href="#/fb/section2">CLOTHES</a></li>
                <li className="olso"><a href="#/fb/section3">DECOL</a></li>
                <li className="olso"><a onClick={e => $.fn.fullpage.moveTo(5)}>CONTACTS</a></li>
                <li className="olso last"><a href="#/fb/section5">FEEDBACK</a></li>
            </ul>
        )
    }
});

export default Nav;
