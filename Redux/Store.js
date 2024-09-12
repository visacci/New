// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Mode"; // Example slice
import thunk from "redux-thunk"; // Only if you're explicitly adding it

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});
