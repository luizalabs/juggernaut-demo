import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function Item({ type, opened, openModal, handleClose, modal: Modal }) {
  return (
    <Grid container item xs={12} md={3} justify="center" alignItems="center">
      <Button
        color="primary"
        variant="outlined"
        onClick={() => openModal(type)}
      >
        {`Open ${type} modal`}
      </Button>
      <Modal
        open={opened === type}
        handleClose={handleClose}
      />
    </Grid>
  )
}

Item.propTypes = {
  type: PropTypes.string,
  opened: PropTypes.string,
  openModal: PropTypes.func,
  handleClose: PropTypes.func,
  modal: PropTypes.elementType
}

export default memo(Item)
