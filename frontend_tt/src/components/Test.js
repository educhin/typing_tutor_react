import React from 'react';

class Test extends React.Component {
    render() {
        return (
            <div>
                <h1>Test function goes here.</h1>
                <p id="quote-display" className="quoteDisplay">Type this text in the text area below</p>
                <textarea id="quote-display" className="quoteBox" autofocus="true"></textarea>

            </div>
        )
    }
}

export default Test;