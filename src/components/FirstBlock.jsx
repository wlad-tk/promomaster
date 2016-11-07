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

    componentDidMount() {
        $('html').hasClass('fp-enabled') ? $.fn.fullpage.destroy('all'): false;

        $('#contantpage').fullpage({
            // anchors: ['zero', 'one', 'two', 'three', 'four'],
            css3: true,
            navigation: true,
            scrollOverflow: true,
            scrollingSpeed: 1000,
        });
    },

    changeLang(newLang) {
        this.setState({lang: newLang});
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
                <div id='contantpage'>
                    {React.cloneElement(this.props.children, {lang: lang})}
                </div>
            </div>
        )
    }
});

export default FirstBlock;