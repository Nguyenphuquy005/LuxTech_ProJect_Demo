import React from "react";
import HomePage from "./pages/homePage/HomePage"
import NotfoundPage from "./pages/notFoundPage/NotfoundPage"
import ProductListPage from "./pages/productListPage/ProductListPage"
import Axios from "./pages/productListPage/TestAxios"
import ProductActionPage from "./pages/productActionPage/ProductActionPage"
import CreateOxios from "./pages/productListPage/CreateOxios"
import Tutorial from "./pages/productListPage/Tutorial"
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: true,
        main: () => <ProductListPage />


    },
    {
        path: '/add',
        exact: true,
        main: () => <CreateOxios />


    },
    {
        path: '/tutorials/:id',
        exact: true,
        main: () => <Tutorial />


    },
    {
        path: '/axios',
        exact: true,
        main: () => <Axios />


    },
    {
        path: '/product-action',
        exact: true,
        main: () => <ProductActionPage />


    },
    {
        path: '/:id/edit',
        exact: true,
        main: ({ match }) => <ProductActionPage match={match} />


    },
    {
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    }
]

export default routes;