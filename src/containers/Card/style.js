import styled from 'styled-components'
import MuiCard from '@material-ui/core/Card'
import MuiCardMedia from '@material-ui/core/CardMedia'

export const Card = styled(MuiCard)`
  margin-top: ${({ theme }) => theme.spacing(10)}px;
`

export const CardMedia = styled(MuiCardMedia)`
  height: 140px;
`
