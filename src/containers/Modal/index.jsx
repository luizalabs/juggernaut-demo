import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AlertModal from './Alert'
import FormModal from './Form'
import FullScreenModal from './FullScreen'
import MaxWidthModal from './MaxWidth'
import { ButtonsContainer, Container } from './style'

const FORM = 'FORM MODAL'
const ALERT = 'ALERT MODAL'
const MAX_WIDTH = 'MAX WIDTH MODAL'
const FULL_SCREEN = 'FULL SCREEN MODAL'

function Modal() {
  const [opened, setOpened] = React.useState('')

  const handleClose = () => setOpened('')

  const openModal = value => () => setOpened(value)
  
  return (
    <ButtonsContainer container justify="space-around" alignItems="center">
      <Grid item xs={12} md={3} justify="center" alignItems="center">
        <Button variant="outlined" color="primary" onClick={openModal(ALERT)}>
          Open alert modal
        </Button>
        <AlertModal open={opened == ALERT} handleClose={handleClose} />
      </Grid>
      <Grid item xs={12} md={3} justify="center" alignItems="center">
        <Button variant="outlined" color="primary" onClick={openModal(FORM)}>
          Open form modal
        </Button>
        <FormModal open={opened == FORM} handleClose={handleClose} />
      </Grid>
      <Grid item xs={12} md={3} justify="center" alignItems="center">
        <Button variant="outlined" color="primary" onClick={openModal(FULL_SCREEN)}>
          Open full-screen modal
        </Button>
        <FullScreenModal open={opened == FULL_SCREEN} handleClose={handleClose} />
      </Grid>
      <Grid item xs={12} md={3} justify="center" alignItems="center">
        <Button variant="outlined" color="primary" onClick={openModal(MAX_WIDTH)}>
          Open max-width dialog
        </Button>
        <MaxWidthModal open={opened == MAX_WIDTH} handleClose={handleClose} />
      </Grid>
    </ButtonsContainer>
  )
}

export default memo(Modal)
