import { createSlice, PayloadAction } from "@reduxjs/toolkit";




const initialState: InitialState2 = {

    b: {
        blogs: [],
        loading: true,
        val: "",
        su: false,
    }, c: {
        Loading: true,
        data: false,
        user: {
            blogs: [],
            Likes: [],
            Followers: [],
            Following: [],
            name: "",
            id: 0,
            img: "",
            data: 0
        }
    }

};

const todoSlice = createSlice({
    name: "Bl",
    initialState,
    reducers: {
        setBlogs: (state, action: PayloadAction<InitialState>) => {
            state.b.blogs = action.payload.blogs
            state.b.loading = action.payload.loading
            state.b.val = action.payload.val
            state.b.su=action.payload.su
        },
        setLoading: (state, action: PayloadAction<Info2>) => {
            state.c.user = action.payload.user
            state.c.Loading = action.payload.Loading
            state.c.data = action.payload.data
        },
        setVal: (state, action: PayloadAction<boolean>) => {
            state.c.data = action.payload
        },
        setDal: (state, action: PayloadAction<blogs[]>) => {
            state.b.blogs = action.payload
        },
        setInc: (state, action: PayloadAction<number>) => {
            state.c.user.Followers.length += action.payload
        },
        setDnc: (state, action: PayloadAction<number>) => {
            state.c.user.Followers.length -= action.payload
        }
    }
});

// Export the actions and reducer
export const { setBlogs, setLoading, setVal, setDal, setDnc, setInc } = todoSlice.actions;
export default todoSlice.reducer;





