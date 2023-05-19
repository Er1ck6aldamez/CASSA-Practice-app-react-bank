import { useDispatch, useSelector } from "react-redux";
import { GetLstBankAccount, GetItemBankAccount } from "../../store/uinterfaces/uiSliceBankAccount";
import { conectionApi } from "../../api/ConnectionApi";
import { useSliceAplication } from "./useSliceAplication";

export const useSliceBankAccount = () => {
    const { onLoading, onLoadDone } = useSliceAplication();
    const dispatch = useDispatch(); //notificar cambios
    const propsBankAccount = useSelector((state) => state.uiSliceBankAccount); //get propiedades genrales del slice

    const onGetLstBankAccount = async () => {
        try {
            debugger
            dispatch(onLoading);
            const { data } = await conectionApi.get('BankAccount/');
            dispatch(GetLstBankAccount(data));
            dispatch(onLoadDone);
        } catch (error) {
            dispatch(GetLstBankAccount([]));
            dispatch(onLoadDone());
        }
    }

    const onGetItemBankAccount = async ( id ) => {
        try {
            dispatch(onLoading());
            const { data } = await conectionApi.get(`BankAccount/${id}`);
            dispatch(GetItemBankAccount(data));
            dispatch(onLoadDone());
        } catch (error) {
            dispatch(GetItemBankAccount(null));
            dispatch(onLoadDone());
        }
    }
    
    return { ...propsBankAccount, onGetItemBankAccount, onGetLstBankAccount  }
}
