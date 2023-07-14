import { lazy } from 'react'

import { ERoutePaths, TRoutePageType } from './types'

const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Auth/Login'))
const Signup = lazy(() => import('pages/Auth/Signup'))

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
  
]

export default routesList
