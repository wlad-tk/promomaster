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

    componentWillMount() {
        if (typeof window.jivo_magic_var == "undefined"){
            let jivo_magic_var = 123321;
            window.jivo_config={
                "widget_id":"vy9cavgAjm",
                "site_id":134717,
                "widget_color":"#ecedef",
                "widget_font_color":"dark",
                "widget_padding":"100",
                "widget_height":"0",
                "widget_orientation":"bottom",
                "font_size":"14",
                "font_family":"Arial",
                "font_type":"normal",
                "locale":"ru_RU",
                "show_rate_form":1,
                "hide_ad":0,
                "secure":0,
                "contacts_ask":0,
                "style_string":"jivo_shadow jivo_rounded_corners jivo_gradient jivo_3d_effect jivo_border jivo_3px_border jivo_dark_text",
                "chat_mode":1?"online":"offline",
                "options":0,
                "hide_offline":0,
                "vox_login":"jivosite@chat.jivosite.voximplant.components",
                "avatar_url":"\/\/s3-eu-west-1.amazonaws.components\/jivo-userdata",
                "online_widget_label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043c\u044b \u043e\u043d\u043b\u0430\u0439\u043d!",
                "offline_widget_label":"\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043d\u0430\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
                "offline_form_text":"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u044d\u0442\u043e\u0439 \u0444\u043e\u0440\u043c\u0435, \u0438 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0435\u0433\u043e \u043d\u0430 e-mail \u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u043c!",
                "base_url":"\/\/code2.jivosite.components",
                "static_host":"cdn.jivosite.components\/v2",
                "comet":{"host":"node16.jivosite.components"},
                "contacts_settings":{
                    "name":{"show":true,"required":false},
                    "phone":{"show":true,"required":false},
                    "email":{"show":true,"required":true}
                }
            };
            let sc = document.getElementsByTagName("script"),
                iA = sc[0],
                se = document.createElement("script");

            se.type = "text/javascript";
            se.async = true;
            se.charset="UTF-8";
            iA.parentNode.insertBefore(se, iA).src="http://cdn.jivosite.components/v2/js/widget_"+ jivo_config.locale+ ".js?rand=1447161939";
        }
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
    },

    changeLang(newLang) {
        this.state.lang !== newLang ? this.setState({lang: newLang}): {};
    },
});

export default FirstBlock;