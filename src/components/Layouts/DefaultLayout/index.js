import { constants } from '~/components/Layouts'
import HeaderLayout from '~/components/Layouts/DefaultLayout/Header'
import FooterLayout from '~/components/Layouts/DefaultLayout/Footer'
import SiderLayout from '~/components/Layouts/DefaultLayout/Sider'

function DefaultLayout({ children }) {
    return (
        <constants.Layout style={{ minHeight: '100vh' }}>
            <HeaderLayout />
            <constants.Layout style={{ margin: '64px auto 10px', width: 1200 }}>
                <constants.Sider style={{ padding: 0, margin: '10px 10px 0 0', backgroundColor: '#f0f2f5' }}>
                    <SiderLayout />
                </constants.Sider>
                <constants.Content>{children}</constants.Content>
            </constants.Layout>
            <FooterLayout />
        </constants.Layout>
    )
}

export default DefaultLayout
