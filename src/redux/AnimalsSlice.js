import { createSlice } from '@reduxjs/toolkit';
import { data } from '../utils/Data';

const animalsSlice = createSlice({
    name: 'animalsSlice',
    initialState: data,
    reducers: {
        
    }
})



export const {Data} = animalsSlice.actions

export default animalsSlice.reducer