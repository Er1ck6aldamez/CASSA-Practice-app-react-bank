import { Avatar, Card, Col, Collapse, Row, Typography} from 'antd'
import React from 'react'
const { Title } = Typography;

import { PieChartFilled } from '@ant-design/icons';


export const ContenedorGeneral = ({ children, title, subTitle, icon }) => {
  return (
    <Card
        bordered={false}
        style={{ width: '100%' }}>
        <div>
            <Row justify="space-between">
                <Col span={'1'}> 
                    <Avatar className='bg-icon' icon={icon} />
                </Col>
                <Col span={'17'}> 
                    <Title className='m-0 text-primary' level={3}> { title } </Title>
                </Col>
                <Col span={'5'}>
                    <Title className='m-0 text-secundary' level={5} style={{ textAlign:'end' }}> { subTitle } </Title>
                </Col>
            </Row>
            <hr />
            {children}
        </div>
    </Card>
  )
}
ContenedorGeneral.defaultProps = {
    title: 'Titulo por defecto',
    subTitle: 'Sun titulo por defecto',
    icon: <PieChartFilled />
}


