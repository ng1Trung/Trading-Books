import HeaderLayout from './Header'
import FooterLayout from './Footer'
import SidebarLayout from './Sidebar'

function DefaultLayout({ children }) {
    return (
        <>
            <HeaderLayout />
            <SidebarLayout />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <FooterLayout />
        </>
    )
}

export default DefaultLayout
