import React from 'react'
import { Form, Typography, Row, Col } from 'antd'
import { IconForm } from './IconForm';
const { Text } = Typography;

export const ElementForm = ({ customStyle, titleLabel, nameElement, rulesElement, children, icon }) => {
  return (
    <>
        <Text type='secondary'>{ titleLabel }</Text>
        <div style={customStyle} className={'dividerBetweenElementes'} >
            <Form.Item style={{ margin: '0px' }} name={nameElement}
                rules={rulesElement}>
                {/* <Row wrap={false}>
                    <Col flex="none">
                        <IconForm icon={icon} />
                    </Col>
                    <Col flex="auto" className='center-elements' style={{paddingLeft: '5px'}}>
                        {children}
                    </Col>
                </Row>   */}
                {children}
            </Form.Item>
        </div>
    </>
  )
}

ElementForm.defaultProps = {
    customStyle:{ 
        textAlign: "start", 
        borderRadius: "5px", 
        backgroundColor: "#f9f9f9", 
        padding: "5px", 
        marginBottom: "15px" 
    },
    rulesElement:[]
}
