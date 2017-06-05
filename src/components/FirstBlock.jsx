import React, {PureComponent, PropTypes, cloneElement} from 'react';
// import {connect} from 'react-redux';
import _ from 'lodash';
import Nav from './header/nav.jsx';

import '../styles/FirstBlock.less';

const SUPPORTED_LANGUAGES = {
    ru: 'RU',
    en: 'EN',
    ua: 'UA',
    fr: 'FR',
    de: 'DE'
};

// @connect()
class FirstBlock extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'en'
        };
    };

    static displayName = 'First Block';

    static propTypes = {
        children: PropTypes.element,
    };

    changeLang(newLang) {
        this.setState({lang: newLang});
    };

    render() {
        let {lang} = this.state;

        return (
            <div>
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
            </div>
        )
    }
}

export default FirstBlock;