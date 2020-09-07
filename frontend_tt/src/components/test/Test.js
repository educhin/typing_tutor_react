import React from 'react';

class Test extends React.Component {

    constructor() {
        super()

        this.state = {
            quote: [], 

        }
    }

    // quoteInputElement = document.getElementById('quoteInput')

    // quoteInputElement.addEventListener('input', () => {
    //     const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    //     const arrayValue = quoteInputElement.value.split('')
      
    //     let correct = true
    //     arrayQuote.forEach((characterSpan, index) => {
    //       const character = arrayValue[index]
    //       if (character == null) {
    //         characterSpan.classList.remove('correct')
    //         characterSpan.classList.remove('incorrect')
    //         correct = false
    //       } else if (character === characterSpan.innerText) {
    //         characterSpan.classList.add('correct')
    //         characterSpan.classList.remove('incorrect')
    //       } else {
    //         characterSpan.classList.remove('correct')
    //         characterSpan.classList.add('incorrect')
    //         correct = false
    //       }
    //     })
      
    //     if (correct) renderNewQuote()
    //   })
      
    // function getRandomQuote() {
    // return fetch(RANDOM_QUOTE_API_URL)
    //     .then(response => response.json())
    //     .then(data => data.content)
    // }


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
                <textarea id="quoteInput" className="quote-input" autofocus="true"></textarea>
                <p>WPM: 315 | ACC: 100%</p>
            </div>
        )
    }
}

export default Test;