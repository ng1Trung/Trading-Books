import HomePage from '~/pages/Home'
import PersonalPage from '~/pages/Personal'
import AddBookPage from '~/pages/AddBook'
import TradePage from '~/pages/Trade'
import RegisterPage from '~/pages/Register'
import LogInPage from '~/pages/LogIn'
import BookInfoPage from '~/pages/BookInfo'
import AdminPage from '~/pages/Admin'

import { DefaultLayout } from '~/components/Layouts'

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        path: '/personal',
        component: PersonalPage,
    },
    {
        path: '/addbook',
        component: AddBookPage,
        layout: DefaultLayout,
    },
    {
        path: '/trade',
        component: TradePage,
    },
    {
        path: '/register',
        component: RegisterPage,
        layout: null,
    },
    {
        path: '/login',
        component: LogInPage,
        layout: null,
    },
    {
        path: '/bookinfo',
        component: BookInfoPage,
        layout: DefaultLayout,
    },
    {
        path: '/admin',
        component: AdminPage,
        layout: null,
    },
]

export default publicRoutes
