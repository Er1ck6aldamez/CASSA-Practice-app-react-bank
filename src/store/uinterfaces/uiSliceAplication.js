import { createSlice } from '@reduxjs/toolkit';

export const uiSliceAplication = createSlice({
    name: 'uiSliceAplication',
    initialState:{
        loading: true,
        modalIsOpen:false
    },
    reducers:{
        Loading:(state,{payload}) =>{
            state.loading = true
        },
        LoadDone:(state,{payload}) =>{
            state.loading = false
        },
        OpenModal:(state,{payload}) =>{
            state.modalIsOpen = true
        },
        CloseModal:(state,{payload}) =>{
            state.modalIsOpen = false
        },
    }
})
export const {
    Loading,
    LoadDone,
    CloseModal,
    OpenModal
} = uiSliceAplication.actions;

