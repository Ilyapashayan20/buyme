import { lazy } from 'react'

import { ERoutePaths, TRoutePageType } from './types'

const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Auth/Login'))
const Signup = lazy(() => import('pages/Auth/Signup'))
const Basket = lazy(() => import('pages/Basket'))
const Saved = lazy(() => import('pages/Saved'))
const Placing = lazy(() => import('pages/Placing'))
const Product = lazy(() => import('pages/Product'))
const CategoriesPage = lazy(() => import('pages/CategoriesPage'))
const MainCategoriesPage = lazy(() => import('pages/MainCategory'))
const Profile = lazy(() => import('pages/Profile'))

const routesList: TRoutePageType[] = [
  {
    element: Home,
    path: ERoutePaths.Home,
    title: 'Home',
  },
  {
    element: Login,
    path: ERoutePaths.Login,
    title: 'Login page',
  },
  {
    element: Signup,
    path: ERoutePaths.Signup,
    title: 'Signup page',
  },
  {
    element: Basket,
    path: ERoutePaths.Basket,
    title: 'Basket page',
  },
  {
    element: Placing,
    path: ERoutePaths.Placing,
    title: 'Placing page',
  },
  {
    element: Saved,
    path: ERoutePaths.Saved,
    title: 'Saved items',
  },
  {
    element: Product,
    path: ERoutePaths.Product,
    title: 'Product Page',
  },

  {
    element: CategoriesPage,
    path: ERoutePaths.CategoriesPage,
    title: 'Categories Page',
  },
  {
    element: MainCategoriesPage,
    path: ERoutePaths.MainCategoriesPage,
    title: 'Categories Page',
  },
  {
    element:Profile,
    path: ERoutePaths.Profile,
    title: 'Profile Page',
  },
]

export default routesList
