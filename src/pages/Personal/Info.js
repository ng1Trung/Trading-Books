import { constants } from '~/components/Layouts'

function InfoTab() {
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    }

    return (
        <constants.Card style={{ borderRadius: 15 }} bodyStyle={{ padding: 60 }}>
            <constants.Form {...formItemLayout} name="register" scrollToFirstError labelAlign="left">
                <constants.Form.Item
                    name="fullName"
                    label="Họ tên"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid full name',
                        },
                        {
                            message: 'Please input your full name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <constants.Input defaultValue="Nguyễn Viết Thành Trung" disabled></constants.Input>
                </constants.Form.Item>
                <constants.Form.Item
                    name="username"
                    label="Nickname"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid username',
                        },
                        {
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <constants.Input />
                </constants.Form.Item>
                <constants.Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid e-mail!',
                        },
                        {
                            message: 'Please input your e-mail!',
                        },
                    ]}
                >
                    <constants.Input />
                </constants.Form.Item>
                <constants.Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[
                        {
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <constants.Input.Password />
                </constants.Form.Item>
                <constants.Form.Item name="address" label="Address" rules={[{ message: 'Please input your address!' }]}>
                    <constants.Input />
                </constants.Form.Item>
                <constants.Form.Item
                    name="phoneNumber"
                    label="Số điện thoại"
                    rules={[
                        {
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <constants.Input addonBefore="+84" />
                </constants.Form.Item>
                <constants.Form.Item
                    name="gender"
                    label="Giới tính"
                    rules={[
                        {
                            message: 'Please select your gender!',
                        },
                    ]}
                >
                    <constants.Select placeholder="Select your gender">
                        <constants.Option value="male">Male</constants.Option>
                        <constants.Option value="female">Female</constants.Option>
                        <constants.Option value="other">Other</constants.Option>
                    </constants.Select>
                </constants.Form.Item>
                <constants.Form.Item
                    name="birthDay"
                    label="Năm sinh"
                    tooltip="DD/MM/YYYY"
                    rules={[
                        {
                            message: 'Please input your date of birth!',
                        },
                    ]}
                >
                    <constants.Input />
                </constants.Form.Item>
                <constants.Form.Item name="favoriteBook" label="Thể loại sách yêu thích">
                    <constants.Input />
                </constants.Form.Item>
                <constants.Form.Item>
                    <constants.Space size="large">
                        <constants.Button type="primary" shape="round" htmlType="submit">
                            Lưu
                        </constants.Button>
                    </constants.Space>
                </constants.Form.Item>
            </constants.Form>
        </constants.Card>
    )
}

export default InfoTab
