import { createSlice } from '@reduxjs/toolkit';

export const uiSliceBankAccount = createSlice({
    name: 'uiSliceBankAccount',
    initialState:{
        lstBankAccount:[],
        itemBankAccount:null
    },
    reducers:{

        GetLstBankAccount:(state,{payload}) =>{
            state.lstBankAccount = payload
        },
        GetItemBankAccount:(state,{payload}) =>{
            state.itemBankAccount = payload
        },
    }
})
export const {  GetLstBankAccount, GetItemBankAccount  } = uiSliceBankAccount.actions;

