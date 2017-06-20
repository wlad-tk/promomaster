import React, {PureComponent, PropTypes,} from 'react';
import { Link } from 'react-router'
import SUPPORTED_LANGUAGES from '../Constants';

import '../../styles/NavMob.less';
import _ from 'lodash';

class NavMenuMobile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
        };
    };
    static displayName = 'Menu navigation mobile';
    static propTypes = {
        lang: PropTypes.string,
        slideout: PropTypes.object,
        lang_func: PropTypes.func,
    };

    render() {
        let {lang, slideout, lang_func} =this.props;

        return (
            <mob-menu>
                <ul className="lang-mob">
                    {_.map(SUPPORTED_LANGUAGES, (value, key) =>
                        <li key={key} className={`li ${key === lang ? 'active' : ''}`}
                            onClick={() => {lang_func(key); slideout.close();} }>
                            {value}
                        </li>
                    )}
                </ul>
                <ul className="navigation-bar-mob">
                    <li className="home-mob">
                        <Link to='/' activeClassName="active" onClick={()=>{slideout.close();}}>
                            <p className="caption">PROMOMASTER</p>
                            <p className="text">about company</p>
                        </Link>
                    </li>
                    <li className="horeca-mob">
                        <Link to='/horeca' activeClassName="active" onClick={()=>{slideout.close();}}>
                            <p className="caption">HOERECA</p>
                            <p className="text">turnkey solutions</p>
                        </Link>
                    </li>
                    <li className="clothes-mob">
                        <Link to='/clothes' activeClassName="active" onClick={()=>{slideout.close();}}>
                            <p className="caption">CLOTHES</p>
                            <p className="text">tailoring & branding</p>
                        </Link>
                    </li>
                    <li className="decol-mob">
                        <Link to="/decol" activeClassName="active" onClick={()=>{slideout.close();}}>
                            <p className="caption">DECOL</p>
                            <p className="text">ceramics & glass</p>
                        </Link>
                    </li>
                    <li className="contact-mob">
                        <Link onClick={() => {$.fn.fullpage.moveTo(5); slideout.close();}}>
                            <p className="caption">CONTACTS</p>
                            <p className="text">information</p>
                        </Link>
                    </li>
                    <li className="last feedback-mob">
                        <Link onClick={() => {jivo_api.open(); slideout.close();}}>
                            <p className="caption">FEEDBACK</p>
                            <p className="text">consultant</p>
                        </Link>
                    </li>
                </ul>
            </mob-menu>
        )
    }
}

export default NavMenuMobile;