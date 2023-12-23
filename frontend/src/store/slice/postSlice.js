import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addedPost: null,
    recommendedPost:[]
    
}


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {

            state.addedPost = action.payload;

        },
        setRecommended:(state,action)=>{
            state.recommendedPost=action.payload;
        }
    }

})


export default postSlice.reducer;

export const { setPosts,setRecommended } = postSlice.actions; 