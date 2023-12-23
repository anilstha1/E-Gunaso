import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addedPost: null
}


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {

            state.addedPost = action.payload;

        }
    }

})


export default postSlice.reducer;

export const { setPosts } = postSlice.actions; 