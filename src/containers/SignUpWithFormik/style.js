import styled from 'styled-components'
import MuiFormControl from '@material-ui/core/FormControl'

export const Error = styled.div`
  color: ${({ theme }) => theme.palette.error.dark};
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`

export const FormControl = styled(MuiFormControl)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  min-width: 120px;
`
