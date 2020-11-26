import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import { Container } from './style'

function SimpleMenu () {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Container
      container
      alignItems="center"
      justify="space-around"
    >
      <Button
        aria-controls="simple-menu"
        variant="contained"
        color="primary"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Container>
  )
}

export default SimpleMenu
