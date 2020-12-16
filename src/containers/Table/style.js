import styled from 'styled-components'
import { Container as MuiContainer, Paper as MuiPaper, Table as MuiTable } from '@material-ui/core'

export const Container = styled(MuiContainer)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`

export const Paper = styled(MuiPaper)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  overflow-x: auto;
`

export const Table = styled(MuiTable)`
  min-width: 650px;
`
