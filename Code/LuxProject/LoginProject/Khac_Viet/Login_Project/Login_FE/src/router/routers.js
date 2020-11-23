import LoginPage from "./../pages/login"

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    }
]

export default routes;