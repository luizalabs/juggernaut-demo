import React from 'react'
import { Link } from '@material-ui/core'
import { TypographyStyled, IconStyled } from './style'

function Copyright() {
  return (
    <TypographyStyled variant="body2" color="textSecondary" align="center" className="my-3">
      <Link color="inherit" href="https://softbox.com.br/">
        Copyright © Luizalabs.
      </Link>
      <span className="ml-1">Built with</span>
      <IconStyled width="16px" height="16px" />
      <Link color="inherit" href="https://github.com/SoftboxLab/juggernaut">
        by Juggernaut.
      </Link>
    </TypographyStyled>
  );
}

export default Copyright

