import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';

const FormContainerStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormStyled = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`

const AvatarStyled = styled(Avatar)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

export {
  AvatarStyled,
  FormContainerStyled,
  FormStyled
}
