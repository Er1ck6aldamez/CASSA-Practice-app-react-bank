import { createSlice } from '@reduxjs/toolkit';

export const uiSliceBankAccount = createSlice({
    name: 'uiSliceBankAccount',
    initialState:{
        lstBankAccount:[],
        itemBankAccount:null,

        lstTransferType:[],
    },
    reducers:{

        GetLstBankAccount:(state, {payload}) => {
            state.lstBankAccount = payload
        },
        GetItemBankAccount:(state, {payload}) => {
            state.itemBankAccount = payload
        },
        GetLstTransferType:(state, {payload}) => {
            state.lstTransferType = payload
        },
    }
})
export const {  GetLstBankAccount, GetItemBankAccount, GetLstTransferType  } = uiSliceBankAccount.actions;

