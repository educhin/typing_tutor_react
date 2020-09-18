import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './test.css';
import { selectQuote, fetchQuote } from './quoteSlice';
import { currentTime } from './time'


export const Test = () =>{
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)

    const quoteStatus = useSelector(state => state.quote.status)
    const error = useSelector(state => state.quote.error)

    // const quoteDisplayElement = document.getElementById('quoteDisplay')
    const quoteInputElement = document.getElementById('quoteInput')

    const [startTime, setStartTime] = useState();
    const [charCount, setCharCount] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [input, setInput] = useState("");

    useEffect(() => {
      if (quoteStatus === 'idle') {
        dispatch(fetchQuote())
      } else if (quoteStatus === 'fulfilled') {
        //update later with a new side effect
        setInput("")
      }
    }, [quoteStatus, dispatch])

    // if (quoteStatus === 'pending') {
    //   quoteDisplayElement.innerText = "Loading..."
    //   quoteInputElement.value = "Loading..."

    // } else if (quoteStatus === 'fulfilled') {
    //   quoteDisplayElement.innerText = ''
      // quote[0].split('').forEach(c => {
      //   const charSpan = document.createElement('span')
      //   charSpan.innerText = c
      //   quoteDisplayElement.appendChild(charSpan)
      // })
    //   quoteInputElement.value = null
    // } else if (quoteStatus === 'failed') {
    //   quoteDisplayElement.innerText = error
    //   quoteInputElement.value = error
    // }


    function handleChange(e) {
      setInput(e.target.value)
      // const arrQuote = quoteDisplayElement.querySelectorAll('span')
      // const arrVal = e.target.value.split('')

      // let correct = true

      // arrQuote.forEach((span, i) => {
      //   const c = arrVal[i]
      //   if (c == null) {
      //     span.classList.remove ('correct')
      //     span.classList.remove('incorrect')
      //     correct = false
      //   } else if (c === span.innerText) {
      //     span.classList.add('correct')
      //     span.classList.remove('incorrect')
      //   } else {
      //     span.classList.remove('correct')
      //     span.classList.add('incorrect')
      //     correct = false
      //   }
      // }

      //update this calculation.
      // if (!startTime) {
      //   setStartTime(currentTime());
      // }
      // setCharCount(arrQuote.length)

      // if (correct) {
      //   setWpm(((charCount / 5) / ((currentTime() - startTime) / 60000.0)).toFixed(2));
      // }
    }

    return (
        <div>
            <h1 className="title">Welcome to the Test page!</h1>
            <div className="container">
                <p id="quoteDisplay" className="quote-display">
                  { quoteStatus === 'pending' && "Loading..." }
                  { quoteStatus === 'fulfilled' && quote[0].split('').map((c, i) => {
                  if (i > input.length - 1) { 
                    return <span>{c}</span> 
                  } else if (input[i] === c) {
                    return <span className="correct">{c}</span> 
                   } else if (input[i] !== c){
                    return <span className="incorrect">{c}</span> 
                   }
                  }) }
                  { quoteStatus === 'failed' && "Error" }
                </p>
                <textarea id="quoteInput" className="quote-input" onChange={handleChange} autoFocus={true}>{input}</textarea>
                <div className="stats">
                    <p>WPM: {wpm}</p>
                </div>
            </div>

        </div>
    )
}

export default Test;