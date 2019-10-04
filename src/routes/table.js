import { lazy } from 'react'

const Table = lazy(() => import('containers/Table'))

const table = [
  {
    path: '/demo/table',
    main: Table,
    exact: true
  }
]

export default table
