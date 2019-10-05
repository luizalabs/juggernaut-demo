import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const CardStyled = styled(Card)`
  margin-top: ${({ theme }) => theme.spacing(10)}px;
`

const CardMediaStyled = styled(CardMedia)`
  height: 140px
`

export {
  CardStyled,
  CardMediaStyled
}
