import React from 'react'
import { Grid, Typography, CardActions, Button, Container } from '@material-ui/core'
import signIn from 'assets/images/sign-in.png'
import signInSide from 'assets/images/sign-in-side.png'
import signUp from 'assets/images/sign-up.png'
import modal from 'assets/images/modal.png'
import menu from 'assets/images/menu.png'
import table from 'assets/images/table.png'
import card from 'assets/images/card.png'
import tabs from 'assets/images/tabs.png'
import toolbar from 'assets/images/toolbar.png'
import list from 'assets/images/list.png'
import textField from 'assets/images/text-field.png'
import logo from 'assets/images/juggernaut.gif'
import Copyright from './Copyright'
import { GridItem, Card, CardMedia, CardContent, Image, Wrapper } from './style'

const layouts = [
  {
    title: 'Card',
    description: 'Simple card example.',
    src: card,
    href: '/demo/card/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Card'
  },
  {
    title: 'List',
    description: 'A simple list of items example.',
    src: list,
    href: '/demo/list/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/List'
  },
  {
    title: 'Menu',
    description: 'A simple menu example.',
    src: menu,
    href: '/demo/menu/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Menu'
  },
  {
    title: 'Modal',
    description: 'Simple modal examples.',
    src: modal,
    href: '/demo/modal/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Modal'
  },
  {
    title: 'Sign In',
    description: 'A simple Sign In page.',
    src: signIn,
    href: '/demo/sign-in/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/SignIn'
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
    title: 'Sign-in side',
    description: 'A simple Sign In side page.',
    src: signInSide,
    href: '/demo/sign-in-side/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/SignInSide'
  },
  {
    title: 'Table',
    description: 'A simple Table example.',
    src: table,
    href: '/demo/table/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Table'
  },
  {
    title: 'Tabs',
    description: 'Simple tabs example.',
    src: tabs,
    href: '/demo/tabs/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Tabs'
  },
  {
    title: 'TextField',
    description: 'Some simple text fields.',
    src: textField,
    href: '/demo/text-field/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/TextField'
  },
  {
    title: 'Toolbar',
    description: 'A simple Toolbar example.',
    src: toolbar,
    href: '/demo/toolbar/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/Toolbar'
  }
]

function Home () {
  return (
    <Wrapper>
      <Container component="main" fixed>
        <Grid container justify="center" className="mb-4">
          <Grid item>
            <Image src={logo} alt="logo juggernaut" />
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          {layouts.map(layout => (
            <GridItem item sm={6} md={4} key={layout.title}>
              <Card>
                <CardMedia
                  component="a"
                  href={layout.href}
                  image={layout.src}
                  title={layout.title}
                  rel="nofollow"
                  target="_blank"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" align="left" component="h2">
                    {layout.title}
                  </Typography>
                  <Typography component="p">{layout.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button component="a" target="_blank" href={layout.source} size="small" color="primary">
                    Source code
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Copyright />
    </Wrapper>
  )
}

export default Home
