import { lazy } from 'react'

const TextField = lazy(() => import('containers/TextField'))
const SignIn = lazy(() => import('containers/SignIn'))
const SignInSide = lazy(() => import('containers/SignInSide'))
const SignUp = lazy(() => import('containers/SignUp'))
const SignUpWithFormik = lazy(() => import('containers/SignUpWithFormik'))
const Tabs = lazy(() => import('containers/Tabs'))
const Menu = lazy(() => import('containers/Menu'))
const Table = lazy(() => import('containers/Table'))
const Card = lazy(() => import('containers/Card'))
const Toolbar = lazy(() => import('containers/Toolbar'))
const Modal = lazy(() => import('containers/Modal'))
const List = lazy(() => import('containers/List'))

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
    path: '/demo/sign-up-with-formik',
    main: SignUpWithFormik,
    exact: true
  },
  {
    path: '/demo/tabs',
    main: Tabs,
    exact: true
  },
  {
    path: '/demo/menu',
    main: Menu,
    exact: true
  },
  {
    path: '/demo/table',
    main: Table,
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
  },
  {
    path: '/demo/list',
    main: List,
    exact: true
  },
  {
    path: '/demo/text-field',
    main: TextField,
    exact: true
  }
]

export default demo
