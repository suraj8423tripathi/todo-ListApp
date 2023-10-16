import { configureStore } from "@reduxjs/toolkit";
import bodyReducer from "./bodySlice";

const appStore = configureStore({
   reducer : {
     body: bodyReducer
   }, 
});

export default appStore;