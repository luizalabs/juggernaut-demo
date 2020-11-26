import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

export const Container = styled(Grid)`
  height: 100vh;
`

export const SideImage = styled(Grid)`
  background-image: url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const SignIn = styled.div`
  margin: ${({ theme }) => theme.spacing(8, 4)};
  display: flex;
  flex-direction: column;
  align-items: center;
`
