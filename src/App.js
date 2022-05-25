import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import 'antd/dist/antd.min.css'
import publicRoutes from '~/routes'
import DefaultLayout from '~/components/Layouts/NoSidebarLayout'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout
                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }
                        const Page = route.component
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page /> {/*children of layout*/}
                                    </Layout>
                                }
                                key={index}
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
