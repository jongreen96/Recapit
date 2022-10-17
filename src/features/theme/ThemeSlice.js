import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkmode: false,
    },
    reducers: {
        setDarkmode: (state) => {
            state.darkmode = !state.darkmode;
        },
    },
});

export const { setDarkmode } = themeSlice.actions;
export default themeSlice.reducer;