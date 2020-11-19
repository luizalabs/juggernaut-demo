import styled from 'styled-components'
import { Card, CardContent, Grid, CardMedia, Typography } from '@material-ui/core'
import { ReactComponent as HearthIcon } from 'assets/images/like.svg'

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

const ImgStyled = styled.img`
  max-width: 300px;
  width: 100%;
`

const HomeStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fbd488;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TypographyStyled = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(3)}px;
`

const IconStyled = styled(HearthIcon)`
  margin: ${({ theme }) => theme.spacing(0, 0.5)};
  color: red;
`

export {
  GridItemStyled,
  CardStyled,
  CardContentStyled,
  CardMediaStyled,
  ImgStyled,
  HomeStyled,
  TypographyStyled,
  IconStyled
}
