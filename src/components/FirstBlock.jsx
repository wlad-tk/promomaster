import React, {PureComponent, PropTypes, cloneElement} from 'react';
import _ from 'lodash';
import Slideout from 'slideout';

import Nav from './header/nav.jsx';
import NavMenuMobile from './header/nav-mobile.jsx';

import '../styles/FirstBlock.less';
import SUPPORTED_LANGUAGES from './Constants';

class FirstBlock extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            slideout: {}
        };
    };
    static displayName = 'First Block';
    static propTypes = {
        children: PropTypes.element
    };

    changeLang(newLang) {
        this.setState({lang: newLang});
    };

    componentDidMount() {
        let slideout = new Slideout({
            'panel': this.refs.panel,
            'menu': this.refs.menu,
            'padding': 256,
            'tolerance': 70
        });
        this.setState({slideout: slideout});
    }

    render() {
        let {lang, slideout} = this.state;
        return (
            <div>
                <nav ref="menu">
                    <NavMenuMobile slideout={slideout} lang_func={::this.changeLang}/>
                </nav>
                <main ref="panel">
                    <ul className="lang">
                        {_.map(SUPPORTED_LANGUAGES, (value, key) =>
                            <li key={key} className={`li ${key === lang ? 'active' : ''}`}
                                onClick={e => this.changeLang(key)}>
                                {value}
                            </li>
                        )}
                    </ul>
                    <Nav lang={lang} />
                    {cloneElement(this.props.children, {lang: lang, slideout: slideout})}
                </main>
            </div>
        )
    }
}

export default FirstBlock;