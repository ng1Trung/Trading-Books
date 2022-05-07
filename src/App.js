import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'

import { publicRoutes } from '~/routes'
import DefaultLayout from '~/components/Layouts/DefaultLayout'

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
                                        <Page />
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
