import React from 'react'
import _ from 'lodash';

import '../../styles/HoClDe.less';
import '../../styles/FirstBlock.less';

import '../../styles/jquery.fullPage.css';
import '../../styles/blueimp-gallery.min.css';

//noinspection JSUnresolvedVariable
import languages from '../../languages.json';

const IMAGE = {
    gallery: [
        {
            url: require('../../img/horeca/pm_coffeeme.jpg'),
            title: 'Чашка фарфоровая декорированная \n Изготовлено для Coffee Life'
        },{
            url: require('../../img/horeca/pm_flavours_01.jpg'),
            title: 'Меню ресторана FLAVOURS \n Изготовлено для Four Points by Sheraton Запорожье'
        },{
            url: require('../../img/horeca/pm_grilled_01.jpg'),
            title: 'Меню ресторана THE GRILLED \n Изготовлено для Redisson SAS Resort Алушта'
        },{
            url: require('../../img/horeca/pm_jacobs_01.jpg'),
            title: 'Набор фарфоровой посуды \n Изготовлен для ТМ JACOBS'
        },{
            url: require('../../img/horeca/pm_kaa_01.jpg'),
            title: 'Набор фарфоровой посуды \n Изготовлен для сети L`Kafa Cafe'
        },{
            url: require('../../img/horeca/pm_pinta_01.jpg'),
            title: 'Футболка-поло и декорированные пивные бокалы \n Изготовлено для Pinta Trattoria and Pub'
        },{
            url: require('../../img/horeca/pm_pinta_05.jpg'),
            title: 'Набор фарфоровой посуды \n Изготовлено для Pinta Trattoria and Pub'
        },{
            url: require('../../img/horeca/pm_r_l.jpg'),
            title: 'Меню ресторана RIVER LOUNGE \n Изготовлено для  Four Points by Sheraton Запорожье'
        },{
            url: require('../../img/horeca/pm_supko_01.jpg'),
            title: 'Набор декорированной столовой фарфоровой посуды \n Изготовлен для ресторана Суп & Ко'
        },{
            url: require('../../img/horeca/pm_001.jpg'),
            title: 'Бирдекель ( нем. Bierdeckel) - подставка под пивную кружку'
        },{
            url: require('../../img/horeca/pm_002.jpg'),
            title: 'Переноска для кофе \n Изготовлено для компании Promo-Cup'
        },{
            url: require('../../img/horeca/pm_003.jpg'),
            title: 'Холдер для кофе \n Изготовлено для компании Promo-Cup'
        },{
            url: require('../../img/horeca/pm_006.jpg'),
            title: 'Дорхенгер (Door Hanger) - Табличка на дверь'
        },{
            url: require('../../img/horeca/pm_007.jpg'),
            title: 'Коробка для пиццы \n Изготовлено для Pinta Trattoria and Pub'
        }
    ],
    page: [
        require('../../img/backgrounds/h/h_001.jpg'),
        require('../../img/backgrounds/h/h_002.jpg'),
        require('../../img/backgrounds/h/h_003.jpg'),
        require('../../img/backgrounds/h/h_004.jpg'),
    ],
    logo: require('../../img/backgrounds/logo_main.svg')
};

const Horeca = React.createClass({
    propTypes: {
        lang: React.PropTypes.string,
        cont: React.PropTypes.func
    },

    componentDidMount() {
        let htmlElem = document;
        htmlElem.title = 'HoReCa';
        htmlElem.documentElement.classList.contains('fp-enabled') ? $(this.refs.Horeca).fullpage.destroy('all'): {};
        htmlElem.documentElement.className = 'Horeca';

        $(this.refs.Horeca).fullpage({
            css3: true,
            navigation: true,
            scrollOverflow: true,
            scrollingSpeed: 1000,
        });
    },

    render() {
        const cont = languages[this.props.lang].section4;
        return (
            <div>
                <ul className="gallery">
                    <a onClick={e => blueimp.Gallery($(this.refs.linksImg).find('a'))}>GALLERY</a>
                </ul>
                <div ref='Horeca'>
                    {_.map(IMAGE.page, (value, key) =>
                        <div key={key}
                             className="section"
                             id={"section" + key}
                             style={{
                                 background: 'url('+ value + ') no-repeat center',
                                 backgroundSize: 'cover'
                             }}>

                            <div className="container-col">
                                <div className="col-1">
                                    <img className="logo" src={IMAGE.logo}/>
                                </div>
                                <div className="col-2">
                                    <b className="title" dangerouslySetInnerHTML={this.html("section" + key, "title")}/>
                                    <p className="textOlso" dangerouslySetInnerHTML={this.html("section" + key)}/>
                                </div>
                            </div>
                        </div>)
                    }
                    <div className="section"
                         id="section4"
                         style={{
                             background: 'url('+ require('../../img/backgrounds/promo_works_master.jpg') + ') no-repeat center',
                             backgroundSize: 'cover'
                         }}>

                        <div className="container-col">
                            <div className="col-1">
                                <img className="logo" src={require('../../img/backgrounds/logofoot.svg')}/>
                            </div>
                            <div className="col-1 left">
                                <p dangerouslySetInnerHTML={{__html: cont.title}}/>
                            </div>
                            <div className="col-3">
                                <p dangerouslySetInnerHTML={{__html: cont.body}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="linksImg">
                    {_.map(IMAGE.gallery, (value, key) =>
                        <a key={key}
                           href={value.url}
                           title={value.title}
                        />)
                    }
                </div>

                <div id="blueimp-gallery" className='blueimp-gallery blueimp-gallery-controls'>
                    <div className='slides'></div>
                    <pre className='title'/>
                    <p className="description"/>
                    <a className='prev'>‹</a>
                    <a className='next'>›</a>
                    <a className='close'>×</a>
                    <a className='play-pause'/>
                    <ol className='indicator'/>
                </div>
            </div>
        )
    },

    html(sectionid, contant="body" ) {
        let home_translate = languages[this.props.lang].horeca || {};
        return {__html: home_translate[sectionid] ? home_translate[sectionid][contant] : 'Такого элемента нет в массиве!'}
    },

    sectionLink(sectionlinkid) {
        $(this.refs.Horeca).fullpage.moveTo(sectionlinkid);
    }
});

export default Horeca;