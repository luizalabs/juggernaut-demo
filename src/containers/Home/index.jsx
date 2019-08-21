import React from 'react'
import { Grid, Typography, CardActions, Button, Container } from '@material-ui/core'
import { GridItemStyled, CardStyled, CardMediaStyled, CardContentStyled } from './style'

const layouts = [
  {
    title: 'Sign In',
    description: 'A simple Sign In page.',
    src: 'https://material-ui.com/static/images/templates/sign-in.png',
    href: '/demo/sign-in/',
    source: 'https://github.com/SoftboxLab/juggernaut-demo/tree/master/src/containers/SignIn'
  }
]

function Home() {
  return (
    <Container component="main" className="my-3" fixed>
      <Grid container spacing={2}>
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
  )
}

export default Home
