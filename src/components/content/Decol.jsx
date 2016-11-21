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
            url: require('../../img/decol/ceramique_01.jpg'),
            title: 'Декорированная фарфоровая тарелка \n Изготовлено по заказу А-Групп для компании NOVARTIS'
        },{
            url: require('../../img/decol/cup_ceramique_01.jpg'),
            title: 'Декорированная фарфоровая чашка \n Изготовлено по заказу компании Галерея Стекла и Фарфора'
        },{
            url: require('../../img/decol/pm_004.jpg'),
            title: 'Декорированная термо-кружка \n Изготовлено по заказу А-Групп для компании KYIVSTAR'
        },{
            url: require('../../img/decol/cup_glass_01.jpg'),
            title: 'Декорированная стеклянная чашка \n Изготовлено по заказу компании Галерея Стекла и Фарфора'
        },{
            url: require('../../img/decol/cup_glass_05.jpg'),
            title: 'Декорированная стеклянная чашка \n Изготовлено по заказу компании Галерея Стекла и Фарфора'
        },{
            url: require('../../img/decol/cup_glass_06.jpg'),
            title: 'Декорированная стеклянная чашка \n Изготовлено по заказу RADISSON BLU KYIV PODIL'
        },{
            url: require('../../img/decol/cup_pack_01.jpg'),
            title: 'Декорированная фарфоровая чашка в индивидуальной упаковке \n Изготовлено по заказу компании Галерея Стекла и Фарфора'
        },{
            url: require('../../img/decol/cup_pack_02.jpg'),
            title: 'Декорированная фарфоровая чашка в индивидуальной упаковке \n Изготовлено по заказу компании Галерея Стекла и Фарфора'
        },{
            url: require('../../img/decol/glass_005.jpg'),
            title: 'Образец декорации питьевой посуды'
        },{
            url: require('../../img/decol/glass_006.jpg'),
            title: 'Образец декорации коньячных бокалов'
        },{
            url: require('../../img/decol/glass_007.jpg'),
            title: 'Образец декорации кружек для глинтвейна'
        },{
            url: require('../../img/decol/holder_ceramique.jpg'),
            title: 'Образец декорации сувенирной продукции'
        },{
            url: require('../../img/decol/pm_005.jpg'),
            title: 'Декорированная фарфоровая чашка \n Изготовлено по заказу А-Групп для компании KYIVSTAR'
        }
    ],
    page: [
        require('../../img/backgrounds/d/d_001.jpg'),
        require('../../img/backgrounds/d/d_002.jpg'),
        require('../../img/backgrounds/d/d_003.jpg'),
        require('../../img/backgrounds/d/d_004.jpg')
    ],
    logo: require('../../img/backgrounds/logo_main.svg')
};

const Decol = React.createClass({
    propTypes: {
        lang: React.PropTypes.string,
        cont: React.PropTypes.func
    },

    componentDidMount() {
        let htmlElem = document;
        htmlElem.title = 'Decol';
        htmlElem.documentElement.classList.contains('fp-enabled') ? $(this.refs.Decol).fullpage.destroy('all'): {};
        htmlElem.documentElement.className = 'Decol';

        $(this.refs.Decol).fullpage({
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
                <div ref='Decol'>
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
        let home_translate = languages[this.props.lang].decol || {};
        return {__html: home_translate[sectionid] ? home_translate[sectionid][contant] : 'Такого элемента нет в массиве!'}
    },

    sectionLink(sectionlinkid) {
        $(this.refs.Decol).fullpage.moveTo(sectionlinkid);
    }
});

export default Decol;