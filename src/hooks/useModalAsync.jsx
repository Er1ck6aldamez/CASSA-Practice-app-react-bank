import React, { useState } from 'react'
import { TransaccionNueva } from '../components/forms/TransaccionNueva';
import { useSliceAplication } from './useSlice/useSliceAplication';



export const useModalAsync = () => {
    
  const { loading, onCloseModal, onOpenModal } = useSliceAplication();


    //const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(<></>);
    
    const showModal = (option) => {
      onSetContentModal(option);  
      onOpenModal();
    };

    const onSetContentModal = (option) => {
        switch (option) {
            case 1: //
                const formNuevaTransaccion = <>
                
                </>;
                setModalText(<TransaccionNueva />);
                break;

            case 2: //
                setModalText(<>opcion 2</>);
                break;
        
            default:
                break;
        }
    }

    const handleOk = () => {
  
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
// setOpen(false);
        onCloseModal();
        setConfirmLoading(false);
      }, 2000);
    };
    const handleCancel = () => {
      console.log('Clicked cancel button');
      // setOpen(false);
      onCloseModal();
    };
  
  
    return {
        //open,
        modalText,
        confirmLoading,
        
        showModal,
        handleCancel,
        handleOk,
        setModalText
    }
}
