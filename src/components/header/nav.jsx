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
                <li className="olso"><Link to='/clothes'>CLOTHES</Link></li>
                <li className="olso"><Link to="/decol">DECOL</Link></li>
                <li className="olso"><a onClick={e => $.fn.fullpage.moveTo(5)}>CONTACTS</a></li>
                <li className="olso last"><a onClick={e => jivo_api.open()}>FEEDBACK</a></li>
            </ul>
        )
    }
});

export default Nav;
