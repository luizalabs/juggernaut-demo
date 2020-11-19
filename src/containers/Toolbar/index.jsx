import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import { ToolbarStyled, IconButtonStyled, TypographyStyled } from './style'

const AppToolbar = () => (
  <ToolbarStyled>
    <AppBar position="static">
      <Toolbar>
        <IconButtonStyled edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButtonStyled>
        <TypographyStyled variant="h6">
            Juggernaut
        </TypographyStyled>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </ToolbarStyled>
)

export default AppToolbar
