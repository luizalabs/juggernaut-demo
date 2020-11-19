import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const ContainerStyled = styled(Grid)`
  height: 100vh;
`

const SideImageStyld = styled(Grid)`
  background-image: url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const FormStyled = styled.form`
  width: 100%; /* Fix IE 11 issue. */
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`

const AvatarStyled = styled(Avatar)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

const SignInStyled = styled.div`
  margin: ${({ theme }) => theme.spacing(8, 4)};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export {
  ContainerStyled,
  SideImageStyld,
  FormStyled,
  AvatarStyled,
  SignInStyled
}
