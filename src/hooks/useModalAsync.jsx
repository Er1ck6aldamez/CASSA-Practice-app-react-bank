import React, { useState } from 'react'
import { TransaccionNueva } from '../components/forms/TransaccionNueva';



export const useModalAsync = () => {
    
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(<></>);
    
    const showModal = (option) => {
      onSetContentModal(option);  
      setOpen(true);
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
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    };
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };
  
  
    return {
        open,
        modalText,
        confirmLoading,
        
        showModal,
        handleCancel,
        handleOk,
        setModalText
    }
}
