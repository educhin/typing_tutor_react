import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    quote: [],
    status: 'idle',
    error: null
}

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        // update: state => {
        //     state.content = 'Updated'
        // }
    }
})
export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
    const response = await client.get('http://api.quotable.io/random')
    return response.quote
  })
// export const { update } = quoteSlice.actions

export default quoteSlice.reducer

export const selectQuote = state => state.quote.quote