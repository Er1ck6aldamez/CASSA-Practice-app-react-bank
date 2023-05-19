import React from 'react'
import { useState } from 'react';
import { Avatar, Col, Divider, Row, Tooltip, Typography, Collapse } from 'antd'
import { AntDesignOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ItemCollapse } from '../components/others/collapse/ItemCollapse';
import { HeaderItemCollapse } from '../components/others/collapse/HeaderItemCollapse';

const { Text } = Typography;
const { Panel } = Collapse;

const text = `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;




const lstCompanies = [
{
    id: 1,
    name: 'Coca cola',
},
{
    id: 2,
    name: 'Pespsi',
},
{
    id: 3,
    name: 'Fanta',
},
{
    id: 4,
    name: 'Kolashampan',
},
{
    id: 5,
    name: 'Sprite',
}];

export const CustomCollapse2 = () => {

    const [expandIconPosition, setExpandIconPosition] = useState('end');
    const onPositionChange = (newExpandIconPosition) => {
      setExpandIconPosition(newExpandIconPosition);
    };
    const onChange = (key) => {
      console.log(key);
    };
    const genExtra = () => (
      <SettingOutlined
        onClick={(event) => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
      );

      const getMainContent = () => (
        <Row justify={'space-around'} align="middle">
            <Col span={2} >
                <Avatar
                    src={'https://scontent-gua1-1.xx.fbcdn.net/v/t1.6435-9/145356346_2557334444566848_8696511243184211060_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TeG0L03RhSsAX9pFcRF&_nc_ht=scontent-gua1-1.xx&oh=00_AfDnTVo4MURRJTIcKsEPLzfyG3V5mhVOIvqp7crka_IgVw&oe=648B1F04'}
                    icon={<SettingOutlined />} />
            </Col>
            <Col span={8}>
                <Text style={{ fontWeight:500 }}>Nombre de la compañia</Text>
            </Col>
            <Col span={10}>
                <Text style={{ fontWeight:400 }}> $2000.00 </Text> /
                <Text type="secondary"> 2% </Text>
            </Col>
            <Col span={4}>
            <Avatar.Group
                maxCount={2}
                maxStyle={{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                }}
                >
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                <Avatar
                    style={{
                    backgroundColor: '#f56a00',
                    }}>
                    K
                </Avatar>
                <Tooltip title="Ant User" placement="top">
                    <Avatar
                    style={{
                        backgroundColor: '#87d068',
                    }}
                    icon={<UserOutlined />}
                    />
                </Tooltip>
                <Avatar
                    style={{
                    backgroundColor: '#1890ff',
                    }}
                    icon={<AntDesignOutlined />}
                />
                </Avatar.Group>
            </Col>
        </Row>
        );

  return (
        <Collapse
            className='custom-collapse'
            defaultActiveKey={['1']}
            onChange={onChange}
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
            {/* <Divider className='m-0' /> */}
            {
                lstCompanies.map((item) =>
                    <Panel 
                        className='item-collapse'
                        header={<HeaderItemCollapse item={item} />} key={ item.id.toString() } extra={genExtra()}>
                        <div>{text}</div>
                    </Panel>
              )
            }
            {/* <Panel 
                className='item-collapse'
                header={getMainContent()} key="1" extra={genExtra()}>
                <div>{text}</div>
            </Panel> */}
            {/* <Divider className='m-0' /> */}

        </Collapse>
  )
}
