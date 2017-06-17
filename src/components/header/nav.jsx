import React, {PureComponent, PropTypes} from 'react';
import { Link } from 'react-router'

import '../../styles/Nav.less';

class Nav extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
        };
    };

    static displayName = 'Nav bar';
    static propTypes = {
        lang: PropTypes.string,
    };

    render() {
        return (
            <ul className="navigation-bar">
                <li className="home">
                    <Link to='/' activeClassName="active">
                        <p className="caption">PROMOMASTER</p>
                        <p className="text">about company</p>
                    </Link>
                </li>
                <li className="blockimage"><a/></li>
                <li className="horeca">
                    <Link to='/horeca' activeClassName="active">
                        <p className="caption">HOERECA</p>
                        <p className="text">turnkey solutions</p>
                    </Link>
                </li>
                <li className="clothes">
                    <Link to='/clothes' activeClassName="active">
                        <p className="caption">CLOTHES</p>
                        <p className="text">tailoring & branding</p>
                    </Link>
                </li>
                <li className="decol">
                    <Link to="/decol" activeClassName="active">
                        <p className="caption">DECOL</p>
                        <p className="text">ceramics & glass</p>
                    </Link>
                </li>
                <li className="contact">
                    <a onClick={e => $.fn.fullpage.moveTo(5)}>
                        <p className="caption">CONTACTS</p>
                        <p className="text">information</p>
                    </a>
                </li>
                <li className="last feedback">
                    <a onClick={e => jivo_api.open()}>
                        <p className="caption">FEEDBACK</p>
                        <p className="text">consultant</p>
                    </a>
                </li>
            </ul>
        )
    }
}

export default Nav;
