import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.palette.primary.background};
  height: 100vh;
  text-align: center;
`

const StyledTitle = styled(Typography)`
  margin: 0;
  margin-bottom: 10px;
`

export {
  StyledContainer,
  StyledTitle
}
