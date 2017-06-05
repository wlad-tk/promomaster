import React, {PureComponent, PropTypes} from 'react';

import '../../styles/Home.less';
import '../../styles/FirstBlock.less';
import '../../styles/jquery.fullPage.css';

//noinspection JSUnresolvedVariable
import languages from '../../languages.json';

class Home extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Home Page';

    static propTypes = {
        lang: PropTypes.string
    };

    html(sectionid, contant="body" ) {
        let home_translate = languages[this.props.lang].home || {};
        return {__html: home_translate[sectionid] ? home_translate[sectionid][contant] : 'Такого элемента нет в массиве!'}
    };

    componentDidMount() {
        let htmlElem = document;
        htmlElem.title = 'Home';
        htmlElem.documentElement.classList.contains('fp-enabled') ? $(this.refs.Home).fullpage.destroy('all'): {};
        htmlElem.documentElement.className = 'Home';

        $(this.refs.Home).fullpage({
            css3: true,
            navigation: true,
            scrollOverflow: true,
            scrollingSpeed: 1000,
        });
    };

    render() {
        const cont = languages[this.props.lang].section4;

        return (
            <div ref="Home">
                <div className="section active"
                     id="section0"
                     style={{
                         background: 'url('+ require('../../img/backgrounds/home/1-.jpg') + ') no-repeat center',
                         backgroundSize: 'cover'
                     }}>

                    <div className="container-col">
                        <div className="col-1">
                            <img className="logo" src={require('../../img/backgrounds/logo_main.svg')}/>
                        </div>
                        <div className="col-2">
                            <b className="title" dangerouslySetInnerHTML={this.html("section0", "title")}/>
                            <p className="textSection0" dangerouslySetInnerHTML={this.html("section0")}/>
                        </div>
                    </div>
                </div>
                <div className="section"
                     id="section1"
                     style={{
                         background: 'url('+ require('../../img/backgrounds/home/about_5.jpg') + ') no-repeat center',
                         backgroundSize: 'cover'
                     }}>

                    <div className="container-col">
                        <div className="col-1">
                            <p className="textOlso" dangerouslySetInnerHTML={this.html("section1")}/>
                        </div>
                    </div>
                </div>
                <div className="section"
                     id="section2"
                     style={{
                         background: 'url('+ require('../../img/backgrounds/home/DSC_6399.jpg') + ') no-repeat center',
                         backgroundSize: 'cover'
                     }}>

                    <div className="container-col">
                        <div className="col-1">
                            <p className="textOlso" dangerouslySetInnerHTML={this.html("section2")}/>
                        </div>
                    </div>
                </div>
                <div className="section"
                     id="section3"
                     style={{
                         background: 'url('+ require('../../img/backgrounds/home/sh_p_005.jpg') + ') no-repeat center',
                         backgroundSize: 'cover'
                     }}>

                    <div className="container-col">
                        <div className="col-1">
                            <p className="textOlso" dangerouslySetInnerHTML={this.html("section3")}/>
                        </div>
                    </div>
                </div>
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
        )
    }
}
export default Home;