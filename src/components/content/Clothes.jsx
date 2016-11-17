import React from 'react'
import _ from 'underscore';

import '../../styles/HoClDe.less';
import '../../styles/FirstBlock.less';

import '../../styles/jquery.fullPage.css';
import '../../styles/blueimp-gallery.min.css';

//noinspection JSUnresolvedVariable
import languages from '../../languages.json';

const IMAGE = {
    gallery: [
        {
            url: require('../../img/clothes/pm_1c_01.jpg'),
            title: 'Реглан \n Флис , футер, двунитка \n Изготовлено для 1с предприятия по заказу Business Tuning Center'
        },{
            url: require('../../img/clothes/pm_coffeemen.jpg'),
            title: 'Утепленный костюм (полукомбинезон и куртка) \n Ткань плащевая «Гретта», синтепон \n Изготовлено для компании Promo-Cup'
        },{
            url: require('../../img/clothes/promo_014.jpg'),
            title: 'Техники нанесения логотипов - машинная вышивка и прямая шелкотрафаретная печать'
        },{
            url: require('../../img/clothes/pm_life_01.jpg'),
            title: 'Промо-костюм, ветровка \n Габардин, болонья «Силвер» \n Изготовлено для компании Life по заказу Business Tuning Center'
        },{
            url: require('../../img/clothes/pm_mc_ds_01.jpg'),
            title: 'Костюм трикотажный ( Футболка-поло, юбка, шорты) \n Трикотажное полотно «Лакоста» 100% хлопок \n Изготовлено для компании McDonald`s по заказу Business Tuning Center'
        },{
            url: require('../../img/clothes/pm_microsoft_01.jpg'),
            title: 'Футболка-поло \n Трикотажное полотно «Лакоста» 100% хлопок \n Изготовлено для компании Microsoft по заказу Business Tuning Center'
        },{
            url: require('../../img/clothes/promo_010.jpg'),
            title: 'Фартук, юбка-фартук, костюм бармена \n Трикотажное полотно «Лакоста» 100% хлопок \n Изготовлено для Pinta Trattoria and Pub'
        },{
            url: require('../../img/clothes/pm_mts_01.jpg'),
            title: 'Костюм трикотажный ( Футболка-поло, юбка, шорты) \n Трикотажное полотно «Лакоста» 100% хлопок \n Изготовлено для компании MTC по заказу Business Tuning Center'
        },{
            url: require('../../img/clothes/pm_nes_ars_01.jpg'),
            title: 'Платья для хостес \n Трикотажное полотно «Лакоста» 100% хлопок \n Изготовлено по заказу «СК Арсенал и Business Tuning Centr'
        },{
            url: require('../../img/clothes/promo_odezh_02.jpg'),
            title: 'Детские трикотажные футболки \n Трикотажное полотно «Лакоста» 100% хлопок'
        },{
            url: require('../../img/clothes/promo_odezh_03.jpg'),
            title: 'Костюм для горничной и охранника \n Трикотажное полотно с эластаном и смесовой ткани \n Изготовлено для «Azov le Chalet»'
        },{
            url: require('../../img/clothes/promo_odezh_04.jpg'),
            title: 'Костюм для шеф-повара \n Смесовая ткань 65% полиэстр и 35 х/б \n Изготовлено для «Azov le Chalet»'
        },{
            url: require('../../img/clothes/promo_odezh_06.jpg'),
            title: 'Футболка - трикотажное полотно с эластаном \n Изготовлено для телеканала 1+1 по заказу Havas Engage Ukraine'
        },{
            url: require('../../img/clothes/promo_odezh_07.jpg'),
            title: 'Футболка - трикотажное полотно «Кулир» 100% хлопок \n Изготовлено для PepsiCo по заказу Фри Бренд'
        }
    ],
    page: [
        {
            background: require('../../img/backgrounds/c/o_001.jpg'),
            logo: require('../../img/backgrounds/logo_main.svg'),
        },{
            background: require('../../img/backgrounds/c/o_002.jpg'),
            logo: require('../../img/backgrounds/logo_main.svg'),
        },{
            background: require('../../img/backgrounds/c/o_003.jpg'),
            logo: require('../../img/backgrounds/logo_main.svg'),
        },{
            background: require('../../img/backgrounds/c/o_004.jpg'),
            logo: require('../../img/backgrounds/logo_main.svg'),
        }
    ]
};

const Clothes = React.createClass({
    propTypes: {
        lang: React.PropTypes.string,
        cont: React.PropTypes.func
    },

    html(sectionid, contant="body" ) {
        let home_translate = languages[this.props.lang].clothes || {};
        return {__html: home_translate[sectionid] ? home_translate[sectionid][contant] : 'Такого элемента нет в массиве!'}
    },

    sectionLink(sectionlinkid) {
        $(this.refs.Clothes).fullpage.moveTo(sectionlinkid);
    },

    componentDidMount() {
        let htmlElem = document;
        htmlElem.title = 'Clothes';
        htmlElem.documentElement.classList.contains('fp-enabled') ? $(this.refs.Clothes).fullpage.destroy('all'): {};
        htmlElem.documentElement.className = 'Clothes';

        $(this.refs.Clothes).fullpage({
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
                <div ref='Clothes'>
                    {_.map(IMAGE.page, (value, key) =>
                        <div key={key}
                             className="section"
                             id={"section" + key}
                             style={{
                                 background: 'url('+ value.background + ') no-repeat center',
                                 backgroundSize: 'cover'
                             }}>

                            <div className="container-col">
                                <div className="col-1">
                                    <img className="logo" src={value.logo}/>
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
    }
});

export default Clothes;