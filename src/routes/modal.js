import { lazy } from 'react'

const Modal = lazy(() => import('containers/Modal'))

const modal = [
  {
    path: '/demo/modal',
    main: Modal,
    exact: true
  }
]

export default modal
