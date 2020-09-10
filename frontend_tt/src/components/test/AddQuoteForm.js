import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import './addQuote.css';

import { addNewQuote } from './quoteSlice'

export const AddQuoteForm = () => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch()

  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setAuthor(e.target.value)

  const canSave =
    [content, author].every(Boolean) && addRequestStatus === 'idle'

  const onSaveQuoteClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          addNewQuote({ content, author })
        )
        unwrapResult(resultAction)
        setContent('')
        setAuthor('')
      } catch (err) {
        console.error('Failed to save the quote: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }


  return (
    <section>
      <h2>Add a New Quote</h2>
      <form>
        <label htmlFor="quoteContent" id="contentLabel" >Content:</label>
        <textarea
          id="quoteContent"
          name="quoteContent"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="quoteAuthor">Quote Author:</label>
        <input
          type="text"
          id="quoteAuthor"
          name="quoteAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        <button type="button" onClick={onSaveQuoteClicked}>Save Quote</button>
      </form>
    </section>
  )
}

export default AddQuoteForm;