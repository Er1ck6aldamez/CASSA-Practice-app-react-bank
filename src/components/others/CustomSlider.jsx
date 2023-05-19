import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Row, Slider, Space, Typography } from 'antd'
import React, { useState } from 'react'

const { Text } = Typography;

export const CustomSlider = ({ item }) => {
  
  const [inputValue, setInputValue] = useState(item.id);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <Row justify={'space-between'} 
        align='middle'
        className='mt-2 mb-2'>
        <Col span={5}>
          <Space size={24}>
            <Badge count={item.id}>
              <Avatar shape="circle" 
                      size={50}
                      src={item.image}
                      icon={<UserOutlined />} />
            </Badge>
          </Space>
        </Col>
        <Col span={19}>
            <Text className='bold m-0'> { item.name }  </Text> <br />
            <Text type='secondary m-0'> Descripción corta para que agarre plante el diseño  </Text>
            <Slider
                min={1}
                max={20}
                onChange={onChange}
                dots={false}
                value={typeof inputValue === 'number' ? inputValue : 0}
            />
        </Col>
    </Row>
  )
}

CustomSlider.defaultProps = {
}

