import React from 'react';
import Scroll from 'react-scroll';

var Link    = Scroll.Link;
var Element = Scroll.Element;
var Events  = Scroll.Events;

var Section = React.createClass({
    componentDidMount: function() {

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

    },
    componentWillUnmount: function() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    },
    render: function () {
        return (
            <div>
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >Test 1</Link>
                <Link activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >Test 2</Link>

                <Element name="test1" className="element">
                    test 1
                </Element>

                <Element name="test2" className="element">
                    test 2
                </Element>
            </div>
        );
    }
});

export default Section;