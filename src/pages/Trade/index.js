import { useState } from 'react'
import { constants } from '~/components/Layouts'

const TradePage = () => {
    const [userAddress, setUserAddress] = useState('Hồ Chí Minh')
    const [userPhoneNumber, setUserPhoneNumber] = useState('0912345678')

    const ellipsis = true

    function handleChange(value) {
        console.log(`selected ${value}`)
    }

    return (
        <div
            style={{
                padding: '40px 90px',
                marginTop: 40,
                backgroundColor: '#fff',
            }}
        >
            {/* --------------------------trading book info-------------------------- */}
            <constants.Row style={{ paddingBottom: 20 }}>
                <constants.Col span={24}>
                    <constants.Space direction="vertical">
                        <constants.Divider orientation="left">
                            <constants.Title level={2}>Thông tin sách</constants.Title>
                        </constants.Divider>

                        <constants.Card>
                            <constants.Space align="start">
                                <constants.Image
                                    width={240}
                                    height={300}
                                    src="/bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    alt="Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                />
                                <constants.Space direction="vertical" style={{ paddingLeft: 40 }}>
                                    <constants.PageHeader
                                        style={{ padding: '10px 0' }}
                                        title="Khu vườn bí mật"
                                        subTitle="Frances Burnett"
                                        tags={<constants.Tag color="blue">Tiếng Việt</constants.Tag>}
                                    ></constants.PageHeader>
                                    <constants.Text>Dịch giả: Nguyễn Tuấn Khanh</constants.Text>
                                    <constants.Text>Thể loại: Văn học thiếu nhi</constants.Text>
                                    <constants.Text>Năm xuất bản: 2014</constants.Text>
                                    <constants.Text>Nhà xuất bản: Văn học</constants.Text>
                                    <constants.Paragraph
                                        ellipsis={{
                                            rows: 3,
                                            expandable: true,
                                            symbol: 'more',
                                        }}
                                        style={{ textAlign: 'justify', marginBottom: 0 }}
                                    >
                                        <constants.Text strong>Nội dung: </constants.Text>
                                        Khu Vườn Bí Mật kể một câu chuyện về khu vườn bị khóa kín suốt 10 năm trời, cho
                                        đến khi được Mary, Colin, Dickon đánh thức và hồi sinh với tình yêu và sự chăm
                                        sóc thân thiện. Khu vườn sống lại cùng với những thay đổi của những người xung
                                        quanh. Mary không còn là một tiểu thư ngang ngược. Colin rũ bỏ những tuyệt vọng
                                        về sức khỏe để tự hào tuyên bố "sẽ sống mãi". Và như thế, trang viên sáng bừng
                                        sức sống con trẻ bởi tình yêu cuộc sống. Cuốn sách là tác phẩm nổi tiếng nhất
                                        của Frances Burnett, ra đời cách đây hơn một thế kỷ, mang cảm hứng lãng mạn của
                                        thời đại mà bà đã sống nhưng vẫn sống động với thời gian bởi những giá trị thuần
                                        khiết về ngôn ngữ và tình cảm.
                                    </constants.Paragraph>
                                </constants.Space>
                            </constants.Space>
                        </constants.Card>
                    </constants.Space>
                </constants.Col>
            </constants.Row>

            <constants.Row gutter={[20, 20]} style={{ paddingBottom: 20 }}>
                {/* --------------------------first user info-------------------------- */}
                <constants.Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <constants.Space direction="vertical">
                        <constants.Divider orientation="left">
                            <constants.Title level={2}>Thông tin chủ sách</constants.Title>
                        </constants.Divider>
                        <constants.Card>
                            <constants.Space>
                                <constants.Avatar
                                    size={64}
                                    style={{ margin: '0 60px' }}
                                    src="https://joeschmoe.io/api/v1/random"
                                />
                                <constants.Space direction="vertical" size="small">
                                    <constants.Space>
                                        <constants.Text strong>
                                            <constants.Link href="/personal" target="_blank">
                                                Nguyễn Viết Thành Trung
                                            </constants.Link>
                                        </constants.Text>
                                        <constants.Text type="secondary" italic>
                                            j4s0ntr
                                        </constants.Text>
                                    </constants.Space>
                                    <constants.Text>
                                        <constants.EnvironmentOutlined style={{ marginRight: 6 }} />
                                        Hà Nội
                                    </constants.Text>
                                    <constants.Text>
                                        <constants.PhoneOutlined style={{ marginRight: 6 }} />
                                        0966462601
                                    </constants.Text>
                                    <constants.Space size="large">
                                        <constants.Text>
                                            <constants.UsergroupAddOutlined style={{ marginRight: 6 }} />
                                            168 người theo dõi
                                        </constants.Text>
                                        <constants.Text>
                                            <constants.BookOutlined style={{ marginRight: 6 }} />
                                            24 sách
                                        </constants.Text>
                                        <constants.Text>
                                            <constants.HeartOutlined style={{ marginRight: 6 }} />
                                            16 lượt yêu thích
                                        </constants.Text>
                                    </constants.Space>
                                    <constants.Text>
                                        <constants.FacebookOutlined style={{ marginRight: 6 }} />
                                        https://www.facebook.com/j4s0ntr/
                                    </constants.Text>
                                </constants.Space>
                            </constants.Space>
                        </constants.Card>
                    </constants.Space>
                </constants.Col>
                {/* --------------------------second user info-------------------------- */}
                <constants.Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <constants.Space direction="vertical">
                        <constants.Divider orientation="left">
                            <constants.Title level={2}>Thông tin của bạn</constants.Title>
                        </constants.Divider>
                        <constants.Card>
                            <constants.Space>
                                <constants.Avatar
                                    size={64}
                                    style={{ margin: '0 60px' }}
                                    src="https://joeschmoe.io/api/v1/random"
                                />
                                <constants.Space direction="vertical" size="small">
                                    <constants.Space>
                                        <constants.Text strong>
                                            <constants.Link href="/personal" target="_blank">
                                                Nguyễn Văn A
                                            </constants.Link>
                                        </constants.Text>
                                        <constants.Text type="secondary" italic>
                                            AVanNg
                                        </constants.Text>
                                    </constants.Space>
                                    <constants.Space align="center" size="small">
                                        <constants.EnvironmentOutlined style={{ marginRight: 6 }} />
                                        <constants.Text
                                            style={{ margin: 0 }}
                                            editable={{
                                                tooltip: 'click to edit text',
                                                onChange: setUserAddress,
                                                enterIcon: null,
                                            }}
                                        >
                                            {userAddress}
                                        </constants.Text>
                                    </constants.Space>
                                    <constants.Space align="center" size="small">
                                        <constants.PhoneOutlined style={{ marginRight: 6 }} />
                                        <constants.Text
                                            style={{ margin: 0 }}
                                            editable={{
                                                tooltip: 'click to edit text',
                                                onChange: setUserPhoneNumber,
                                                enterIcon: null,
                                            }}
                                        >
                                            {userPhoneNumber}
                                        </constants.Text>
                                    </constants.Space>
                                    <constants.Space size="large">
                                        <constants.Text>
                                            <constants.UsergroupAddOutlined style={{ marginRight: 6 }} />
                                            168 người theo dõi
                                        </constants.Text>
                                        <constants.Text>
                                            <constants.BookOutlined style={{ marginRight: 6 }} />
                                            24 sách
                                        </constants.Text>
                                        <constants.Text>
                                            <constants.HeartOutlined style={{ marginRight: 6 }} />
                                            16 lượt yêu thích
                                        </constants.Text>
                                    </constants.Space>
                                    <constants.Text>
                                        <constants.FacebookOutlined style={{ marginRight: 6 }} />
                                        https://www.facebook.com/avanng/
                                    </constants.Text>
                                </constants.Space>
                            </constants.Space>
                        </constants.Card>
                    </constants.Space>
                </constants.Col>
            </constants.Row>
            {/* --------------------------trade info-------------------------- */}
            <constants.Row style={{ paddingBottom: 20 }}>
                <constants.Col span={24}>
                    <constants.Space direction="vertical">
                        <constants.Divider orientation="left">
                            <constants.Title level={2}>Thông tin trao đổi sách</constants.Title>
                        </constants.Divider>
                        <constants.Card>
                            {/* choosing book to trade */}
                            <constants.Space direction="vertical" style={{ padding: '0 44px 40px' }}>
                                <constants.Title level={4}>Chọn sách để trao đổi</constants.Title>
                                <constants.Select
                                    mode="multiple"
                                    style={{ width: 640 }}
                                    placeholder="Chọn sách bạn muốn trao đổi từ thư viện của bạn"
                                    onChange={handleChange}
                                    optionLabelProp="label"
                                >
                                    <constants.Option value="harrypotter1" label="harrypotter1">
                                        <div>Harry Potter1</div>
                                    </constants.Option>
                                    <constants.Option value="harrypotter2" label="harrypotter2">
                                        <div>Harry Potter2</div>
                                    </constants.Option>
                                    <constants.Option value="harrypotte3" label="harrypotter3">
                                        <div>Harry Potter3</div>
                                    </constants.Option>
                                    <constants.Option value="harrypotter4" label="harrypotter4">
                                        <div>Harry Potter4</div>
                                    </constants.Option>
                                </constants.Select>
                            </constants.Space>
                            <constants.Row gutter={[20, 20]} align="middle">
                                {/* first user transaction */}
                                <constants.Col xs={24} sm={24} md={24} lg={11} xl={11} align="center">
                                    <constants.Space size="middle">
                                        <constants.Image
                                            width={160}
                                            height={220}
                                            src="/bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                            alt="Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                        />
                                        <constants.Card size="small">
                                            <constants.Space
                                                direction="vertical"
                                                size="small"
                                                style={{ width: 230, overflow: 'hidden' }}
                                            >
                                                <constants.Title
                                                    ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                                    level={5}
                                                    style={ellipsis ? { width: 230 } : undefined}
                                                >
                                                    Khu Vườn Bí Mật Frances Hodgson Burnett
                                                </constants.Title>
                                                <constants.Text type="secondary">Frances Burnett</constants.Text>
                                                <constants.Text type="secondary">2014</constants.Text>
                                            </constants.Space>
                                        </constants.Card>
                                    </constants.Space>
                                </constants.Col>
                                <constants.Col xs={24} sm={24} md={24} lg={24} xl={2} align="center">
                                    <constants.SwapOutlined style={{ fontSize: 30 }} />
                                </constants.Col>
                                {/* second user transaction */}
                                <constants.Col xs={24} sm={24} md={24} lg={11} xl={11} align="center">
                                    <constants.Space size="middle" style={{ marginBottom: 12 }}>
                                        <constants.Image
                                            width={160}
                                            height={220}
                                            src="/bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                            alt="Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                        />
                                        <constants.Card size="small">
                                            <constants.Space
                                                direction="vertical"
                                                size="small"
                                                style={{ width: 230, overflow: 'hidden' }}
                                            >
                                                <constants.Title
                                                    ellipsis={true ? { tooltip: 'Khu vườn bí mật' } : false}
                                                    level={5}
                                                    style={ellipsis ? { width: 230 } : undefined}
                                                >
                                                    Khu Vườn Bí Mật Frances Hodgson Burnett
                                                </constants.Title>
                                                <constants.Text type="secondary">Frances Burnett</constants.Text>
                                                <constants.Text type="secondary">2014</constants.Text>
                                            </constants.Space>
                                        </constants.Card>
                                    </constants.Space>
                                    <constants.Space size="middle" style={{ marginBottom: 6 }}>
                                        <constants.Image
                                            width={160}
                                            height={220}
                                            src="/bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                            alt="Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                        />
                                        <constants.Card size="small">
                                            <constants.Space
                                                direction="vertical"
                                                size="small"
                                                style={{ width: 230, overflow: 'hidden' }}
                                            >
                                                <constants.Title
                                                    ellipsis={true ? { tooltip: 'Khu vườn bí mật' } : false}
                                                    level={5}
                                                    style={ellipsis ? { width: 230 } : undefined}
                                                >
                                                    Khu Vườn Bí Mật Frances Hodgson Burnett
                                                </constants.Title>
                                                <constants.Text type="secondary">Frances Burnett</constants.Text>
                                                <constants.Text type="secondary">2014</constants.Text>
                                            </constants.Space>
                                        </constants.Card>
                                    </constants.Space>
                                </constants.Col>
                            </constants.Row>
                            {/* message request */}
                            <constants.Space direction="vertical" style={{ padding: '20px 44px 0', width: '100%' }}>
                                <constants.Title level={4}>Gửi tin nhắn cho chủ sách</constants.Title>
                                <constants.TextArea
                                    showCount
                                    defaultValue="Xin chào, mình muốn trao đổi sách với bạn. Mong sớm nhận được phản hồi của bạn"
                                    maxLength={255}
                                    autoSize={{ minRows: 4, maxRows: 8 }}
                                    placeholder="textarea with clear icon"
                                    allowClear
                                    onChange={(e) => console.log(e.target.value)}
                                />
                            </constants.Space>
                        </constants.Card>
                    </constants.Space>
                </constants.Col>
            </constants.Row>
            <constants.Row justify="end">
                <constants.Button
                    type="primary"
                    icon={<constants.UserSwitchOutlined />}
                    style={{ width: 160, height: 50, fontSize: 20 }}
                >
                    Yêu cầu
                </constants.Button>
            </constants.Row>
        </div>
    )
}

export default TradePage
