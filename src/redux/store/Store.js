import { configureStore } from "@reduxjs/toolkit";
import animalsSliceReducer from '../AnimalsSlice'

export default configureStore({
     reducer: {
      animalsSlice: animalsSliceReducer,
     }
})

