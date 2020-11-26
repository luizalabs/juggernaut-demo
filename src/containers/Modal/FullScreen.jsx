import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, Dialog, Divider, IconButton, ListItemText, ListItem, List, Toolbar, Typography } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

function FullScreen ({ open, handleClose }) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
    >
      <AppBar style={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            Sound
          </Typography>
          <Button color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText primary="Phone ringtone" secondary="Titania" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Default notification ringtone" secondary="Tethys" />
        </ListItem>
      </List>
    </Dialog>
  )
}

FullScreen.defaultProps = {
  open: false
}

FullScreen.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired
}

export default memo(FullScreen)
