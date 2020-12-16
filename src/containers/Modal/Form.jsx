import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'

function Form ({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Modal Content - To subscribe to this website, please enter your email address here.
          We will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          id="name"
          type="email"
          margin="dense"
          label="Email Address"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Form.defaultProps = {
  open: false
}

Form.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired
}

export default memo(Form)
