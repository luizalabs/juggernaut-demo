import React from 'react'
import { Grid, Typography, CardActions, Button, Container } from '@material-ui/core'
import signIn from 'assets/img/sign-in.png'
import signInSide from 'assets/img/sign-in-side.png'
import signUp from 'assets/img/sign-up.png'
import modal from 'assets/img/modal.png'
import menu from 'assets/img/menu.png'
import table from 'assets/img/table.png'
import card from 'assets/img/card.png'
import tabs from 'assets/img/tabs.png'
import toolbar from 'assets/img/toolbar.png'
import logo from 'assets/img/juggernaut.gif'
import Copyright from './Copyright'
import { GridItemStyled, CardStyled, CardMediaStyled, CardContentStyled, ImgStyled, HomeStyled } from './style'

const layouts = [
  {
    title: 'Sign In',
    description: 'A simple Sign In page.',
    src: signIn,
    href: '/demo/sign-in/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/SignIn'
  },
  {
    title: 'Sign-in side',
    description: 'A simple Sign In side page.',
    src: signInSide,
    href: '/demo/sign-in-side/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/SignInSide'
  },
  {
    title: 'Sign Up',
    description: 'A simple Sign Up page.',
    src: signUp,
    href: '/demo/sign-up/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/SignUp'
  },
  {
    title: 'Sign Up With Formik',
    description: 'A simple Sign Up page with Formik.',
    src: signUp,
    href: '/demo/sign-up-with-formik/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/SignUpWithFormik'
  },
  {
    title: 'Modal',
    description: 'Simple modal examples.',
    src: modal,
    href: '/demo/modal/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Modal'
  },
  {
    title: 'Tabs',
    description: 'Simple tabs example.',
    src: tabs,
    href: '/demo/tabs/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Tabs'
  },
  {
    title: 'Menu',
    description: 'A simple menu example.',
    src: menu,
    href: '/demo/menu/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Menu'
  },
  {
    title: 'Table',
    description: 'A simple Table example.',
    src: table,
    href: '/demo/table/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Table'
  },
  {
    title: 'Card',
    description: 'Simple card example.',
    src: card,
    href: '/demo/card/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Card'
  },
  {
    title: 'Toolbar',
    description: 'A simple Toolbar example.',
    src: toolbar,
    href: '/demo/toolbar/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Toolbar'
  }
]

function Home() {
  return (
    <HomeStyled>
      <Container component="main" fixed>
        <Grid container justify="center" className="mb-4">
          <Grid item>
            <ImgStyled src={logo} alt="logo juggernaut" />
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          {layouts.map(layout => (
            <GridItemStyled item sm={6} md={4} key={layout.title}>
              <CardStyled>
                <CardMediaStyled
                  component="a"
                  href={layout.href}
                  image={layout.src}
                  title={layout.title}
                  rel="nofollow"
                  target="_blank"
                />
                <CardContentStyled>
                  <Typography gutterBottom variant="h5" align="left" component="h2">
                    {layout.title}
                  </Typography>
                  <Typography component="p">{layout.description}</Typography>
                </CardContentStyled>
                <CardActions>
                  <Button component="a" href={layout.source} size="small" color="primary">
                    Source code
                  </Button>
                </CardActions>
              </CardStyled>
            </GridItemStyled>
          ))}
        </Grid>
      </Container>
      <Copyright />
    </HomeStyled>
  )
}

export default Home
