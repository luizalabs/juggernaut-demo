import { lazy } from 'react'

const SignIn = lazy(() => import('containers/SignIn'))

const demo = [
  {
    path: '/demo/sign-in',
    main: SignIn,
    exact: true
  }
]

export default demo
