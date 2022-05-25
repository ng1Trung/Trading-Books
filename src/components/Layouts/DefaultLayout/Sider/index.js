import { memo } from 'react'
import { constants } from '~/components/Layouts'

function SiderLayout() {
    const items = [
        {
            label: (
                <constants.Link href="/" style={{ color: '#333' }}>
                    Trang chủ
                </constants.Link>
            ),
            icon: <constants.HomeOutlined />,
            key: 'item-1',
        },
        {
            label: (
                <constants.Link href="/personal" style={{ color: '#333' }}>
                    Hoạt động gần đây
                </constants.Link>
            ),
            icon: <constants.ClockCircleOutlined />,
            key: 'item-2',
        },
        {
            label: (
                <constants.Link href="/personal" style={{ color: '#333' }}>
                    Thư viện
                </constants.Link>
            ),
            icon: <constants.ReadOutlined />,
            key: 'item-3',
        },
        {
            label: (
                <constants.Link href="/addbook" style={{ color: '#333' }}>
                    Thêm sách mới
                </constants.Link>
            ),
            icon: <constants.DiffOutlined />,
            key: 'item-4',
        },
    ]
    return <constants.Menu items={items} style={{ fontSize: 14, paddingTop: 40, backgroundColor: '#f0f2f5' }} />
}

export default memo(SiderLayout)
