import React, { useState } from 'react'
import { ElementForm } from './ElementForm';
import { Input, Select } from 'antd';

const { Option } = Select;

export const GenerateForm = ({ lstFields }) => {
  
    

    const onGetElementForm = (field) => {

        switch (field.type) {
            
            case 'input.text':
                return  <ElementForm titleLabel={field.name} nameElement={field.name} icon={field.icon}>
                            <Input placeholder="" value={field.name} />
                        </ElementForm>

            case 'select':
                return  <ElementForm titleLabel={field.name} nameElement={field.name} icon={field.icon}>
                            <Select
                                placeholder="Seleccione una opción"
                                style={{ width: '100%' }}
                                options={field.lstOptions}
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
    <div>
        {
            lstFields.map(value =>  { 
                return onGetElementForm(value)
            })
        }
    </div>
  )
}
