import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Reducer/StudentSlice";


export const store = configureStore({
    reducer: {
        student: studentReducer
    },
})