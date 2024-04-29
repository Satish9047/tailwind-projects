import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

const rootReducer = combineReducers({
    theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
});