import { useState, useRef } from 'react'

import { constants } from '~/components/Layouts'
import styles from '~/components/Layouts/Layouts.module.scss'
import { handleCreateUserApi } from '~/services/userServices'
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
    const inputName = useRef()

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phoneNumber: '',
        gender: '',
        birthDay: '',
        favoriteTypes: '',
    })

    const handleInputsChange = (event) => {
        const value = event.target.value
        setInputs((prev) => ({ ...prev, [inputName.current.input.name]: value }))
    }

    const handleSelectChange = (value) => {
        return (inputs.gender = value)
    }

    const checkValidate = () => {
        let isValid = true
        const inputsName = [
            'fullName',
            'username',
            'email',
            'password',
            'confirmPassword',
            'address',
            'phoneNumber',
            'gender',
            'birthDay',
            'favoriteTypes',
        ]
        for (let i = 0; i < inputsName.length; i++) {
            // console.log(inputs[inputsName[i]])
            if (!inputs[inputsName[i]]) {
                isValid = false
                constants.message.warning('Missing parameter ' + inputsName[i])
                // console.log('Missing parameter ' + inputsName[i])
                break
            }
        }
        return isValid
    }

    const handleCreateUser = async () => {
        try {
            let isValid = checkValidate()
            if (isValid) {
                const userData = await handleCreateUserApi(inputs)
                if (userData && userData.errorCode !== 0) {
                    constants.message.warning(userData.data.message)
                    // console.log(inputs.email)
                    // console.log(userData.data.message)
                }
                if (userData && userData.errorCode === 0) {
                    setInputs({
                        fullName: inputs.fullName,
                        username: inputs.username,
                        email: inputs.email,
                        password: inputs.password,
                        confirmPassword: inputs.confirmPassword,
                        address: inputs.address,
                        phoneNumber: inputs.phoneNumber,
                        gender: inputs.gender,
                        birthDay: inputs.birthDay,
                        favoriteTypes: inputs.favoriteTypes,
                    })
                    constants.message.success(userData.data.message)
                    // console.log(userData.data.message)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
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
                        label="Họ tên"
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
                        <constants.Input
                            onChange={handleInputsChange}
                            name="fullName"
                            ref={inputName}
                            value={inputs.fullName}
                        />
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
                        <constants.Input
                            onChange={handleInputsChange}
                            name="username"
                            ref={inputName}
                            value={inputs.username}
                        />
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
                        <constants.Input
                            onChange={handleInputsChange}
                            name="email"
                            ref={inputName}
                            value={inputs.email}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <constants.Input.Password
                            onChange={handleInputsChange}
                            name="password"
                            ref={inputName}
                            value={inputs.password}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="confirmPassword"
                        label="Nhập lại mật khẩu"
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
                        <constants.Input.Password
                            onChange={handleInputsChange}
                            name="confirmPassword"
                            ref={inputName}
                            value={inputs.confirmPassword}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="address"
                        label="Địa chỉ"
                        tooltip="Thanh phố / Tỉnh thành"
                        rules={[{ required: true, message: 'Please input your address!' }]}
                    >
                        <constants.Input
                            onChange={handleInputsChange}
                            name="address"
                            ref={inputName}
                            value={inputs.address}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="phoneNumber"
                        label="Số điện thoại"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <constants.Input
                            addonBefore="+84"
                            onChange={handleInputsChange}
                            name="phoneNumber"
                            ref={inputName}
                            value={inputs.phoneNumber}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="gender"
                        label="Giới tính"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your gender!',
                            },
                        ]}
                    >
                        <constants.Select placeholder="Chọn giới tính" onChange={handleSelectChange}>
                            <constants.Option value="0" ref={inputName}>
                                Nam
                            </constants.Option>
                            <constants.Option value="1" ref={inputName}>
                                Nữ
                            </constants.Option>
                        </constants.Select>
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="birthDay"
                        label="Ngày/tháng/năm sinh"
                        tooltip="DD/MM/YYYY"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your date of birth!',
                            },
                        ]}
                    >
                        <constants.Input
                            name="birthDay"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.birthDay}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="favoriteTypes"
                        label="Thể loại sách yêu thích"
                        tooltip="Trinh thám, Khoa học viễn tưởng ..."
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <constants.Input
                            onChange={handleInputsChange}
                            name="favoriteTypes"
                            ref={inputName}
                            value={inputs.favoriteTypes}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item>
                        <constants.Row>
                            <constants.Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <constants.Button type="link" href="/login" shape="round">
                                    Đăng nhập
                                </constants.Button>
                            </constants.Col>
                            <constants.Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <constants.Button
                                    type="primary"
                                    shape="round"
                                    htmlType="submit"
                                    onClick={handleCreateUser}
                                >
                                    Đăng ký
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
