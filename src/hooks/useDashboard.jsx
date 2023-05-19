import React, { useEffect, useState } from 'react'
import '../styles/general.css'
import { Col, Divider, Row, Space, Table, Tag, Typography } from 'antd'
import { conectionApi } from '../api/ConnectionApi';

const { Text } = Typography;




export const useDashboard = () => {

      // const { lstBankAccount, onGetItemBankAccount, onGetLstBankAccount  } = useSliceBankAccount();
      // const { loading, onLoading, onLoadDone } = useSliceAplication();

      const [lstTransferences, setlstTransferences] = useState([])
      // const [lstBankAccount, setlstBankAccount] = useState([])

  

    const columnsTransferences = [
        {
          title: 'IdTransfer',
          dataIndex: 'IdTransfer',
          key: 'IdTransfer',
          render: (_, { IdTransferencia }) => <a>{IdTransferencia}</a>
        },
        {
          title: 'Origen',
          dataIndex: 'origen',
          key: 'origen',
          render: (_, { NombreCuentaOrigen, NumeroCuentaOrigen }) => (
              <>
                  <Text type="secondary">{ NumeroCuentaOrigen }</Text> <br />
                  <Text>{ NombreCuentaOrigen }</Text>
              </>
            ),
        },
        {
          title: 'Destino',
          dataIndex: 'destino',
          key: 'destino',
          render: (_, { NombreCuentaDestino, NumeroCuentaDestino }) => (
              <>
                  <Text type="secondary">{ NumeroCuentaDestino }</Text> <br />
                  <Text>{ NombreCuentaDestino }</Text>
              </>
            ),
        },
        {
          title: 'Fecha',
          dataIndex: 'FechaTransferencia',
          key: 'FechaTransferencia',
          render: (_, { FechaTransferencia }) => (
              <>
                  <Text>{ FechaTransferencia }</Text>
              </>
            ),
        },
        {
          title: 'Monto',
          key: 'monto',
          dataIndex: 'monto',
          render: (_, { Monto }) => (
            <>
              <Tag color={'geekblue'}>
                  ${
                    parseFloat(Monto).toFixed(2)
                  }
              </Tag>
            </>
          ),
        },
        {
          title: 'Tipo',
          key: 'TipoTransacccion',
          dataIndex: 'TipoTransacccion',
          render: (_, { TipoTransacccion }) => (
            <>
              <Tag color={'geekblue'}>
                  {TipoTransacccion}
              </Tag>
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, {IdTransferencia}) => (
            <Space size="middle">
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      const columnsBankAccount = [
        {
          title: 'N°',
          dataIndex: 'Id',
          key: 'Id',
          render: (_, { Id }) => <a>{Id}</a>,
        },
        {
          title: 'Nombre de cuenta',
          dataIndex: 'UserNameAccount',
          key: 'UserNameAccount',
          // render: (_, { UserNameAccount }) => (
          //     <>
          //         <Text>{ UserNameAccount }</Text>
          //     </>
          //   ),
        },
        {
          title: 'Número de cuenta',
          dataIndex: 'IdentifyAccount',
          key: 'IdentifyAccount',
          // render: (_, { IdentifyAccount }) => (
          //     <>
          //         <Text>{ IdentifyAccount }</Text>
          //     </>
          //   ),
        },
        {
          title: 'Tipo de cuenta',
          dataIndex: 'NameType',
          key: 'NameType',
          // render: (_, { NameType }) => (
          //     <>
          //         <Text>{ NameType }</Text>
          //     </>
          //   ),
        },
        {
          title: 'Saldo actual',
          dataIndex: 'FundAccount',
          key: 'FundAccount',
          render: (_, { FundAccount }) => (
              <>
                  <Text>$ { parseFloat(FundAccount).toFixed(2) }</Text>
              </>
            ),
        },
        {
          title: 'Estado',
          key: 'Borrado',
          dataIndex: 'Borrado',
          render: (_, { Borrado }) => (
            <>
              <Tag color={ Borrado ? 'green' : 'red'}>
                  { Borrado ? 'Activo' : 'Deshabilitado' }
              </Tag>
            </>
          ),
        },
      ];

      

  
      const onGetLastTransferences = async () => {
          const { data } = await conectionApi.get('BankTransfers');
          setlstTransferences(data.Data);
      }
      // const onGetBankAccount = async () => {
      //   const { data } = await conectionApi.get('BankAccount/');
      //   setlstBankAccount(data);
      // }


      
      
      return {
        columnsBankAccount,
        columnsTransferences,

        lstTransferences,
        //lstBankAccount,

        onGetLastTransferences,
        //onGetBankAccount,
    }

}
