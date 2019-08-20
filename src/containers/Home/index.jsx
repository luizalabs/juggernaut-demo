import React from 'react'
import logo from 'assets/images/juggernaut.gif'
import { StyledContainer, StyledTitle } from './style'

const Home = () => (
  <StyledContainer>
    <img
      src={logo}
      alt="Gif by Reuno"
      title="Gif by Reuno"
    />
    <StyledTitle color="primary" component="h1" variant="h4" gutterBottom>
      Welcome
    </StyledTitle>
  </StyledContainer>
)

export default Home
