import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const FormContainer = styled.div`
  margin-top: ${({theme}) => theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  width: '100%';
  margin-top: ${({theme}) => theme.spacing(1)};
`

const AvatarStyled = styled(Avatar)`
&& {
  margin: ${({theme}) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
}
`

const ButtonStyled = styled(Button)`
  margin: ${({theme}) => theme.spacing(3, 0, 2)}
`

export {
  AvatarStyled,
  ButtonStyled,
  FormContainer,
  Form
}
