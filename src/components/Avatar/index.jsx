import styled from 'styled-components'
import MuiAvatar from '@material-ui/core/Avatar'

const Avatar = styled(MuiAvatar)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

export default Avatar
