import React, {PureComponent, PropTypes, cloneElement} from 'react';
// import {connect} from 'react-redux';
import _ from 'lodash';
import Nav from './header/nav.jsx';

import '../styles/FirstBlock.less';
import Slideout from 'slideout';
import SUPPORTED_LANGUAGES from './Constants';

// @connect()
class FirstBlock extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
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
        const slideout = new Slideout({
            'panel': this.refs.panel,
            'menu': this.refs.menu,
            'padding': 256,
            'tolerance': 70
        });
    }

    render() {
        let {lang} = this.state;

        return (
            <div>
                <nav ref="menu">
                    <h2>Menu</h2>
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
                    {cloneElement(this.props.children, {lang: lang})}
                </main>
            </div>
        )
    }
}

export default FirstBlock;