import React from 'react'

import Section from './Section.jsx'

import '../../styles/Home.less';
import '../../styles/FirstBlock.less';

//noinspection JSUnresolvedVariable
import languages from '../../languages.json';

const Home = React.createClass({
    propTypes: {
        lang: React.PropTypes.string
    },

    html(sectionid) {
        let home_translate = languages[this.props.lang].home || {};
        return {__html: home_translate[sectionid] ? home_translate[sectionid].body : 'Такого элемента нет в массиве!'}
    },

    render() {
        const cont = languages[this.props.lang].home || {};
        return (
            <div>
                <Section id='section0'>
                    <div className="container-col">
                        {/*<div style={{width: "10%", height: "20%"}} onClick={e => this.props.qaz("en")}>Click Me</div>*/}
                        <div className="col-1">
                            <img className="logo" src={require('../../img/logo_main.svg')}/>
                        </div>
                        <div className="col-2">
                            <b className="title">{cont.section0.title}</b><br/>
                            <p className="textSection0" dangerouslySetInnerHTML={this.html("section0")}/>
                        </div>
                    </div>
                </Section>
                <Section id="section1">
                    <div className="container-col">
                        <div className="col-1">
                            <p className="textOlso" dangerouslySetInnerHTML={this.html("section1")}/>
                        </div>
                    </div>
                </Section>
                <Section id="section2">
                    <div className="container-col">
                        <div className="col-1">
                            <p className="textOlso" dangerouslySetInnerHTML={this.html("section2")}/>
                        </div>
                    </div>
                </Section>
                <Section id="section3">
                    <div className="container-col">
                        <div className="col-1">
                            <p className="textOlso" dangerouslySetInnerHTML={this.html("section3")}/>
                        </div>
                    </div>
                </Section>
                <Section id="section4">
                    <div className="container-col">
                        <div className="col-1">
                            <img className="logo" src={require('../../img/logofoot.svg')}/>
                        </div>
                        <div className="col-1" style={{textAlign: "left"}}>
                            <p>Украина<br/>
                                69076<br/>
                                Запорожье<br/>
                                ул. Жукова, 9</p>
                        </div>
                        <div className="col-3">
                            <p className="textOlso" dangerouslySetInnerHTML={this.html("section4")}/>
                        </div>
                    </div>
                </Section>
            </div>
        )
    }
});

export default Home;