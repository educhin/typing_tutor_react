import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    quote: [],
    status: 'idle',
    error: null
}

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
    const API_URL = 'http://api.quotable.io/random'
    const response = await client.get(API_URL)
    return response.content
  })

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
        }
    }
})

export default quoteSlice.reducer

export const selectQuote = state => state.quote.quote