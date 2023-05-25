import React from 'react'
import { GenerateForm } from '../components/forms/GenerateForm'
import { UpCircleFilled, SaveFilled } from '@ant-design/icons';

export const TestElementPage = () => {

    const lstFields = [
        {
            type:'select',
            name:'cbx1',
            icon: <UpCircleFilled />,
            lstOptions:[{ id: 1, name:'opcion 1' }, { id: 2, name:'opcion 2' }],
            value:''
        },
        {
            type:'input.text',
            name:'txt1',
            icon: <SaveFilled />,
            lstOptions:[],
            value:''
        },
        {
            type:'input.text',
            name:'txt2',
            icon: <SaveFilled />,
            lstOptions:[],
            value:''
        },
        {
            type:'select',
            name:'cbx3',
            icon: <UpCircleFilled />,
            lstOptions:[{ id: 3, name:'opcion 3' }, { id: 4, name:'opcion 4' }],
            value:''
        },
        {
            type:'select',
            name:'cbx4',
            icon: <UpCircleFilled />,
            lstOptions:[{ id: 'opcion-5', name:'opcion 5' }, { id: 'opcion-6', name:'opcion 6' }],
            value:''
        },
    ];

    return (
    <GenerateForm lstFields={lstFields} />
  )
}
