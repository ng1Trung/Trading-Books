import { useState, useRef } from 'react'
import { constants } from '~/components/Layouts'
import { handleCreateBookApi } from '~/services/bookServices.js'
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

    const inputName = useRef()
    const [inputs, setInputs] = useState({
        title: '',
        author: '',
        category: '',
        language: '',
        publisher: '',
        publishing: '',
        thumbnail: '',
        description: '',
    })

    const checkValidate = () => {
        let isValid = true
        const inputsName = ['title', 'author', 'category', 'language', 'publisher', 'publishing', 'description']
        for (let i = 0; i < inputsName.length; i++) {
            if (!inputs[inputsName[i]]) {
                isValid = false
                constants.message.warning('Missing parameter ' + inputsName[i])
                break
            }
        }
        return isValid
    }

    const getThumbnail = ({ fileList: newFileList }) => {
        setInputs((prev) => ({ ...prev, thumbnail: newFileList[0].name }))
    }

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok')
        }, 0)
    }

    const handleInputsChange = (event) => {
        const value = event.target.value
        setInputs((prev) => ({
            ...prev,
            [inputName.current.input.name]: value,
        }))
    }

    const handCreateBook = async () => {
        try {
            let isValid = checkValidate()
            if (isValid) {
                const bookData = await handleCreateBookApi(inputs)
                if (bookData && bookData.errorCode !== 0) {
                    constants.message.warning(bookData.data.message)
                    // console.log(inputs.email)
                    // console.log(bookData.data.message)
                }
                if (bookData && bookData.errorCode === 0) {
                    setInputs({
                        title: inputs.title,
                        author: inputs.author,
                        category: inputs.category,
                        language: inputs.language,
                        publisher: inputs.publisher,
                        publishing: inputs.publishing,
                        thumbnail: inputs.thumbnail,
                        description: inputs.description,
                    })
                    constants.message.success(bookData.data.message)
                    // console.log(bookData.data.message)
                }
            }
            console.log(inputs)
        } catch (error) {
            console.log(error)
        }
        // console.log(inputs)
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
                        <constants.Input
                            name="title"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.title}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="author"
                        label="Tác giả"
                        rules={[{ required: true, message: 'Please input book author!', whitespace: true }]}
                    >
                        <constants.Input
                            name="author"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.author}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="category"
                        label="Thể loại"
                        rules={[{ required: true, message: 'Please input book category!', whitespace: true }]}
                    >
                        <constants.Input
                            name="category"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.category}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="language"
                        label="Ngôn ngữ"
                        rules={[{ required: true, message: 'Please input book language!', whitespace: true }]}
                    >
                        <constants.Input
                            name="language"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.language}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="publisher"
                        label="Nhà xuất bản"
                        rules={[{ required: true, message: 'Please input book publisher!', whitespace: true }]}
                    >
                        <constants.Input
                            name="publisher"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.publisher}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="publishing"
                        label="Năm xuất bản"
                        rules={[{ required: true, message: 'Please input book publishing!', whitespace: true }]}
                    >
                        <constants.Input
                            name="publishing"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.publishing}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item name="thumbnail" label="Ảnh minh họa">
                        <constants.Upload
                            name="thumbnail"
                            // action="http://localhost:3000"
                            listType="picture-card"
                            status="done"
                            customRequest={dummyRequest}
                            maxCount={1}
                            onChange={getThumbnail}
                        >
                            <constants.UploadOutlined />
                            Tải ảnh lên
                        </constants.Upload>
                    </constants.Form.Item>
                    <constants.Form.Item
                        name="description"
                        label="Miêu tả"
                        rules={[{ required: true, message: 'Please input book description!', whitespace: true }]}
                    >
                        <constants.Input
                            name="description"
                            ref={inputName}
                            onChange={handleInputsChange}
                            value={inputs.description}
                        />
                    </constants.Form.Item>
                    <constants.Form.Item style={{ float: 'right', margin: '20px 0 0' }}>
                        <constants.Button type="primary" shape="round" htmlType="submit" onClick={handCreateBook}>
                            Thêm sách
                        </constants.Button>
                    </constants.Form.Item>
                </constants.Card>
            </constants.Form>
        </div>
    )
}

export default AddBookPage
