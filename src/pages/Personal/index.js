import { constants } from '~/components/Layouts'
import ActivitiesTab from './Activities.js'
import LibraryTab from './Library.js'
import FollowingTab from './Following.js'
import HistoryTab from './History.js'
import InfoTab from './Info.js'
function PersonalPage() {
    return (
        <div
            style={{
                padding: '40px 90px',
                marginTop: 10,
                backgroundColor: '#fff',
            }}
        >
            <constants.Row style={{ marginBottom: 60 }}>
                <constants.Col span="4" style={{}}>
                    <constants.Avatar style={{ width: 150, height: 150 }} src="https://joeschmoe.io/api/v1/random" />
                </constants.Col>
                <constants.Col span="20">
                    <constants.Space direction="vertical" size="middle">
                        <constants.Title level={3} style={{ margin: 0 }}>
                            Nguyễn Viết Thành Trung
                        </constants.Title>
                        <constants.Text type="secondary" style={{ fontSize: 20 }}>
                            _j4s0ntr
                        </constants.Text>
                        <constants.Text type="default" style={{}}>
                            <constants.Text strong>Thể loại yêu thích: </constants.Text>
                            Trinh thám, Khoa học viễn tưởng
                        </constants.Text>
                        <constants.Space size="large">
                            <constants.Text>
                                <constants.UsergroupAddOutlined style={{ marginRight: 6 }} />
                                <constants.Text strong>168 </constants.Text>
                                người theo dõi
                            </constants.Text>
                            <constants.Text>
                                <constants.BookOutlined style={{ marginRight: 6 }} />
                                <constants.Text strong>24 </constants.Text>
                                sách
                            </constants.Text>
                            <constants.Text>
                                <constants.HeartOutlined style={{ marginRight: 6 }} />
                                <constants.Text strong>16 </constants.Text>
                                lượt yêu thích
                            </constants.Text>
                        </constants.Space>
                    </constants.Space>
                </constants.Col>
            </constants.Row>
            <constants.Tabs type="card" size="large" tabBarGutter={20} centered>
                <constants.TabPane tab="Hoạt động" key="1" activeKey style={{ paddingTop: 20 }}>
                    <ActivitiesTab />
                </constants.TabPane>
                <constants.TabPane tab="Thư viện" key="2" style={{ paddingTop: 20 }}>
                    <LibraryTab />
                </constants.TabPane>
                <constants.TabPane tab="Đang theo dõi" key="3" style={{ paddingTop: 20 }}>
                    <FollowingTab />
                </constants.TabPane>
                <constants.TabPane tab="Lịch sử trao đổi" key="4" style={{ paddingTop: 20 }}>
                    <HistoryTab />
                </constants.TabPane>
                <constants.TabPane tab="Thông tin cá nhân" key="5" style={{ paddingTop: 20 }}>
                    <InfoTab />
                </constants.TabPane>
            </constants.Tabs>
        </div>
    )
}

export default PersonalPage
