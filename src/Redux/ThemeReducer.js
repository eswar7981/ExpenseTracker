import { createSlice } from "@reduxjs/toolkit"


const initialThemeState={theme:'light'}

const themeSlice=createSlice({
    name:'theme',
    initialState:initialThemeState,
    reducers:{
        isDark(state){
            state.theme='dark'
        },
        isLight(state){
            state.theme='light'
        }
    }
})


export const themeActions=themeSlice.actions

export default themeSlice.reducer