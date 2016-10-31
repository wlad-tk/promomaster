import React from 'react'

const Section = React.createClass ({
    render() {
        return (
            <div className="section" id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
});

export default Section