import { constants } from '~/components/Layouts'
import HeaderLayout from '~/components/Layouts/DefaultLayout/Header'
import FooterLayout from '~/components/Layouts/DefaultLayout/Footer'

function NoSidebarLayout({ children }) {
    return (
        <constants.Layout style={{ minHeight: '100vh' }}>
            <HeaderLayout />
            <constants.Content style={{ width: 1200, margin: '64px auto 10px' }}>{children}</constants.Content>
            <FooterLayout />
        </constants.Layout>
    )
}

export default NoSidebarLayout
