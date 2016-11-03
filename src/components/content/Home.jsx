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

    getInitialState() {
        return {languages}
    },

    render() {
        const cont = this.state.languages[this.props.lang].home;
        const html = {__html: cont.section0.body};

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
                            <p className="body" dangerouslySetInnerHTML={html}/>
                        </div>
                    </div>
                </Section>
                <Section id="section1">
                    <h2>
                        This is messages application
                    </h2>

                    <div>
                        <p>Etiam imperdiet imperdiet orci. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Praesent egestas tristique nibh. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti.</p>

                        <p>Fusce commodo aliquam arcu. Sed fringilla mauris sit amet nibh. Curabitur ullamcorper ultricies nisi. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>

                        <p>Nam eget dui. In hac habitasse platea dictumst. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Quisque ut nisi. Duis leo.</p>

                        <p>Cras varius. Donec vitae sapien ut libero venenatis faucibus. Etiam ultricies nisi vel augue. In consectetuer turpis ut velit. Nam at tortor in tellus interdum sagittis.</p>

                        <p>Nunc sed turpis. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla porta dolor.</p>
                    </div>
                </Section>
                <Section id="section2">
                    <h2>
                        This is messages application
                    </h2>

                    <div>
                        <p>Etiam imperdiet imperdiet orci. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Praesent egestas tristique nibh. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti.</p>

                        <p>Fusce commodo aliquam arcu. Sed fringilla mauris sit amet nibh. Curabitur ullamcorper ultricies nisi. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>

                        <p>Nam eget dui. In hac habitasse platea dictumst. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Quisque ut nisi. Duis leo.</p>

                        <p>Cras varius. Donec vitae sapien ut libero venenatis faucibus. Etiam ultricies nisi vel augue. In consectetuer turpis ut velit. Nam at tortor in tellus interdum sagittis.</p>

                        <p>Nunc sed turpis. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla porta dolor.</p>
                    </div>
                </Section>
                <Section id="section3">
                    <h2>
                        This is messages application
                    </h2>

                    <div>
                        <p>Etiam imperdiet imperdiet orci. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Praesent egestas tristique nibh. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti.</p>

                        <p>Fusce commodo aliquam arcu. Sed fringilla mauris sit amet nibh. Curabitur ullamcorper ultricies nisi. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>

                        <p>Nam eget dui. In hac habitasse platea dictumst. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Quisque ut nisi. Duis leo.</p>

                        <p>Cras varius. Donec vitae sapien ut libero venenatis faucibus. Etiam ultricies nisi vel augue. In consectetuer turpis ut velit. Nam at tortor in tellus interdum sagittis.</p>

                        <p>Nunc sed turpis. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla porta dolor.</p>
                    </div>
                </Section>
                <Section id="section4">
                    <h2>
                        This is messages application
                    </h2>

                    <div>
                        <p>Etiam imperdiet imperdiet orci. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Praesent egestas tristique nibh. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti.</p>

                        <p>Fusce commodo aliquam arcu. Sed fringilla mauris sit amet nibh. Curabitur ullamcorper ultricies nisi. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>

                        <p>Nam eget dui. In hac habitasse platea dictumst. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Quisque ut nisi. Duis leo.</p>

                        <p>Cras varius. Donec vitae sapien ut libero venenatis faucibus. Etiam ultricies nisi vel augue. In consectetuer turpis ut velit. Nam at tortor in tellus interdum sagittis.</p>

                        <p>Nunc sed turpis. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla porta dolor.</p>
                    </div>
                </Section>
            </div>
        )
    }
});

export default Home;