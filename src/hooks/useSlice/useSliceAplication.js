import { useDispatch, useSelector } from "react-redux";
import { Loading, LoadDone, CloseModal, OpenModal } from "../../store/uinterfaces/uiSliceAplication";

export const useSliceAplication = () => {
  
    const dispatch = useDispatch(); //notificar cambios
    const propsAplication = useSelector((state) => state.uiSliceAplication); //get propiedades genrales del slice

    const onLoading = async () => {
        try {
            dispatch(Loading());
        } catch (error) {
            dispatch(LoadDone());   
        }
    }

    const onLoadDone = async () => {
        dispatch(LoadDone());   
    }

    const onCloseModal = async () => {
        dispatch(CloseModal());
    }

    const onOpenModal = async () => {
        try {
            dispatch(OpenModal());
        } catch (error) {
            dispatch(CloseModal());
        }
    }

    return { ...propsAplication, onLoading, onLoadDone, onCloseModal, onOpenModal  }
}
