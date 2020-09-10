import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    quote: [],
    status: 'idle',
    error: null
}

const API_URL = 'http://localhost:3000/quotes'

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
    const response = await client.get(API_URL)
    const random = Math.floor(Math.random() * (response.length))
    return response[random].content
  })

  export const addNewQuote = createAsyncThunk(
    'quote/addNewQuote',
    async initialQuote => {
      const response = await client.post(API_URL, { quote: initialQuote })
      console.log(response)
      return response.quote
    }
  )

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchQuote.pending]: (state, action) => {
          state.status = 'pending'
        },
        [fetchQuote.fulfilled]: (state, action) => {
          state.status = 'fulfilled'
          state.quote = state.quote.concat(action.payload)
        },
        [fetchQuote.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        },
        [addNewQuote.fulfilled]: (state, action) => {
          // We can directly add the new post object to our quote array
          state.quote.push(action.meta.arg)
          // console.log(action.meta.arg)
        }
    }
})

export default quoteSlice.reducer

// export const { quoteAdded } = quoteSlice.actions

export const selectQuote = state => state.quote.quote