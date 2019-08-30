import React from 'react'
import AlertModal from './Alert'
import FormModal from './Form'
import FullScreenModal from './FullScreen'
import MaxWidthModal from './MaxWidth'
import { ButtonsContainer } from './style'

const Modal = () => {
  const [opened, setOpened] = React.useState('')

  const handleClose = () => setOpened('')

  const openModal = value => () => setOpened(value)
  
  return (
    <ButtonsContainer container>
      <AlertModal open={opened} openModal={openModal} handleClose={handleClose} />
      <FormModal open={opened} openModal={openModal} handleClose={handleClose} />
      <FullScreenModal open={opened} openModal={openModal} handleClose={handleClose} />
      <MaxWidthModal open={opened} openModal={openModal} handleClose={handleClose} />
    </ButtonsContainer>
  )
}

export default Modal