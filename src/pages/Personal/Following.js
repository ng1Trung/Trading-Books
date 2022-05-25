import { constants } from '~/components/Layouts'
import { useState } from 'react'

function FollowingTab() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    const DrawerItem = ({
        fullname,
        username,
        address,
        gender,
        birthday,
        favBooks,
        followers,
        books,
        email,
        phoneNumber,
        fbURL,
    }) => {
        return (
            <constants.Drawer width={640} placement="right" onClose={onClose} visible={visible}>
                <constants.Divider style={{ padding: '20px 0 8px' }}>Thông tin cá nhân</constants.Divider>
                <constants.Row style={{ marginBottom: 10 }}>
                    <constants.Col span={12}>
                        <constants.Text>Họ tên: </constants.Text>
                        <constants.Text type="secondary">{fullname}</constants.Text>
                    </constants.Col>
                    <constants.Col span={12}>
                        <constants.Text>Nickname: </constants.Text>
                        <constants.Text type="secondary">{username}</constants.Text>
                    </constants.Col>
                </constants.Row>
                <constants.Row style={{ marginBottom: 10 }}>
                    <constants.Col span={8}>
                        <constants.Text>Địa chỉ: </constants.Text>
                        <constants.Text type="secondary">{address}</constants.Text>
                    </constants.Col>
                    <constants.Col span={8}>
                        <constants.Text>Giới tính: </constants.Text>
                        <constants.Text type="secondary">{gender}</constants.Text>
                    </constants.Col>
                    <constants.Col span={8}>
                        <constants.Text>Năm sinh: </constants.Text>
                        <constants.Text type="secondary">{birthday}</constants.Text>
                    </constants.Col>
                </constants.Row>
                <constants.Row style={{ marginBottom: 10 }}>
                    <constants.Col span={24}>
                        <constants.Text>Thể loại sách yêu thích: </constants.Text>
                        <constants.Text type="secondary">{favBooks}</constants.Text>
                    </constants.Col>
                </constants.Row>
                <constants.Row style={{ marginBottom: 10 }}>
                    <constants.Col span={8}>
                        <constants.Text>Người theo dõi: </constants.Text>
                        <constants.Text type="secondary">{followers}</constants.Text>
                    </constants.Col>
                    <constants.Col span={8}>
                        <constants.Text>Sách hiện có: </constants.Text>
                        <constants.Text type="secondary">{books}</constants.Text>
                    </constants.Col>
                </constants.Row>
                <constants.Divider style={{ padding: '20px 0 8px' }}>Liên lạc</constants.Divider>
                <constants.Row style={{ marginBottom: 10 }}>
                    <constants.Col span={12}>
                        <constants.Text>Email: </constants.Text>
                        <constants.Text type="secondary">{email}</constants.Text>
                    </constants.Col>
                    <constants.Col span={12}>
                        <constants.Text>Số điện thoại: </constants.Text>
                        <constants.Text type="secondary">{phoneNumber}</constants.Text>
                    </constants.Col>
                </constants.Row>
                <constants.Row>
                    <constants.Col span={24}>
                        <constants.Text>Link Facebook: </constants.Text>
                        <constants.Link href="https://www.facebook.com/" target="_blank">
                            {fbURL}
                        </constants.Link>
                    </constants.Col>
                </constants.Row>
            </constants.Drawer>
        )
    }
    const FollowingTabItem = ({ fullname, username, avatar, favBooks }) => {
        return (
            <constants.Card style={{ borderRadius: 15 }}>
                <constants.Space>
                    <constants.Avatar style={{ width: 100, height: 100 }} src={avatar} />
                    <constants.Space direction="vertical" size="small">
                        <constants.Title level={3} style={{ margin: 0 }}>
                            {fullname}
                        </constants.Title>
                        <constants.Text type="secondary" style={{ fontSize: 20 }}>
                            {username}
                        </constants.Text>
                        <constants.Link onClick={showDrawer}>Xem thông tin</constants.Link>
                    </constants.Space>
                    <DrawerItem
                        fullname="Nguyễn Viết Thành Trung"
                        username="_j4s0ntr"
                        address="Hà Nội"
                        gender="Nam"
                        birthday="04/05/2000"
                        favBooks="Trinh thám, Khoa học viễn tưởng"
                        followers="168"
                        books="24"
                        email="ngtrung4520@gmail.com"
                        phoneNumber="0966462601"
                        fbURL="https://www.facebook.com/"
                    />
                </constants.Space>
            </constants.Card>
        )
    }

    return (
        <constants.Row gutter={[16, 24]}>
            <constants.Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                <FollowingTabItem
                    fullname="Nguyễn Viết Thành Trung"
                    username="_j4s0ntr"
                    avatar="https://joeschmoe.io/api/v1/random"
                    favBooks="Trinh thám, Khoa học viễn tưởng"
                    followed="168"
                    books="24"
                    liked="16"
                    title="Khu Vườn Bí Mật"
                    author="Frances Burnett"
                    publishing="2014"
                    srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                />
            </constants.Col>
            <constants.Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                <FollowingTabItem
                    fullname="Nguyễn Viết Thành Trung1"
                    username="_j4s0ntr1"
                    avatar="https://joeschmoe.io/api/v1/random"
                    favBooks="Trinh thám, Khoa học viễn tưởng"
                    followed="168"
                    books="24"
                    liked="16"
                    title="Khu Vườn Bí Mật"
                    author="Frances Burnett"
                    publishing="2014"
                    srcImage="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                />
            </constants.Col>
        </constants.Row>
    )
}

export default FollowingTab
