import styled from 'styled-components'
import { Card, CardContent, Grid, CardMedia } from '@material-ui/core'

const GridItemStyled = styled(Grid)`
  flex-grow: 1;
`

const CardStyled = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const CardContentStyled = styled(CardContent)`
  flex-grow: 1;
`

const CardMediaStyled = styled(CardMedia)`
  height: 0;
  padding-top: 65%;
`

export {
  GridItemStyled,
  CardStyled,
  CardContentStyled,
  CardMediaStyled
}
