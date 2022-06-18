import { useState, useEffect, useReducer } from 'react'
import { constants } from '~/components/Layouts'
import { handleGetBookByStatusApi } from '~/services/bookServices.js'
function LibraryTab() {
    const ellipsis = true
    const [mineBooks, setMineBooks] = useState([])
    const [tradedBooks, setTradedBooks] = useState([])
    const [likedBooks, setLikedBooks] = useState([])
    const [hiddenBooks, setHiddenBooks] = useState([])

    useEffect(() => {
        handleGetBookByStatusApi('mine').then((response) => {
            if (response && response.data.errorCode === 0) {
                setMineBooks(response.data.books)
            }
        })
    }, [mineBooks])

    useEffect(() => {
        handleGetBookByStatusApi('traded').then((response) => {
            if (response && response.data.errorCode === 0) {
                setTradedBooks(response.data.books)
            }
        })
    }, [tradedBooks])

    useEffect(() => {
        handleGetBookByStatusApi('liked').then((response) => {
            if (response && response.data.errorCode === 0) {
                setLikedBooks(response.data.books)
            }
        })
    }, [likedBooks])

    useEffect(() => {
        handleGetBookByStatusApi('hidden').then((response) => {
            if (response && response.data.errorCode === 0) {
                setHiddenBooks(response.data.books)
            }
        })
    }, [hiddenBooks])

    return (
        <constants.Tabs defaultActiveKey="mine" size="large" tabBarGutter={60} centered>
            {/* mine books */}
            <constants.TabPane tab="Đang sở hữu" key="mine">
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        {mineBooks.map((book) => {
                            return (
                                <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                                    <constants.Image
                                        src={`/bookImages/${book.thumbnail}`}
                                        alt={book.title}
                                        style={{ width: 160, height: 220 }}
                                    />
                                    <constants.Space direction="vertical" size="small">
                                        <constants.Text strong>Tiêu đề: {book.title}</constants.Text>
                                        <constants.Text>Tác giả: {book.author}</constants.Text>
                                        <constants.Text>Năm xuất bản: {book.publishing}</constants.Text>
                                    </constants.Space>
                                </constants.Col>
                            )
                        })}
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
            {/* traded books */}
            <constants.TabPane tab="Đã trao đổi" key="traded">
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        {tradedBooks.map((book) => {
                            return (
                                <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                                    <constants.Image
                                        src={`/bookImages/${book.thumbnail}`}
                                        alt={book.title}
                                        style={{ width: 160, height: 220 }}
                                    />
                                    <constants.Space direction="vertical" size="small">
                                        <constants.Text strong>Tiêu đề: {book.title}</constants.Text>
                                        <constants.Text>Tác giả: {book.author}</constants.Text>
                                        <constants.Text>Năm xuất bản: {book.publishing}</constants.Text>
                                    </constants.Space>
                                </constants.Col>
                            )
                        })}
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
            {/* liked books */}
            <constants.TabPane tab="Đã thích" key="liked">
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        {likedBooks.map((book) => {
                            return (
                                <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                                    <constants.Image
                                        src={`/bookImages/${book.thumbnail}`}
                                        alt={book.title}
                                        style={{ width: 160, height: 220 }}
                                    />
                                    <constants.Space direction="vertical" size="small">
                                        <constants.Text strong>Tiêu đề: {book.title}</constants.Text>
                                        <constants.Text>Tác giả: {book.author}</constants.Text>
                                        <constants.Text>Năm xuất bản: {book.publishing}</constants.Text>
                                    </constants.Space>
                                </constants.Col>
                            )
                        })}
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
            {/* hidden books */}
            <constants.TabPane tab="Bị ẩn" key="hidden">
                <constants.Card style={{ borderRadius: 15 }}>
                    <constants.Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
                        {hiddenBooks.map((book) => {
                            return (
                                <constants.Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                                    <constants.Image
                                        src={`/bookImages/${book.thumbnail}`}
                                        alt={book.title}
                                        style={{ width: 160, height: 220 }}
                                    />
                                    <constants.Space direction="vertical" size="small">
                                        <constants.Text strong>Tiêu đề: {book.title}</constants.Text>
                                        <constants.Text>Tác giả: {book.author}</constants.Text>
                                        <constants.Text>Năm xuất bản: {book.publishing}</constants.Text>
                                    </constants.Space>
                                </constants.Col>
                            )
                        })}
                    </constants.Row>
                </constants.Card>
            </constants.TabPane>
        </constants.Tabs>
    )
}

export default LibraryTab
