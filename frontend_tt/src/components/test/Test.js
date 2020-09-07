import React from 'react';
import { useSelector } from 'react-redux';
// import selectQuote from './quoteSlice'


export const Test = () =>{
    const quote = useSelector(state => state.quote)

    return (
        <div>
            <h1>Test function goes here.</h1>
            <p id="quoteDisplay" className="quote-display">{quote[0].content}</p>
            <textarea id="quoteInput" className="quote-input" autoFocus={true}></textarea>
            <p>WPM: 315 | ACC: 100%</p>
            {console.log(quote.content)}
        </div>
    )
}

export default Test;

// class Test extends React.Component {

//     // constructor() {
//     //     super()

//     //     this.state = {
//     //         quote: [], 

//     //     }
//     // }

//     // setQuote = (quote) => {
//     //     this.setState({
//     //         quote: quote    
//     //     })
//     // }
//     // componentDidMount() {
//     //     fetch('http://api.quotable.io/random')
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         this.setQuote(data.content)
//     //     })
//     // }

//     this.quote = useSelector(selectQuote)

//     render() {
//         return (
//             <div>
//                 <h1>Test function goes here.</h1>
//                 <p id="quoteDisplay" className="quote-display">{this.state.quote}</p>
//                 <textarea id="quoteInput" className="quote-input" autoFocus={true}></textarea>
//                 <p>WPM: 315 | ACC: 100%</p>
//             </div>
//         )
//     }
// }

// export default Test;