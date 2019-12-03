import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'

const ContainerStyled = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`

const PaperStyled = styled(Paper)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  overflow-x: auto;
`

const TableStyled = styled(Table)`
  min-width: 650px;
`

export {
  ContainerStyled,
  PaperStyled,
  TableStyled
}
