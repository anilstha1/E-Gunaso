import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comment: []
}


const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setPostComment: (state, action) => {

            state.comment = action.payload;

        },
        setSingleComment: (state, action) => {
            const newValue = action.payload;

            const insertIndex = 0;
            const newArray = state.comment
                .slice(0, insertIndex)
                .concat(newValue, state.comment.slice(insertIndex));

            state.comment = newArray;
        }
    }

})


export default commentSlice.reducer;

export const { setPostComment, setSingleComment } = commentSlice.actions; 