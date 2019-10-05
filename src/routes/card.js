import { lazy } from 'react'

const Card = lazy(() => import('containers/Card'))

const card = [
  {
    path: '/demo/card',
    main: Card,
    exact: true
  }
]

export default card
