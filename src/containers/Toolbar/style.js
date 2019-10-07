import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

const ToolbarStyled = styled.div`
  flex-grow: 1;
`

const IconButtonStyled = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`

const TypographyStyled = styled(Typography)`
  flex-grow: 1;
`

export {
  TypographyStyled,
  IconButtonStyled,
  ToolbarStyled
}
