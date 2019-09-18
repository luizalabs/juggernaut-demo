import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const ButtonsContainer = styled(Grid)`
  height: 100vh;
  width: 100vw;
`

const MaxWidthModalForm = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`

export {
  ButtonsContainer,
  MaxWidthModalForm
}
