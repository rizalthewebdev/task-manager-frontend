import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        value: []
    },
    reducers: {
        allTask: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {allTask} = taskSlice.actions

export default taskSlice.reducer