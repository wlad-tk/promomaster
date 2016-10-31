import React from 'react'

import Nav from './header/nav.jsx';

const FirstBlock = React.createClass({
    componentDidMount() {
        $('#contantpage').fullpage({
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            scrollOverflow: true,
            scrollingSpeed: 1000,
        });
    },
    render() {
        return (
            <div>
                <Nav/>
                <div id='contantpage'>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default FirstBlock;