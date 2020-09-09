import React, { useState } from 'react'

export const AddQuoteForm = () => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setAuthor(e.target.value)


  return (
    <section>
      <h2>Add a New Quote</h2>
      <form>
        <label htmlFor="quoteContent">Content:</label>
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
        <button type="button">Save Quote</button>
      </form>
    </section>
  )
}

export default AddQuoteForm;