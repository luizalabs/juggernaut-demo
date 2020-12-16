import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Container, IconButton, Typography } from './style'

function AppToolbar () {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Juggernaut
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default AppToolbar
