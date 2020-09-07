import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        name: 'Ogun',
        position: 1,
        wpm: 315,
        acc: 100
    }
]

export const scoresSlice = createSlice({
    name: 'scores',
    initialState,
    reducers: {

    }
})

export default scoresSlice.reducer