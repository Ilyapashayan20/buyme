import { lazy } from 'react'

import { ERoutePaths, TRoutePageType } from './types'

const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Auth/Login'))
const Signup = lazy(() => import('pages/Auth/Signup'))
const Basket = lazy(() => import('pages/Basket'))
const Saved = lazy(() => import('pages/Saved'))
const Placing = lazy(() => import('pages/Placing'))
const Product = lazy(() => import('pages/Product'))

const routesList: TRoutePageType[] = [
  {
    element: Home,
    path: ERoutePaths.Home,
    title: 'Home',
  },
  {
    element: Login,
    path: ERoutePaths.Login,
    title: 'Login',
  },
  {
    element: Signup,
    path: ERoutePaths.Signup,
    title: 'Signup',
  },
  {
    element: Basket,
    path: ERoutePaths.Basket,
    title: 'Basket',
  },
  {
    element: Placing,
    path: ERoutePaths.Placing,
    title: 'Placing',
  },
  {
    element: Saved,
    path: ERoutePaths.Saved,
    title: 'Saved items',
  },
  {
    element: Product,
    path: ERoutePaths.Product,
    title: 'Product',
  },
]

export default routesList
