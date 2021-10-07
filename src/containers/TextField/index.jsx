import React from 'react'
import { Container, TextFieldStyled } from './style'

function TextFieldContainer () {
  return (
    <Container
      container
      alignItems="center"
      justify="space-around"
    >
      <h1>Styled TextField</h1>
      <TextFieldStyled id="outlined-basic" label="Outlined" variant="outlined" />
      <TextFieldStyled id="filled-basic" label="Filled" variant="filled" />
    </Container>
  )
}

export default TextFieldContainer
