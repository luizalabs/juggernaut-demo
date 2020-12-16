import styled from 'styled-components'
import { IconButton as MuiIconButton, Typography as MuiTypography } from '@material-ui/core'

export const Container = styled.div`
  flex-grow: 1;
`

export const IconButton = styled(MuiIconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`

export const Typography = styled(MuiTypography)`
  flex-grow: 1;
`
