import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    blogPosts: [],
    blogPost: null,
    loading: false,
    error: null,
    pageItems: 0,
    status: 200,
    updateButtonLoading: false,
    blogPostCreated: false,
    blogPostUpdated: false,
    blogPostRemoved: false
}

export const blogPostSlice = createSlice({
    name: 'blogPosts',
    initialState,
    reducers: {
        setLoading: (state, { paylod }) => {
            state.loading = paylod
        },
        setBlogPostByCategory: (state, { paylod }) => {
            state.blogPosts = paylod
            state.loading = false
            state.error = null
        },
        setBlogPost: (state, { paylod }) => {
            state.blogPost = paylod
            state.loading = false
            state.error = null
        },
        blogPostUpdate: (state, { paylod }) => {
            state.blogPostUpdated = paylod
            state.loading = false
            state.error = null
        },
        blogPostCreated: (state, { paylod }) => {
            state.blogPostCreated = paylod
            state.loading = false
            state.error = null
        },
        blogPostRemoved: (state, { paylod }) => {
            state.blogPostRemoved = paylod
            state.loading = false
            state.error = null
        },
        setUpdateButtonLoading: (state, { paylod }) => {
            state.updateButtonLoading = paylod
            state.loading = false
            state.error = null
        },
        setError: (state, { paylod }) => {
            state.error = paylod
            state.loading = false
            state.buttonLoading = false
        }
    }
});

export const { setLoading, setBlogPost, setBlogPostByCategory, setError, blogPostCreated, blogPostRemoved, blogPostUpdate } = blogPostSlice.actions;
export default blogPostSlice.reducer;

export const blogPostSelector = (state) => state.blogPosts;