import { CloseCircleFilled, SaveFilled } from '@ant-design/icons';
import { Alert, Button, Form, Input, InputNumber, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { conectionApi } from '../../api/ConnectionApi';
import { ValueMin, Requered } from '../../helpers/FormRules';
import { useSliceBankAccount } from '../../hooks/useSlice/useSliceBankAccount';
import { useSliceAplication } from '../../hooks/useSlice/useSliceAplication';


const { Option } = Select;
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const TransaccionNueva = () => {
  
  const { lstBankAccount, lstTransferType, onGetTransferType } = useSliceBankAccount();
  const { loading, onCloseModal } = useSliceAplication();


    const [showError, setshowError] = useState(true)
    const [ErrorMessage, setErrorMessage] = useState("")

    const formRef = React.useRef(null);
    
    const onGenderChange = (value) => {
      switch (value) {
        case 'male':
          formRef.current?.setFieldsValue({
            note: 'Hi, man!',
          });
          break;
        case 'female':
          formRef.current?.setFieldsValue({
            note: 'Hi, lady!',
          });
          break;
        case 'other':
          formRef.current?.setFieldsValue({
            note: 'Hi there!',
          });
          break;
        default:
          break;
      }
    };
    const onFinish = async (values) => {
        console.log(values);
        const response = await conectionApi.post("BankTransfers", values);
        console.log(response);

        if (response.data.State){
          
          setErrorMessage("Funciono");
          onCloseModal();
          setshowError(!response.data.State);
        }else{
          setErrorMessage(response.data.Message);
          setshowError(response.data.State);
        }
    };
    const onReset = () => {
      formRef.current?.resetFields();
    };
    const onFill = () => {
      formRef.current?.setFieldsValue({
        Amount: '5000',
        IdentifyAccountOrigin: '87',
        IdentifyAccountDestination: '10',
        TransferType: '1',
        Motivo:'Soy buena onda'
      });
    };
  
    useEffect(() => {
      onGetTransferType('Transaccion');
    }, [])
    


    return (
    <>
        {
            !showError && <Alert message={ErrorMessage} type="error" showIcon />
        }
        <br />
        <Form
            {...layout}
            ref={formRef}
            name="control-ref"
            onFinish={onFinish}
            style={{ maxWidth: 600, }}
        >
            <Form.Item
                name="Amount"
                label="Monto"
                rules={[ Requered ]}
                >
                <InputNumber 
                    min={0}
                    presicion={2} />
            </Form.Item>
            <Form.Item
                name="TransferType"
                label="Tipo transacción"
                rules={[ Requered, ]}
            >
                <Select
                placeholder="Seleccione tipo de transacción"
                onChange={onGenderChange}
                allowClear >
                  {
                    lstTransferType.map((item) => 
                      <Option value={item.Id}>{ item.NameType }</Option>  
                    )
                  }
                </Select>
            </Form.Item>

            <Form.Item
                name="IdentifyAccountOrigin"
                label="Cuenta origen"
                rules={[ { required: true, },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if ((!value || getFieldValue("IdentifyAccountDestination") === value)) {
                        return Promise.reject("La cuenta debe ser diferente a la cuenta de destino");
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
            >
                <Select
                placeholder="Seleccione una cuenta"
                onChange={onGenderChange}
                allowClear >
                  {
                    lstBankAccount.map((item) => 
                      <Option value={item.Id}>{ item.UserNameAccount }</Option>  
                    )
                  }
                </Select>
            </Form.Item>

            <Form.Item
                name="IdentifyAccountDestination"
                label="Cuenta destino"
                rules={[ { required: true, },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if ((!value || getFieldValue("IdentifyAccountOrigin") === value)) {
                        return Promise.reject("La cuenta debe ser diferente a la cuenta de origen");
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
            >
                <Select
                placeholder="Seleccione una cuenta"
                onChange={onGenderChange}
                allowClear >
                    {
                    lstBankAccount.map((item) => 
                      <Option value={item.Id}>{ item.UserNameAccount }</Option>  
                    )
                  }
                </Select>
            </Form.Item>

            <Form.Item
                name="Motivo"
                label="Motivo"
                rules={[ { required: true, }, ]}
            >
                <TextArea showCount maxLength={100}  />
            </Form.Item>
      
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" icon={ <SaveFilled /> }> Submit </Button>
                <Button htmlType="button" onClick={onReset} icon={ <CloseCircleFilled />  }> Reset </Button>

                <Button htmlType="link" onClick={onFill} icon={ <CloseCircleFilled />  }> Autocompletar </Button>
            </Form.Item>
        </Form>
    </>
  )
}
