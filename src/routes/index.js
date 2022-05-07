import HomePage from '~/pages/Home'
import PersonalPage from '~/pages/Personal'
import AddBookPage from '~/pages/AddBook'
import SearchPage from '~/pages/Search'

import { NoSidebarLayout } from '~/components/Layouts'

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/personal',
        component: PersonalPage,
    },
    {
        path: '/addbook',
        component: AddBookPage,
        layout: NoSidebarLayout,
    },
    {
        path: '/search',
        component: SearchPage,
        layout: null,
    },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
