import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    status: false,
    user: null

}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setStatus: (state, action) => {
            state.status = true;
        },
        removeToken: (state) => {
            state.token = null;
        },
        removeStatus: (state) => {
            state.status = false;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
        setTokenInLocalStorage: (state, action) => {
            localStorage.setItem("token", JSON.stringify(state.token));
        },
        removeTokenInLocalStorage: (state, action) => {
            localStorage.removeItem("token");
        }



    }
})


export default userSlice.reducer;
export const { setStatus, setToken, removeToken, removeStatus, setUser, removeUser, setTokenInLocalStorage, removeTokenInLocalStorage } = userSlice.actions;