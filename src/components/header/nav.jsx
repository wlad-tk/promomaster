import React, {PureComponent, PropTypes} from 'react';
import { Link } from 'react-router'

import '../../styles/Nav.less';

class Nav extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'en'
        };
    };

    static displayName = 'Nav bar';

    static propTypes = {
        lang: PropTypes.string,
    };

    render() {
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
}

export default Nav;
