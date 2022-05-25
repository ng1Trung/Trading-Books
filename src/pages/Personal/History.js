import { constants } from '~/components/Layouts'

function HistoryTab() {
    const ellipsis = true

    const HistoryItem = ({ secondUsername, imageURL, title, author, publishing }) => (
        <constants.Card style={{ borderRadius: 15 }}>
            <constants.Divider style={{ marginBottom: 40 }}>
                Bạn đã trao đổi sách cùng với {secondUsername}
            </constants.Divider>
            <constants.Space direction="vertical" style={{ width: '100%' }}>
                <constants.Row gutter={[20, 20]} align="middle">
                    {/* first user transaction */}
                    <constants.Col xs={24} sm={24} md={24} lg={24} xl={11} align="center">
                        <constants.Divider style={{ marginBottom: 40 }}>Sách của bạn</constants.Divider>
                        <constants.Space size="middle">
                            <constants.Image width={160} height={220} src={`/bookImages/${imageURL}`} alt={imageURL} />
                            <constants.Card size="small">
                                <constants.Space
                                    direction="vertical"
                                    size="small"
                                    style={{ width: 230, overflow: 'hidden' }}
                                >
                                    <constants.Title
                                        ellipsis={ellipsis ? { tooltip: { title } } : false}
                                        level={5}
                                        style={ellipsis ? { width: 230 } : undefined}
                                    >
                                        {title}
                                    </constants.Title>
                                    <constants.Text type="secondary">{author}</constants.Text>
                                    <constants.Text type="secondary">{publishing}</constants.Text>
                                </constants.Space>
                            </constants.Card>
                        </constants.Space>
                    </constants.Col>
                    <constants.Col xs={24} sm={24} md={24} lg={24} xl={2} align="center">
                        <constants.SwapOutlined style={{ fontSize: 30 }} />
                    </constants.Col>
                    {/* second user transaction */}
                    <constants.Col xs={24} sm={24} md={24} lg={24} xl={11} align="center">
                        <constants.Divider style={{ marginBottom: 40 }}>Sách của {secondUsername}</constants.Divider>

                        <constants.Space size="middle" style={{ marginBottom: 10 }}>
                            <constants.Image width={160} height={220} src={`/bookImages/${imageURL}`} alt={imageURL} />
                            <constants.Card size="small">
                                <constants.Space
                                    direction="vertical"
                                    size="small"
                                    style={{ width: 230, overflow: 'hidden' }}
                                >
                                    <constants.Title
                                        ellipsis={ellipsis ? { tooltip: { title } } : false}
                                        level={5}
                                        style={ellipsis ? { width: 230 } : undefined}
                                    >
                                        Khu Vườn Bí Mật Frances Hodgson Burnett
                                    </constants.Title>
                                    <constants.Text type="secondary">{author}</constants.Text>
                                    <constants.Text type="secondary">{publishing}</constants.Text>
                                </constants.Space>
                            </constants.Card>
                        </constants.Space>
                        <constants.Space size="middle" style={{ marginBottom: 10 }}>
                            <constants.Image width={160} height={220} src={`/bookImages/${imageURL}`} alt={imageURL} />
                            <constants.Card size="small">
                                <constants.Space
                                    direction="vertical"
                                    size="small"
                                    style={{ width: 230, overflow: 'hidden' }}
                                >
                                    <constants.Title
                                        ellipsis={ellipsis ? { tooltip: { title } } : false}
                                        level={5}
                                        style={ellipsis ? { width: 230 } : undefined}
                                    >
                                        Khu Vườn Bí Mật Frances Hodgson Burnett
                                    </constants.Title>
                                    <constants.Text type="secondary">{author}</constants.Text>
                                    <constants.Text type="secondary">{publishing}</constants.Text>
                                </constants.Space>
                            </constants.Card>
                        </constants.Space>
                    </constants.Col>
                </constants.Row>
            </constants.Space>
        </constants.Card>
    )

    return (
        <HistoryItem
            secondUsername="User1"
            imageURL="Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
            title="Khu vườn bí mật"
            author="Frances Burnett"
            publishing="2014"
        />
    )
}

export default HistoryTab
