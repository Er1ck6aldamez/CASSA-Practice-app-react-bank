import React from 'react'
//import { HeaderItemCollapse } from './HeaderItemCollapse'
import { AntDesignOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row, Tooltip, Typography, Collapse } from 'antd'

const { Text } = Typography;
const { Panel } = Collapse;

export const ItemCollapse = ({ pkey, extra }) => {
  
    const headerCollapse = <Row justify={'space-around'} align="middle">
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
</Row>;
  
  return (
  <>  
    <Panel 
      style={{ border: 'none' }}
      header={"dcdsc"} key="3" >
      <div> sdfsdfd </div>
    </Panel>  

    <Panel 
        className='item-collapse'
        header={ <> akjsdbs asubdbhsd </> } 
        key={pkey} 
        extra={extra}
        showArrow={true}
        style={{ alignItems:'center !important', alignContent:'center !important' }}
        >
        <div> sñdkf msljdbf skjsndkjfbsdkjfsd fslkndf sd </div>
    </Panel>
  </>
  )
}

ItemCollapse.defaultProps = {
    pkey: 0, 
    
    extra:<></>
}
