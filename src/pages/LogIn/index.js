import { useState } from 'react'

import { constants } from '~/components/Layouts'
import styles from '~/components/Layouts/Layouts.module.scss'
import { handleLoginApi } from '~/services/userServices'

function LogInPage() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputs = (event) => {
        const value = event.target.value
        setInputs((prev) => ({ ...prev, [event.target.name]: value }))
        // console.log(inputs)
    }

    const handleLogin = async () => {
        setErrorMessage('')
        try {
            const userData = await handleLoginApi(inputs.email, inputs.password)
            if (userData && userData.errorCode !== 0) {
                constants.message.warning(userData.message)
            }
            if (userData && userData.errorCode === 0) {
                // setErrorMessage(userData.message)
                constants.message.success(userData.message)
            }
            // console.log(userData.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <constants.Card
                style={{
                    height: 400,
                    width: 576,
                    borderRadius: 15,
                    margin: 'auto',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <constants.Title level={1}>Đăng nhập</constants.Title>
                <constants.Form
                    size="large"
                    name="login"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <constants.Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <constants.Input
                            onChange={handleInputs}
                            name="email"
                            placeholder="Email"
                            prefix={<constants.UserOutlined />}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <constants.Input.Password
                            prefix={<constants.LockOutlined />}
                            type="password"
                            name="password"
                            onChange={handleInputs}
                            placeholder="Mật khẩu"
                        />
                    </constants.Form.Item>
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                    <constants.Form.Item>
                        <constants.Row justify="space-around">
                            <constants.Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <constants.Button align="left" type="link" href="/register" shape="round">
                                    Đăng ký
                                </constants.Button>
                            </constants.Col>
                            <constants.Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <constants.Button
                                    align="end"
                                    type="primary"
                                    shape="round"
                                    htmlType="submit"
                                    onClick={handleLogin}
                                >
                                    Đăng nhập
                                </constants.Button>
                            </constants.Col>
                        </constants.Row>
                    </constants.Form.Item>
                </constants.Form>
            </constants.Card>
        </div>
    )
}

export default LogInPage
