import React from 'react'
import { Link } from '@material-ui/core'
import { Typography, Icon } from './style'

function Copyright () {
  return (
    <Typography variant="body2" color="textSecondary" align="center" className="my-3">
      <Link color="inherit" href="https://softbox.com.br/">
        Copyright © Softbox.
      </Link>
      <span className="ml-1">Built with</span>
      <Icon width="16px" height="16px" />
      <Link color="inherit" href="https://github.com/SoftboxLab/juggernaut">
        by Juggernaut.
      </Link>
    </Typography>
  )
}

export default Copyright
