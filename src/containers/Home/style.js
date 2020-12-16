import styled from 'styled-components'
import { Card as MuiCard, CardContent as MuiCardContent, Grid as MuiGrid, CardMedia as MuiCardMedia, Typography as MuiTypography } from '@material-ui/core'
import { ReactComponent as HearthIcon } from 'assets/images/like.svg'

export const GridItem = styled(MuiGrid)`
  flex-grow: 1;
`

export const Card = styled(MuiCard)`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const CardContent = styled(MuiCardContent)`
  flex-grow: 1;
`

export const CardMedia = styled(MuiCardMedia)`
  height: 0;
  padding-top: 65%;
`

export const Image = styled.img`
  max-width: 300px;
  width: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fbd488;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Typography = styled(MuiTypography)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(3)}px;
`

export const Icon = styled(HearthIcon)`
  margin: ${({ theme }) => theme.spacing(0, 0.5)};
  color: red;
`
