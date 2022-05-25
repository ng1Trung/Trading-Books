import { constants } from '~/components/Layouts'
import { useRef } from 'react'
import './home.css'
const TradePage = () => {
    const ellipsis = true
    const slider = useRef()
    const carouselSettings = {
        autoplay: true,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    return (
        <div
            style={{
                marginTop: 10,
                padding: '40px 90px',
                backgroundColor: '#fff',
            }}
        >
            {/* --------------------------carousel-------------------------- */}
            {/* common books */}
            <constants.Row style={{ paddingBottom: 40 }}>
                <constants.Col span={24}>
                    <constants.Divider orientation="left" style={{ fontSize: 20 }}>
                        Sách phổ biến
                    </constants.Divider>
                    <constants.Carousel ref={slider} {...carouselSettings}>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                    </constants.Carousel>
                </constants.Col>
            </constants.Row>
            {/* most traded books */}
            <constants.Row style={{ paddingBottom: 40 }}>
                <constants.Col span={24}>
                    <constants.Divider orientation="left" style={{ fontSize: 20 }}>
                        Sách được trao đổi nhiều
                    </constants.Divider>
                    <constants.Carousel ref={slider} {...carouselSettings}>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                    </constants.Carousel>
                </constants.Col>
            </constants.Row>
            {/* most liked books */}
            <constants.Row style={{ paddingBottom: 40 }}>
                <constants.Col span={24}>
                    <constants.Divider orientation="left" style={{ fontSize: 20 }}>
                        Sách được ưa chuộng
                    </constants.Divider>
                    <constants.Carousel ref={slider} {...carouselSettings}>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                        <div>
                            <constants.Space
                                size={0}
                                direction="vertical"
                                align="center"
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                <constants.Image
                                    src="bookImages/Khu-Vườn-Bí-Mật-Frances-Hodgson-Burnett.png"
                                    style={{ width: 160, height: 240 }}
                                />
                                <constants.Space
                                    direction="vertical"
                                    size={0}
                                    align="center"
                                    style={{ overflow: 'hidden', padding: 8 }}
                                >
                                    <constants.Link href="/bookinfo" target="_blank">
                                        <constants.Text
                                            strong
                                            type="primary"
                                            ellipsis={ellipsis ? { tooltip: 'Khu vườn bí mật' } : false}
                                            style={ellipsis ? { width: 180, textAlign: 'center' } : undefined}
                                        >
                                            Khu Vườn Bí Mật
                                        </constants.Text>
                                    </constants.Link>
                                    <constants.Text type="secondary">Frances Burnett</constants.Text>
                                    <constants.Text type="secondary">2014</constants.Text>
                                    <constants.Rate allowHalf disabled defaultValue={4.5} />
                                </constants.Space>
                                <constants.Button type="primary">
                                    <constants.Link href="/trade" target="_blank">
                                        Trao đổi
                                    </constants.Link>
                                </constants.Button>
                            </constants.Space>
                        </div>
                    </constants.Carousel>
                </constants.Col>
            </constants.Row>
        </div>
    )
}

export default TradePage
