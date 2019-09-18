import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
))

function Alert({ open, handleClose }) {
  return (
    <Dialog
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <DialogTitle id="alert-dialog-title">Modal Title</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Modal Content - Let Google help apps determine location.
          This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Alert.propTypes = {
  open: PropTypes.string,
  handleClose: PropTypes.func
}

export default memo(Alert)
