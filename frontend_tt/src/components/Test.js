import React from 'react';

class Test extends React.Component {

    constructor() {
        super()

        this.state = {
            quote: []
        }
    }

    setQuote = (quote) => {
        this.setState({
            quote: quote    
        })
    }
    componentDidMount() {
        fetch('http://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            this.setQuote(data.content)
        })
    }


    render() {
        return (
            <div>
                <h1>Test function goes here.</h1>
                <p id="quoteDisplay" className="quote-display">{this.state.quote}</p>
                <textarea id="quoteBox" className="quote-box" autofocus="true"></textarea>
                <p>WPM: 315 | ACC: 100%</p>
            </div>
        )
    }
}

export default Test;