import { lazy } from 'react'

const SignIn = lazy(() => import('containers/SignIn'))
const SignInSide = lazy(() => import('containers/SignInSide'))
const SignUp = lazy(() => import('containers/SignUp'))
const SignUpWithFormik = lazy(() => import('containers/SignUpWithFormik'))

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
  }
]

export default demo
