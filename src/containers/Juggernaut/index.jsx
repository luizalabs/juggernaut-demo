import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import GlobalStyle from 'common/styles/global'
import Copyright from '../../components/copyright/Copyright'

const Juggernaut = ({ children, theme }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <GlobalStyle />
        {children}
        <Copyright />
      </Fragment>
    </ThemeProvider>
  </MuiThemeProvider>
)

Juggernaut.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
}

export default Juggernaut
