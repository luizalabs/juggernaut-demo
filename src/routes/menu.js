import { lazy } from 'react'

const Menu = lazy(() => import('containers/Menu'))

const menu = [
  {
    path: '/demo/menu',
    main: Menu,
    exact: true
  }
]

export default menu
