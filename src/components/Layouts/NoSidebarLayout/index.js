import HeaderLayout from '../DefaultLayout/Header'
import FooterLayout from '../DefaultLayout/Footer'

function NoSidebarLayout({ children }) {
    return (
        <>
            <HeaderLayout />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <FooterLayout />
        </>
    )
}

export default NoSidebarLayout
