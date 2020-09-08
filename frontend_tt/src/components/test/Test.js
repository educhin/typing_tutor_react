import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote, fetchQuote } from './quoteSlice'


export const Test = () =>{
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)

    const quoteStatus = useSelector(state => state.quote.status)

    useEffect(() => {
      if (quoteStatus === 'idle') {
        dispatch(fetchQuote())
      }
    }, [quoteStatus, dispatch])

    return (
        <div>
            <h1>Test function goes here.</h1>
            <p id="quoteDisplay" className="quote-display">{quote}</p>
            <textarea id="quoteInput" className="quote-input" autoFocus={true}></textarea>
            <p>WPM: 315 | ACC: 100%</p>
            {console.log(quote)}
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