import { useState } from 'react'

import { constants } from '~/components/Layouts'

function BookInfoPage() {
    const [visible, setVisible] = useState(false)
    const [likeBook, setLikeBook] = useState('')

    const handleLikeBook = () => {
        return likeBook === 'Thích sách này' ? setLikeBook('Đã thích sách này') : setLikeBook('Thích sách này')
    }

    // modal review
    const onCancel = () => {
        setVisible(false)
    }
    const onOk = () => {
        setVisible(false)
    }

    const displayModal = () => {
        setVisible(true)
    }
    const data = [
        {
            author: 'Trung Nguyen',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <constants.Paragraph
                    ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: 'more',
                    }}
                    style={{ textAlign: 'justify', marginBottom: 0 }}
                >
                    We supply a series of design principles, practical patterns and high quality design resources
                    (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. We
                    supply a series of design principles, practical patterns and high quality design resources (Sketch
                    and Axure), to help people create their product prototypes beautifully and efficiently. We supply a
                    series of design principles, practical patterns and high quality design resources (Sketch and
                    Axure), to help people create their product prototypes beautifully and efficiently.
                </constants.Paragraph>
            ),
            datetime: '19/05/2022',
        },
        {
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <constants.Paragraph
                    ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: 'more',
                    }}
                    style={{ textAlign: 'justify', marginBottom: 0 }}
                >
                    We supply a series of design principles, practical patterns and high quality design resources
                    (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                </constants.Paragraph>
            ),
            datetime: '20/05/2022',
        },
    ]

    const ReviewModal = () => {
        return (
            <constants.Modal title="Review cho sách này" width={800} visible={visible} onOk={onOk} onCancel={onCancel}>
                <constants.TextArea
                    showCount
                    defaultValue="Sách rất hay. Tôi đã đọc xong nó trong 1 ngày mà ko nghỉ ăn cơm lun ^^"
                    maxLength={1000}
                    autoSize={{ minRows: 4, maxRows: 8 }}
                    onChange={(e) => console.log(e.target.value)}
                />
                <constants.Rate allowHalf defaultValue={4.5} />
            </constants.Modal>
        )
    }
    return (
        <div
            style={{
                marginTop: 10,
                padding: '40px 90px',
                backgroundColor: '#fff',
            }}
        >
            <constants.Space direction="vertical" size="small">
                {/* book info */}
                <constants.Card style={{ borderRadius: 15 }}>
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
                            <constants.Text>
                                <constants.Text strong>Dịch giả:</constants.Text> Nguyễn Tuấn Khanh
                            </constants.Text>
                            <constants.Text>
                                <constants.Text strong>Thể loại:</constants.Text> Văn học thiếu nhi
                            </constants.Text>
                            <constants.Text>
                                <constants.Text strong>Năm xuất bản:</constants.Text> 2014
                            </constants.Text>
                            <constants.Text>
                                <constants.Text strong>Nhà xuất bản:</constants.Text> Văn học
                            </constants.Text>
                            <constants.Paragraph
                                ellipsis={{
                                    rows: 2,
                                    expandable: true,
                                    symbol: 'more',
                                }}
                                style={{ textAlign: 'justify', marginBottom: 0 }}
                            >
                                <constants.Text strong>Nội dung: </constants.Text>
                                Khu Vườn Bí Mật kể một câu chuyện về khu vườn bị khóa kín suốt 10 năm trời, cho đến khi
                                được Mary, Colin, Dickon đánh thức và hồi sinh với tình yêu và sự chăm sóc thân thiện.
                                Khu vườn sống lại cùng với những thay đổi của những người xung quanh. Mary không còn là
                                một tiểu thư ngang ngược. Colin rũ bỏ những tuyệt vọng về sức khỏe để tự hào tuyên bố
                                "sẽ sống mãi". Và như thế, trang viên sáng bừng sức sống con trẻ bởi tình yêu cuộc sống.
                                Cuốn sách là tác phẩm nổi tiếng nhất của Frances Burnett, ra đời cách đây hơn một thế
                                kỷ, mang cảm hứng lãng mạn của thời đại mà bà đã sống nhưng vẫn sống động với thời gian
                                bởi những giá trị thuần khiết về ngôn ngữ và tình cảm.
                            </constants.Paragraph>
                            <constants.Rate allowHalf disabled defaultValue={4.5} />
                            <constants.Space size="large">
                                <constants.Button onClick={handleLikeBook}>
                                    {likeBook || 'Thích sách này'}
                                </constants.Button>
                                <constants.Button onClick={displayModal}>Review sách này</constants.Button>
                            </constants.Space>
                        </constants.Space>
                    </constants.Space>
                </constants.Card>
                {/* owners  */}
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Divider orientation="left">Người dùng đang sở hữu</constants.Divider>
                    <constants.Row>
                        <constants.Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={6} style={{ padding: '10px 10px 0' }}>
                            <constants.Space size="small">
                                <constants.Avatar
                                    style={{ width: 60, height: 60 }}
                                    src="https://joeschmoe.io/api/v1/random"
                                />
                                <constants.Space direction="vertical" size="small">
                                    <constants.Title level={5} style={{ margin: 0 }}>
                                        Nguyen Trung1
                                    </constants.Title>
                                    <constants.Text type="secondary" style={{ fontSize: 16 }}>
                                        trung123
                                    </constants.Text>
                                </constants.Space>
                            </constants.Space>
                        </constants.Col>
                        <constants.Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={6} style={{ padding: '10px 10px 0' }}>
                            <constants.Space size="small">
                                <constants.Avatar
                                    style={{ width: 60, height: 60 }}
                                    src="https://joeschmoe.io/api/v1/random"
                                />
                                <constants.Space direction="vertical" size="small">
                                    <constants.Title level={5} style={{ margin: 0 }}>
                                        Nguyen Trung1
                                    </constants.Title>
                                    <constants.Text type="secondary" style={{ fontSize: 16 }}>
                                        trung123
                                    </constants.Text>
                                </constants.Space>
                            </constants.Space>
                        </constants.Col>
                        <constants.Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={6} style={{ padding: '10px 10px 0' }}>
                            <constants.Space size="small">
                                <constants.Avatar
                                    style={{ width: 60, height: 60 }}
                                    src="https://joeschmoe.io/api/v1/random"
                                />
                                <constants.Space direction="vertical" size="small">
                                    <constants.Title level={5} style={{ margin: 0 }}>
                                        Nguyen Trung1
                                    </constants.Title>
                                    <constants.Text type="secondary" style={{ fontSize: 16 }}>
                                        trung123
                                    </constants.Text>
                                </constants.Space>
                            </constants.Space>
                        </constants.Col>
                        <constants.Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={6} style={{ padding: '10px 10px 0' }}>
                            <constants.Space size="small">
                                <constants.Avatar
                                    style={{ width: 60, height: 60 }}
                                    src="https://joeschmoe.io/api/v1/random"
                                />
                                <constants.Space direction="vertical" size="small">
                                    <constants.Title level={5} style={{ margin: 0 }}>
                                        Nguyen Trung1
                                    </constants.Title>
                                    <constants.Text type="secondary" style={{ fontSize: 16 }}>
                                        trung123
                                    </constants.Text>
                                </constants.Space>
                            </constants.Space>
                        </constants.Col>
                    </constants.Row>
                </constants.Card>
                {/* reviews */}
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Divider orientation="left">Bình luận </constants.Divider>
                    <constants.List
                        header={`${data.length} bình luận`}
                        itemLayout="horizontal"
                        style={{ padding: 10 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <li>
                                <constants.Comment
                                    actions={item.actions}
                                    author={item.author}
                                    avatar={item.avatar}
                                    content={item.content}
                                    datetime={item.datetime}
                                />
                            </li>
                        )}
                    />
                </constants.Card>
            </constants.Space>

            <ReviewModal />
        </div>
    )
}

export default BookInfoPage
