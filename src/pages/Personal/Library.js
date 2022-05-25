import { constants } from '~/components/Layouts'

function LibraryTab() {
    const ellipsis = true

    const LibraryTabItem = ({ title, author, publishing, imageURL }) => {
        return (
            <constants.Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <constants.Space size={0} direction="vertical" align="center">
                    <constants.Image src={imageURL} style={{ width: 160, height: 240 }} />
                    <constants.Space direction="vertical" size={0} align="center">
                        <constants.Text
                            strong
                            type="primary"
                            ellipsis={ellipsis ? { tooltip: { title } } : false}
                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                        >
                            {title}
                        </constants.Text>
                        <constants.Text type="secondary">{author}</constants.Text>
                        <constants.Text type="secondary">{publishing}</constants.Text>
                        <constants.Rate allowHalf disabled defaultValue={4.5} />
                    </constants.Space>
                </constants.Space>
            </constants.Col>
        )
    }

    return (
        <constants.Tabs defaultActiveKey="owning" size="large" tabBarGutter={60} centered>
            {/* owning books */}
            <constants.TabPane tab="Đang sở hữu" key="owning">
                owning books
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                            <LibraryTabItem
                                title="Khu Vườn Bí Mật"
                                author="Frances Burnett"
                                publishing="2014"
                                srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                            />
                        </constants.Col>
                        <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                            <LibraryTabItem
                                title="Khu Vườn Bí Mật"
                                author="Frances Burnett"
                                publishing="2014"
                                srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                            />
                        </constants.Col>
                        <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                            <LibraryTabItem
                                title="Khu Vườn Bí Mật"
                                author="Frances Burnett"
                                publishing="2014"
                                srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                            />
                        </constants.Col>
                        <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                            <LibraryTabItem
                                title="Khu Vườn Bí Mật"
                                author="Frances Burnett"
                                publishing="2014"
                                srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                            />
                        </constants.Col>
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
            {/* traded books */}
            <constants.TabPane tab="Đã trao đổi" key="traded">
                traded books
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                            <LibraryTabItem
                                title="Khu Vườn Bí Mật"
                                author="Frances Burnett"
                                publishing="2014"
                                srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                            />
                        </constants.Col>
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
            {/* liked books */}
            <constants.TabPane tab="Đã thích" key="liked">
                liked books
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                            <LibraryTabItem
                                title="Khu Vườn Bí Mật"
                                author="Frances Burnett"
                                publishing="2014"
                                srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                            />
                        </constants.Col>
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
            {/* hidden books */}
            <constants.TabPane tab="Bị ẩn" key="hidden">
                hidden books
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                            <LibraryTabItem
                                title="Khu Vườn Bí Mật"
                                author="Frances Burnett"
                                publishing="2014"
                                srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                            />
                        </constants.Col>
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
        </constants.Tabs>
    )
}

export default LibraryTab
