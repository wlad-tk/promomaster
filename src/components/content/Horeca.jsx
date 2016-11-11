import React from 'react'
// import Section from './Section1.jsx'

import '../../styles/Horeca.less';
import '../../styles/FirstBlock.less';
import '../../styles/jquery.fullPage.css';

//noinspection JSUnresolvedVariable
import languages from '../../languages.json';

const Horeca = React.createClass({
    propTypes: {
        lang: React.PropTypes.string,
        cont: React.PropTypes.func

    },

    html(sectionid, contant="body" ) {
        let home_translate = languages[this.props.lang].home || {};
        return {__html: home_translate[sectionid] ? home_translate[sectionid][contant] : 'Такого элемента нет в массиве!'}
    },

    sectionLink(sectionlinkid) {
        return $.fn.fullpage.moveTo(sectionlinkid);
    },

    componentDidMount() {
        let htmlElem = document.documentElement;

        htmlElem.classList.contains('fp-enabled') ? $.fn.fullpage.destroy('all'): {};
        htmlElem.className = 'Horeca';

        $('#Horeca').fullpage({
            css3: true,
            navigation: true,
            scrollOverflow: true,
            scrollingSpeed: 1000,
        });
    },

    render() {
        const cont = languages[this.props.lang].home || {};
        return (
        <div id="Horeca">
            <div className="section active"
                 id="section0"
                 style={{
                     background: 'url('+ require('../../img/backgrounds/h/h_001.jpg') + ') no-repeat center',
                     backgroundSize: 'cover'
                 }}>

                <div className="container-col">
                    <div className="col-1">
                        <img className="logo" src={require('../../img/backgrounds/logo_main.svg')}/>
                    </div>
                    <div className="col-2">
                        <b className="title">{cont.section0.title}</b><br/>
                        <p className="textSection0" dangerouslySetInnerHTML={this.html("section0")}/>
                    </div>
                </div>
            </div>
            <div className="section"
                 id="section1"
                 style={{
                     background: 'url('+ require('../../img/backgrounds/h/h_002.jpg') + ') no-repeat center',
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
                     background: 'url('+ require('../../img/backgrounds/h/h_003.jpg') + ') no-repeat center',
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
                     background: 'url('+ require('../../img/backgrounds/h/h_004.jpg') + ') no-repeat center',
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
                        <p dangerouslySetInnerHTML={this.html("section4", "title")}/>
                    </div>
                    <div className="col-3">
                        <p dangerouslySetInnerHTML={this.html("section4")}/>
                    </div>
                </div>
            </div>
        </div>

            // <div>
            //     <Section id='section0' imageUrl={require('../../img/backgrounds/h/h_001.jpg')}>
            //         <div className="container-col">
            //             {/*<div style={{width: "10%", height: "20%"}} onClick={e => $.fn.fullpage.moveTo(4)}>Click Me</div>*/}
            //             <div className="col-1">
            //                 <img className="logo" src={require('../../img/backgrounds/logo_main.svg')}/>
            //             </div>
            //             <div className="col-2">
            //                 <b className="title">{cont.section0.title}</b><br/>
            //                 <p className="textSection0" dangerouslySetInnerHTML={this.html("section0")}/>
            //             </div>
            //         </div>
            //     </Section>
            //     <Section id="section1" imageUrl={require('../../img/backgrounds/h/h_002.jpg')}>
            //         <div className="container-col">
            //             <div className="col-1">
            //                 <p className="textOlso" dangerouslySetInnerHTML={this.html("section1")}/>
            //             </div>
            //         </div>
            //     </Section>
            //     <Section id="section2" imageUrl={require('../../img/backgrounds/h/h_003.jpg')}>
            //         <div className="container-col">
            //             <div className="col-1">
            //                 <p className="textOlso" dangerouslySetInnerHTML={this.html("section2")}/>
            //             </div>
            //         </div>
            //     </Section>
            //     <Section id="section3" imageUrl={require('../../img/backgrounds/h/h_004.jpg')}>
            //         <div className="container-col">
            //             <div className="col-1">
            //                 <p className="textOlso" dangerouslySetInnerHTML={this.html("section3")}/>
            //             </div>
            //         </div>
            //     </Section>
            //     <Section id="section4" imageUrl={require('../../img/backgrounds/promo_works_master.jpg')}>
            //         <div className="container-col">
            //             <div className="col-1">
            //                 <img className="logo" src={require('../../img/backgrounds/logofoot.svg')}/>
            //             </div>
            //             <div className="col-1 left">
            //                 <p dangerouslySetInnerHTML={this.html("section4", "title")}/>
            //             </div>
            //             <div className="col-3">
            //                 <p dangerouslySetInnerHTML={this.html("section4")}/>
            //             </div>
            //         </div>
            //     </Section>
            // </div>
        )
    }
});

export default Horeca;