import { configureStore } from '@reduxjs/toolkit'
import { uiSliceAplication } from './uinterfaces/uiSliceAplication';
import { uiSliceBankAccount } from './uinterfaces/uiSliceBankAccount';

export const store = configureStore({
    reducer:{
        uiSliceAplication:uiSliceAplication.reducer,
        uiSliceBankAccount:uiSliceBankAccount.reducer,
    }
});