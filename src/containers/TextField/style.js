import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextFieldStyled = styled(TextField)`
  width: 400px;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
`
