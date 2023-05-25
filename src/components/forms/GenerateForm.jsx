import React, { useState } from 'react'
import { ElementForm } from './ElementForm';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

export const GenerateForm = ({ lstFields }) => {
  

    const [formulario] = Form.useForm();
    const [form, setform] = useState({ })

    const onFinish = (values) => {
        console.log(values);
      };
      const onReset = () => {
        formulario.resetFields();
      };

    // const onInputChange = ({ target }) => {
    //     const { name, value } = target;
    //     console.log(name, value);
    //     setform({
    //       ...form,
    //       [name]: value,
    //     });
    //   };


    const onInputChange = (parameter) => {
        
        console.log(parameter);
        // setform({
        //   ...form,
        //   [name]: value,
        // });
      };




    const onGetElementForm = (field) => {
        // setform({
        //     ...form,
        //     [field.name]: field.name,
        // });

        switch (field.type) {
            
            case 'input.text':
                return  <ElementForm titleLabel={field.name} nameElement={field.name} icon={field.icon}>
                            <Input placeholder="Complete el campo"
                                allowClear
                               // onChange={  (e) => onInputChange(e) }
                            />
                        </ElementForm>

            case 'select':
                return  <ElementForm titleLabel={field.name} nameElement={field.name} icon={field.icon}>
                            <Select
                                placeholder="Seleccione una opción"
                                style={{ width: '100%', color:'black' }}
                                onChange={  onInputChange }
                                // value={field.lstOptions[0].id}
                                // defaultValue={field.lstOptions[0].id}
                                //value={field.value}
                                allowClear
                                >
                                    {
                                        field.lstOptions.map((item) => 
                                            <Option value={item.id}>{ item.name }</Option>  
                                        )
                                    }
                                </Select>
                        </ElementForm>
            default:
                return <>none</>;
        }        
    }  
    return (
        <Form
            form={formulario}
            name="control-hooks"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
        >
            {
                lstFields.map(value =>  { 
                    return onGetElementForm(value)
                })
            }
            

                <ElementForm titleLabel={'Gender'} nameElement={'gender'} >
                    
                <Select
                placeholder="Select a option and change input text above"
                allowClear
                >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
                </Select>
                    </ElementForm>
            
            <Form.Item>
                <Button type="primary" htmlType="submit"> Guardar </Button>
                <Button htmlType="button" onClick={onReset}> Cancelar </Button>
            </Form.Item>
        </Form>
    )
}
