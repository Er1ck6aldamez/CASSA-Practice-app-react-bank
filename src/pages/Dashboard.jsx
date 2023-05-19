import React, { useEffect, useState } from 'react'
import { Button, Col, Divider, Modal, Row, Space, Table, Tag, Typography } from 'antd'
import { ContenedorGeneral } from '../components/containers/ContenedorGeneral'
import { conectionApi } from '../api/ConnectionApi';
import { Line } from '@ant-design/plots';
import '../styles/general.css'
import { ControlFilled, PlusCircleFilled } from '@ant-design/icons';
import { useDashboard } from '../hooks/useDashboard'
import { GraphicLine } from '../hooks/GraphicLine'
import { useModalAsync } from '../hooks/useModalAsync'
import { CustomCollapse } from '../components/others/collapse/CustomCollapse';
import { CustomSlider } from '../components/others/CustomSlider';
import { CustomCollapse2 } from './CustomCollapse2';
import { useSliceBankAccount } from '../hooks/useSlice/useSliceBankAccount';
import { useSliceAplication } from '../hooks/useSlice/useSliceAplication';

const { Text } = Typography;

export const Dashboard = () => {

  const { lstBankAccount, onGetItemBankAccount, onGetLstBankAccount  } = useSliceBankAccount();
  const { loading, modalIsOpen } = useSliceAplication();


  const { columnsBankAccount, 
          columnsTransferences, 
          
          
          lstTransferences, 
          //lstBankAccount, 
          
          onGetLastTransferences, 
          //onGetBankAccount,
           } = useDashboard();
           
  const { 
    //open,
    modalText,
    confirmLoading,
    
    showModal,
    handleCancel,
    handleOk,
    setModalText } =  useModalAsync();
    
    //Tablas
    useEffect(() => {
      onGetLstBankAccount();
      onGetLastTransferences();
    }, []);

    

    const lstMamasitas = [
      { 
        id:10,
        name:'Jade Picon',
        description: '',
        image: 'https://i.pinimg.com/564x/33/b1/67/33b16765fae2fc24a68291e8bdbc276e.jpg',
      },
      { 
        id:12,
        name:'Dua Lipa',
        description: '',
        image: 'https://phantom-marca.unidadeditorial.es/9c1dd4f814a6280c74593ed20475eda3/crop/110x0/1486x918/resize/828/f/webp/assets/multimedia/imagenes/2022/09/13/16630933828540.png',
      },
      { 
        id:8,
        name:'Jennifer Connelly',
        description: '',
        image: 'https://i5.walmartimages.com/asr/e1623af5-6142-4181-8c5e-acae7a942e40_1.c16c5f1137713ecc866fed22681b522b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      },
      { 
        id:5,
        name:'Anne Hathaway',
        description: '',
        image: 'https://media.vogue.co.uk/photos/636d2aad41d61cb9a3386992/2:3/w_1920,c_limit/GettyImages-1243944955.jpg',
      },
      { 
        id:14,
        name:'Scarlett Johansson',
        description: '',
        image: 'https://1.bp.blogspot.com/-jcRgOqwp_BE/VtzB-HrqAOI/AAAAAAAAAaI/6DENKtEZDb8/s1600/scarlett-johansson-no-makeup-1556015352.jpg',
      },
      { 
        id:10,
        name:'Emma Watson',
        description: '',
        image: 'https://www.unwomen.org/sites/default/files/2022-10/UN-Women-Goodwill-Ambassador-Emma-Watson-Credit-Celeste-Sloman-853x1280.jpg',
      },
    ];



    return (
    <>
    <Row justify={'space-evenly'}>
      <Col span={23}>
        <ContenedorGeneral title={'Operaciones'} subTitle={''} icon={<ControlFilled />}>
          <Button type="primary" onClick={()=> showModal(1)} icon={<PlusCircleFilled />}>
            Nueva transacción
          </Button>
          <Modal
            title="Transferencia"
            open={modalIsOpen}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel} >
            {modalText}
          </Modal>
        </ContenedorGeneral>
        <Divider />

      </Col>
      

        <Col span={11}>
            <ContenedorGeneral title={'Cuentas registradas'} subTitle={'Ahorros'}>
                <Table columns={columnsBankAccount} dataSource={lstBankAccount} rowKey={'lstBankAccount'} />
            </ContenedorGeneral>

            <Divider />

            <ContenedorGeneral title={'Últimas transacciones'} subTitle={'8/05/2023'}>
                <Table columns={columnsTransferences} dataSource={lstTransferences} />
            </ContenedorGeneral>
        </Col>
        <Col span={11}>
            <ContenedorGeneral title={'Últimas transacciones'} subTitle={'8/05/2023'}>
              <GraphicLine />
            </ContenedorGeneral>

            <Divider />

            <ContenedorGeneral title={'Bebidas carbonatadas'} subTitle={'Registros 2022'}>
                <CustomCollapse2 />
            </ContenedorGeneral>
            
            <Divider />
            
            <ContenedorGeneral title={'Mamasitas'} subTitle={'Miami lo confirmo'}>
                <Row justify={'space-between'}>
                  {
                    lstMamasitas.map((item) => 
                      <Col span={11}>
                        <CustomSlider item={item} />
                        <Divider className='m-0' />
                      </Col>
                    )
                  } 
                </Row>
            </ContenedorGeneral>

            <Divider />

            <ContenedorGeneral title={'Erick Galdámez'} subTitle={'8/05/2023'}>
                <Table columns={columnsTransferences} dataSource={lstTransferences} />
            </ContenedorGeneral>
        </Col>
    </Row>
    
    </>
  )
}
