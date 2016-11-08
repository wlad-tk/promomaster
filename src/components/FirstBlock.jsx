import React from 'react';
import _ from 'underscore';

import Nav from './header/nav.jsx';

import '../styles/FirstBlock.less';

// const img = require('../img/ajax-loader.gif');

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

        // return () => {
        //     var elem = document.getElementById('preload');
        //     elem.style.display='block';
        //     window.onload = () => {elem.style.display='none';}
        // }

    },

    changeLang(newLang) {
        this.setState({lang: newLang});
    },

    render() {
        let {lang} = this.state;

        return (
            <div>
                {/*<div id="preload" style={{width: "100%", height: "100%", background: "rgb(255, 255, 255)", zIndex: "1060", display: "none", opacity: "1", position: "fixed", paddingTop : "25%"}}>*/}
                    {/*<img src={img}/>*/}
                {/*</div>*/}
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