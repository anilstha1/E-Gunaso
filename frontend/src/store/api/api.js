import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints(builder) {
        return {
            registerUser: builder.mutation({
                query: (formData) => {
                    return {
                        url: '/users/signup',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: formData
                    }
                }
            }),
            getUser: builder.query({
                query: (token) => {
                    return {
                        url: '/users/get',
                        method: "GET",
                        headers: {
                            'auth-token': token
                        }
                    }
                }
            }),
            loginUser: builder.mutation({
                query: (formData) => {
                    return {
                        url: '/users/login',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: formData
                    }
                }
            }),

            getPosts: builder.query({
                query: () => {
                    return {
                        url: '/posts/getAllPosts',
                        method: "GET",

                    }
                }
            }),

            postLikes: builder.mutation({
                query: ({ postId, token }) => {
                    return {
                        url: `/posts/updateLike/${postId}`,
                        headers: {
                            'auth-token': token
                        },
                        method: "PUT"

                    }
                }
            }),
            postDikes: builder.mutation({
                query: ({ postId, token }) => {
                    return {
                        url: `/posts/updateDislike/${postId}`,
                        headers: {
                            'auth-token': token
                        },
                        method: "PUT"

                    }
                }
            }),
            addPost: builder.mutation({
                query: ({ formData, token }) => {
                    return {
                        url: '/posts/add',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'auth-token': token

                        },
                        body: formData
                    }
                }
            }),

            getPost: builder.query({
                query: (postId) => {
                    return {
                        url: `/posts/getPost/${postId}`,
                        method: "GET",

                    }
                }
            }),
            getPostComment: builder.query({
                query: (postId) => {
                    return {
                        url: `/comments/get/${postId}`,
                        method: "GET",

                    }
                }
            }),
            addPostComment: builder.mutation({
                query: ({ formData, token }) => {
                    return {
                        url: '/comments/add',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'auth-token': token

                        },
                        body: formData
                    }
                }
            }),
            searchGunaso: builder.query({
                query: (query) => {
                    return {
                        url: `/posts/searchPost?search=${query}`,
                        method: "GET",

                    }
                }
            }),
            getTrendingPost: builder.query({
                query: (query) => {
                    return {
                        url: `/posts/trending`,
                        method: "GET"
                    }
                }
            })

        }
    }
})

export const { useGetUserQuery, useLoginUserMutation, useRegisterUserMutation, useGetPostsQuery, usePostLikesMutation, useAddPostMutation, useGetPostQuery, useGetPostCommentQuery, useAddPostCommentMutation, useSearchGunasoQuery, usePostDikesMutation, useGetTrendingPostQuery } = api;