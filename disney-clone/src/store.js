import {configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import  userReducer  from '../src/Features/User/userSlice';
import movieReducer from '../src/Features/User/movie/movieSlice';

export default configureStore({
    reducer:{
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware ({
        serializableCheck:false,
    }),
});