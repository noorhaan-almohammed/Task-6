import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './../slice/theme'
import blogReducer from './../slice/index'

const store = configureStore({reducer : { blogs : blogReducer ,  theme: themeReducer,}})

export default store
