import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { api } from "./api/api";
import postSlice from "./slice/postSlice";
import commentSlice from "./slice/commentSlice";



const store = configureStore({
    reducer: {
        user: userSlice,
        post: postSlice,
        comment: commentSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})


export default store;
export * from "./slice/userSlice"
export * from "./api/api"
export * from "./slice/commentSlice"



