import { memo } from 'react'

import { constants } from '~/components/Layouts'

function HeaderLayout() {
    return (
        <constants.Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                backgroundColor: '#f0e3e1',
            }}
        >
            <constants.Row justify="space-between" align="middle" style={{ width: 1200, margin: 'auto' }}>
                {/* logo */}
                <constants.Col>
                    <constants.Title level={2} style={{ color: '#333', margin: 0 }}>
                        <constants.Link href="/" style={{ color: '#333' }}>
                            Logo
                        </constants.Link>
                    </constants.Title>
                </constants.Col>
                {/* search */}
                <constants.Col style={{ marginBottom: -24 }}>
                    <constants.Search size="large" allowClear style={{ width: 400 }} placeholder="input search text" />
                </constants.Col>
                {/* account */}
                <constants.Col style={{ display: 'block' }}>
                    <constants.Space size="middle">
                        <constants.Avatar size="large" src="https://joeschmoe.io/api/v1/random" />
                        <constants.MessageOutlined style={{ fontSize: 30 }} />
                        <constants.BellOutlined style={{ fontSize: 30 }} />
                    </constants.Space>
                </constants.Col>
            </constants.Row>
        </constants.Header>
    )
}

export default memo(HeaderLayout)
