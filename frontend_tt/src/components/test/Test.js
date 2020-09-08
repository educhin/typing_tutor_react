import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './test.css';
import { selectQuote, fetchQuote } from './quoteSlice'


export const Test = () =>{
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)

    const quoteStatus = useSelector(state => state.quote.status)
    const error = useSelector(state => state.quote.error)


    useEffect(() => {
      if (quoteStatus === 'idle') {
        dispatch(fetchQuote())
      }
    }, [quoteStatus, dispatch])

    let content

    if (quoteStatus === 'pending') {
      content = "Loading..."
    } else if (quoteStatus === 'fulfilled') {
      content = quote
    } else if (quoteStatus === 'failed') {
      content = error
    }

    return (
        <div>
            <h1>Test function goes here.</h1>
            <p id="quoteDisplay" className="quote-display">{content}</p>
            <textarea id="quoteInput" className="quote-input" autoFocus={true}></textarea>
            <p>WPM: 315 | ACC: 100%</p>
            {console.log(quote)}
        </div>
    )
}

export default Test;