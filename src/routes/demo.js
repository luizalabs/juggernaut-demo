import { lazy } from 'react'

const SignIn = lazy(() => import('containers/SignIn'))
const SignInSide = lazy(() => import('containers/SignInSide'))
const SignUp = lazy(() => import('containers/SignUp'))
const SignUpWithFormik = lazy(() => import('containers/SignUpWithFormik'))
const Card = lazy(() => import('containers/Card'))
const Toolbar = lazy(() => import('containers/Toolbar'))
const Modal = lazy(() => import('containers/Modal'))
const Modal = lazy(() => import('containers/Modal'))

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
