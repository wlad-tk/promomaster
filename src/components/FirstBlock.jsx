import React from 'react';
import _ from 'underscore';

import Nav from './header/nav.jsx';

import '../styles/FirstBlock.less';

const SUPPORTED_LANGUAGES = {
    ru: 'RU',
    en: 'EN',
    ua: 'UA',
    fr: 'FR',
    de: 'DE'
};

const FirstBlock = React.createClass({
    getInitialState() {
        return {
            lang: 'en'
        }
    },

    changeLang(newLang) {
        this.state.lang !== newLang ? this.setState({lang: newLang}): {};
    },

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
                {React.cloneElement(this.props.children, {lang: lang})}
            </div>
        )
    }
});

export default FirstBlock;