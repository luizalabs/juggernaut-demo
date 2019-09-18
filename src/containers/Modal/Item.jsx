import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function Item({ type, openModal, handleClose, modal: Modal }) {
  return (
    <Grid item xs={12} md={3} justify="center" alignItems="center">
      <Button variant="outlined" color="primary" onClick={openModal(type)}>
        {`Open ${type} modal`}
      </Button>
      <Modal open={opened == type} handleClose={handleClose} />
    </Grid>
  )
}

export default memo(Item)
