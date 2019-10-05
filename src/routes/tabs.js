import { lazy } from 'react'

const Tabs = lazy(() => import('containers/Tabs'))

const tabs = [
  {
    path: '/demo/tabs',
    main: Tabs,
    exact: true
  }
]

export default tabs
