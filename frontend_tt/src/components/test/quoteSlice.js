import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        content: 'Howdy yall!'
    }
]

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        // update: state => {
        //     state.content = 'Updated'
        // }
    }
})

// export const { update } = quoteSlice.actions

export default quoteSlice.reducer