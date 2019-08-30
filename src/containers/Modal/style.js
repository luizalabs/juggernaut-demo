import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const ButtonsContainer = styled(Grid)`
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const Container = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const MaxWidthModalForm = styled.form`
    margin: auto;
    display: flex;
    width: fit-content;
    flex-direction: column;
`

export { ButtonsContainer, Container, MaxWidthModalForm }