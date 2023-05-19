import React, { useEffect, useState } from 'react'
import { conectionApi } from '../api/ConnectionApi'

export const MainPage = () => {
  
const [lstAccounts, setlstAccounts] = useState([])  

useEffect(() => {
    onGetAccounts();
}, [])

const  onGetAccounts = async () => {
    const {data} = await conectionApi.get('BankAccount');
    setlstAccounts(data)
}

const onResetData = () => {
    setlstAccounts([])
}


const onGetById = async (id) => {
    const { data } = await conectionApi.get(`BankAccount/${id}`);
    return data;
}

const onAddAccount = async () => {

    const account = {
        "UserNameAccount": "non",
        "IdentifyAccount": 164846,
        "FundAccount": 34.99
      };
    const response = await conectionApi.post('BankAccount', account);
    onGetAccounts();
}

const onUpdateAccount = async (id = 11) => {
    
    const { data } = await conectionApi.get(`BankAccount/12`);
    const account = data;
    account.UserNameAccount = "nombre 2"; 
    const response = await conectionApi.put('BankAccount/12', account );

    console.log(response);
    onGetAccounts();
}

const onDeleteAccount = async () => {
    const response = await conectionApi.delete('BankAccount/12' );
    onGetAccounts();
}
  
return (
    <>
        <h1>Main Page</h1>
        <hr />
        <p>Listado</p>

        <button onClick={onGetAccounts}> Listar data </button>
        <button onClick={()=>onGetById(11)}> obtener 1 </button>
        <button onClick={onAddAccount}> Agregar </button>
        <button onClick={onUpdateAccount}> Actualizar </button>
        <button onClick={onDeleteAccount}> Eliminar </button>
        <button onClick={onResetData}> Reset </button>

        <br />
        <code> { JSON.stringify(lstAccounts) } </code>
    </>
  )
}
