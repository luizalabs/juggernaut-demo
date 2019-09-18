import React, { memo } from 'react'
import AlertModal from './Alert'
import FormModal from './Form'
import FullScreenModal from './FullScreen'
import MaxWidthModal from './MaxWidth'
import Item from './Item'
import { ButtonsContainer } from './style'

const FORM = 'FORM'
const ALERT = 'ALERT'
const MAX_WIDTH = 'MAX-WIDTH'
const FULL_SCREEN = 'FULL-SCREEN'

function Modal() {
  const [opened, setOpened] = React.useState('')

  const handleClose = () => setOpened('')
  const openModal = (value) => setOpened(value)

  const modalProps = { opened, openModal, handleClose }
  
  return (
    <ButtonsContainer
      container
      alignItems="center"
      justify="space-around"
    >
      <Item
        type={ALERT}
        modal={AlertModal}
        {...modalProps}
      />
      <Item
        type={FORM}
        modal={FormModal}
        {...modalProps}
      />
      <Item
        type={FULL_SCREEN}
        modal={FullScreenModal}
        {...modalProps}
      />
      <Item
        type={MAX_WIDTH}
        modal={MaxWidthModal}
        {...modalProps}
      />
    </ButtonsContainer>
  )
}

export default memo(Modal)
