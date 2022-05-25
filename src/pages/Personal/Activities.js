import { constants } from '~/components/Layouts'

function ActivitiesTab() {
    return (
        <constants.Card style={{ borderRadius: 15 }}>
            <constants.Divider style={{ marginBottom: 40 }}>Bạn đã thêm 1 sách mới vào thư viện</constants.Divider>
            <constants.Space size="large">
                <constants.Image
                    src="/bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                    style={{ width: 160, height: 220 }}
                />
                <constants.Space direction="vertical" size="middle">
                    <constants.Text strong>Tiêu đề: Khu vườn bí mật</constants.Text>
                    <constants.Text>Tác giả: Frances Burnett</constants.Text>
                    <constants.Text>Năm xuất bản: 2014</constants.Text>
                </constants.Space>
            </constants.Space>
        </constants.Card>
    )
}

export default ActivitiesTab
