import { Typography } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Avatar } from 'antd';

const Headers = () => {
    return (
        <>
            <Row justify="space-between" align="middle" style={{padding: '0.1em', background:'#10446b', color:"#fff"}}>
                <Col span={4}> <h4>SIAI</h4></Col>
                <Col span={6}>
                <Row justify="end" align="middle">
                    <Col span={6}>
                        <h5>User Name</h5>
                    </Col>
                    <Col span={6}>
                        <Avatar icon={<UserOutlined />} />
                    </Col>
                </Row>
                </Col>
            </Row>

        </>
    )
}

export default Headers