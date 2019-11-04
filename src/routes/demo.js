import { lazy } from 'react'

const SignIn = lazy(() => import('containers/SignIn'))
const SignInSide = lazy(() => import('containers/SignInSide'))
const SignUp = lazy(() => import('containers/SignUp'))
const Menu = lazy(() => import('containers/Menu'))
const Card = lazy(() => import('containers/Card'))
const Modal = lazy(() => import('containers/Modal'))
const Toolbar = lazy(() => import('containers/Toolbar'))

const demo = [
  {
    path: '/demo/sign-in',
    main: SignIn,
    exact: true
  },
  {
    path: '/demo/sign-in-side',
    main: SignInSide,
    exact: true
  },
  {
    path: '/demo/sign-up',
    main: SignUp,
    exact: true
  },
  {
    path: '/demo/menu',
    main: Menu,
    exact: true
  },
  {
    path: '/demo/card',
    main: Card,
    exact: true
  },
  {
    path: '/demo/toolbar',
    main: Toolbar,
    exact: true
  },
  {
    path: '/demo/modal',
    main: Modal,
    exact: true
  }
]

export default demo
