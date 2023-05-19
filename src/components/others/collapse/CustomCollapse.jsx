import { Col, Collapse, Divider, Row } from 'antd'
import React, { useState } from 'react'
import { ItemCollapse } from './ItemCollapse';
import { SettingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const text = `contenido`;

export const CustomCollapse = ({ firstActive }) => {
  
    const [expandIconPosition, setExpandIconPosition] = useState('end');
    const onPositionChange = (newExpandIconPosition) => {
      setExpandIconPosition(newExpandIconPosition);
    };

 return (
    <Collapse
        className='custom-collapse'
        defaultActiveKey={[firstActive]}
        expandIconPosition={expandIconPosition}
        >
        <Panel 
            style={{ border: 'none', margin:'0px' }}
            header={
                <Row justify={'space-between'}>
                    <Col span={'10'} style={{ fontWeight:500 }}>Compañia</Col>
                    <Col span={'8'} style={{ fontWeight:500 }}>Montos</Col>
                    <Col span={'6'} style={{ fontWeight:500 }}>Temas/Categorias</Col>
                </Row>
            } key="0"
            showArrow={false}
            collapsible={'disabled'}
            >
        </Panel>

        <ItemCollapse 
            pkey={1}>
            <div>{text}</div>
        </ItemCollapse>
        <Divider className='m-0' />
        <ItemCollapse 
            pkey={2}
            extra={<SettingOutlined />}
        >
            <div>{text}</div>
        </ItemCollapse>
        <Divider className='m-0' />
        <ItemCollapse 
            pkey={3}
        >
            <div>{text}</div>
        </ItemCollapse>
    </Collapse>
  )
}

CustomCollapse.defaultProps = {
    expandIconPosition:'end', 
    firstActive:'1'
}
