import React from 'react';
import _ from 'underscore';

import Nav from './header/nav.jsx';
import '../styles/GetLanguages.less';

import languages from '../languages.json';


const SUPPORTED_LANGUAGES = {
    en: 'EN',
    ua: 'UA',
    fr: 'FR',
    de: 'DE'
};

const GetLanguages  = React.createClass({
    // propTypes: {
    //     lang: React.PropTypes.string.isRequired
    // },
    //
    // getChildContext: function() {
    //     return {lang: 'en'};
    // },
    //
    // // contextTypes: {
    // //     lang: React.PropTypes.string
    // // },
    //
    // getComponent: function(index) {
    //     console.log(this);
    // },
    getInitialState() {
        return {
            lang: 'en'
        }
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
                {React.cloneElement(this.props.children, {
                    lang: lang
                })}
            </div>
        )
    }
});

const FirstBlock = React.createClass({
    getInitialState() {
        return {
            lang: 'en'
        }
    },

    componentDidMount() {
        if($('html').hasClass('fp-enabled')){
            $.fn.fullpage.destroy('all');
        }

        $('#contantpage').fullpage({
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