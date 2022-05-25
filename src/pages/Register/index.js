import { constants } from '~/components/Layouts'
import styles from '~/components/Layouts/Layouts.module.scss'

function RegisterPage() {
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

    // const tailFormItemLayout = {
    //     wrapperCol: {
    //         xs: {
    //             span: 24,
    //             offset: 0,
    //         },
    //         sm: {
    //             span: 16,
    //             offset: 8,
    //         },
    //     },
    // }

    return (
        <div className={styles.container}>
            <constants.Card
                style={{
                    borderRadius: 15,
                    height: 800,
                    width: 700,
                    margin: 'auto',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <constants.Title level={1}>Đăng ký</constants.Title>
                <constants.Form {...formItemLayout} size="large" name="register" scrollToFirstError labelAlign="left">
                    <constants.Form.Item
                        name="fullName"
                        label="Full name"
                        rules={[
                            {
                                type: 'string',
                                message: 'The input is not valid full name',
                            },
                            {
                                required: true,
                                message: 'Please input your full name!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            {
                                type: 'string',
                                message: 'The input is not valid username',
                            },
                            {
                                required: true,
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
                                required: true,
                                message: 'Please input your e-mail!',
                            },
                        ]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <constants.Input.Password />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve()
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'))
                                },
                            }),
                        ]}
                    >
                        <constants.Input.Password />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="address"
                        label="Address"
                        tooltip="City or detail"
                        rules={[{ required: true, message: 'Please input your address!' }]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="phoneNumber"
                        label="Phone number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <constants.Input addonBefore="+84" />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
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
                        label="Date of birth"
                        tooltip="DD/MM/YYYY"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your date of birth!',
                            },
                        ]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="favoriteBook"
                        label="Favorite types of books"
                        tooltip="DD/MM/YYYY"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <constants.Input />
                    </constants.Form.Item>
                    <constants.Form.Item>
                        <constants.Row>
                            <constants.Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <constants.Button type="link" href="/login" shape="round">
                                    Log In
                                </constants.Button>
                            </constants.Col>
                            <constants.Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <constants.Button type="primary" shape="round" htmlType="submit">
                                    Register
                                </constants.Button>
                            </constants.Col>
                        </constants.Row>
                    </constants.Form.Item>
                </constants.Form>
            </constants.Card>
        </div>
    )
}

export default RegisterPage
