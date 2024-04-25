import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.theme);
        }
    }

})
console.log(themeSlice.reducer);

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
