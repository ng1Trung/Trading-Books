import { constants } from '~/components/Layouts'

function AddBookPage() {
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 18,
            },
        },
    }
    return (
        <div
            style={{
                padding: '40px 90px',
                marginTop: 10,
                backgroundColor: '#fff',
            }}
        >
            <constants.Title level={3}>Thêm sách mới vào thư viện</constants.Title>
            <constants.Form {...formItemLayout} size="large" name="addBook" scrollToFirstError labelAlign="left">
                <constants.Card>
                    <constants.Form.Item
                        name="title"
                        label="Tiêu đề"
                        rules={[{ required: true, message: 'Please input book title!', whitespace: true }]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="author"
                        label="Tác giả"
                        rules={[{ required: true, message: 'Please input book author!', whitespace: true }]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="type"
                        label="Thể loại"
                        rules={[{ required: true, message: 'Please input book type!', whitespace: true }]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="language"
                        label="Ngôn ngữ"
                        rules={[{ required: true, message: 'Please input book language!', whitespace: true }]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="publisher"
                        label="Nhà xuất bản"
                        rules={[{ required: true, message: 'Please input book publisher!', whitespace: true }]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="publishing"
                        label="Năm xuất bản"
                        rules={[{ required: true, message: 'Please input book publishing!', whitespace: true }]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="image"
                        label="Ảnh "
                        rules={[{ required: true, message: 'Please upload book image!' }]}
                    >
                        <constants.Upload status="done" name="upload" action="/upload.do" listType="picture">
                            <constants.Button icon={<constants.UploadOutlined />}>Tải ảnh lên </constants.Button>
                        </constants.Upload>
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="description"
                        label="Miêu tả"
                        rules={[{ required: true, message: 'Please input book description!', whitespace: true }]}
                    >
                        <constants.TextArea showCount maxLength={255} allowClear />
                    </constants.Form.Item>
                    <constants.Form.Item style={{ float: 'right', margin: '20px 0 0' }}>
                        <constants.Button type="primary" shape="round" htmlType="submit">
                            Thêm sách
                        </constants.Button>
                    </constants.Form.Item>
                </constants.Card>
            </constants.Form>
        </div>
    )
}

export default AddBookPage
