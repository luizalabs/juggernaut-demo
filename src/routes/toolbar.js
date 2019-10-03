import { lazy } from 'react'

const Toolbar = lazy(() => import('containers/Toolbar'))

const toolbar = [
  {
    path: '/demo/toolbar',
    main: Toolbar,
    exact: true
  }
]

export default toolbar
