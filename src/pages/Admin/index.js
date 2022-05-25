// import { constants } from '~/components/Layouts'

// function AdminPage() {
//     const items = [
//         {
//             label: 'Quản lý khách hàng',
//             icon: <constants.HomeOutlined />,
//             key: 'item-1',
//         },
//         {
//             label: 'Quản lý sách',
//             icon: <constants.ClockCircleOutlined />,
//             key: 'item-2',
//         },
//         {
//             label: 'Yêu cầu',
//             icon: <constants.ReadOutlined />,
//             key: 'item-3',
//         },
//     ]
//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//             render: (text) => <a>{text}</a>,
//         },
//         {
//             title: 'Age',
//             dataIndex: 'age',
//             key: 'age',
//         },
//         {
//             title: 'Address',
//             dataIndex: 'address',
//             key: 'address',
//         },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (text, record) => (
//                 <constants.Space size="middle">
//                     <a>Sửa</a>
//                     <a>Xóa</a>
//                 </constants.Space>
//             ),
//         },
//     ]

//     const data = [
//         {
//             key: '1',
//             name: 'John Brown',
//             age: 32,
//             address: 'New York No. 1 Lake Park',
//         },
//         {
//             key: '2',
//             name: 'Jim Green',
//             age: 42,
//             address: 'London No. 1 Lake Park',
//         },
//         {
//             key: '3',
//             name: 'Joe Black',
//             age: 32,
//             address: 'Sidney No. 1 Lake Park',
//         },
//     ]
//     return (
//         <constants.Layout>
//             <constants.Sider theme="light" style={{ paddingTop: 60, backgroundColor: '#f0e3e1' }}>
//                 <constants.Menu
//                     style={{ backgroundColor: '#f0e3e1' }}
//                     mode="inline"
//                     defaultSelectedKeys={['item-1']}
//                     items={items}
//                 />
//             </constants.Sider>
//             <constants.Layout>
//                 <constants.Header style={{ padding: 0, backgroundColor: '#f0e3e1' }}>Logo Đăng xuất</constants.Header>
//                 <constants.Content style={{ margin: '24px 16px 0', minHeight: '100vh' }}>
//                     <constants.Table columns={columns} dataSource={data} />
//                 </constants.Content>
//                 <constants.Footer style={{ textAlign: 'center', backgroundColor: '#f0e3e1' }}>
//                     Trading Book Final Project Created by _j4s0ntr
//                 </constants.Footer>
//             </constants.Layout>
//         </constants.Layout>
//     )
// }

// export default AdminPage
