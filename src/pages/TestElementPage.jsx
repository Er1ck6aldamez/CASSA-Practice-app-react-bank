import React from 'react'
import { GenerateForm } from '../components/forms/GenerateForm'
import { UpCircleFilled, SaveFilled } from '@ant-design/icons';

export const TestElementPage = () => {

    const lstFields = [
        {
            type:'select',
            name:'Hola',
            icon: <UpCircleFilled />,
            lstOptions:[{ id: 1, name:'opcion 1' }, { id: 2, name:'opcion 2' }]
        },
        {
            type:'input.text',
            name:'Hola2',
            icon: <SaveFilled />,
            lstOptions:[]
        },
    ];
    return (
    <GenerateForm lstFields={lstFields} />
  )
}
