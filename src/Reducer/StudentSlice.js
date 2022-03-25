import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchStudents = createAsyncThunk(
    'students/fetchAll',
    async (url, { rejectWithValue }) => {
        try {
            let response = await fetch(url);
            return await response.json()
        } catch (err) {
            return rejectWithValue(err)
        }

    }
)

const initialState = {
    data: [],
}

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchStudents.fulfilled, (state, action) => {

                state.data = action.payload.students.data;

            }).addCase(fetchStudents.rejected, (state, action) => {

                console.log(action.payload)
            })
    }
})

export default studentSlice.reducer