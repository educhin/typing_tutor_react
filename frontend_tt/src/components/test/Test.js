import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './test.css';
import { selectQuote, fetchQuote } from './quoteSlice'


export const Test = () =>{
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)

    const quoteStatus = useSelector(state => state.quote.status)
    const error = useSelector(state => state.quote.error)

    const quoteDisplayElement = document.getElementById('quoteDisplay')
    const quoteInputElement = document.getElementById('quoteInput')


    useEffect(() => {
      if (quoteStatus === 'idle') {
        dispatch(fetchQuote())
      }
    }, [quoteStatus, dispatch])

    // let content

    if (quoteStatus === 'pending') {
      quoteDisplayElement.innerText = "Loading..."
      quoteInputElement.value = "Loading..."

    } else if (quoteStatus === 'fulfilled') {
      // content = quote
      quoteDisplayElement.innerText = ''
      quote[0].split('').forEach(c => {
        const charSpan = document.createElement('span')
        charSpan.innerText = c
        quoteDisplayElement.appendChild(charSpan)
      })
      // console.log(quote[0])
      quoteInputElement.value = null
    } else if (quoteStatus === 'failed') {
      quoteDisplayElement.innerText = error
      quoteInputElement.value = error

    }

    function handleChange(e) {
      console.log(e.target.value)
    }

    return (
        <div>
            <h1 className="title">Welcome to the test page!</h1>
            <div className="container">
                <p id="quoteDisplay" className="quote-display"></p>
                <textarea id="quoteInput" className="quote-input" onChange={handleChange} autoFocus={true}>Failed to fetch, there</textarea>
                <div className="stats">
                    <p>WPM: 315 | ACC: 100%</p>
                </div>
                {/* {console.log(quote)} */}
            </div>

        </div>
    )
}

export default Test;