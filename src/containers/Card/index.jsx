import React from 'react'
import { CardActionArea, CardActions, CardContent, Container, Button, Typography } from '@material-ui/core'
import dogs from 'assets/images/two-dogs.jpg'
import { Card, CardMedia } from './style'

function CardDemo () {
  return (
    <Container component="main" maxWidth="xs">
      <Card>
        <CardActionArea>
          <CardMedia
            image={dogs}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Two dogs
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I found these two beautiful dogs on a website called unsplash. Feel free to go there and download a lot of other amazing wallpapers.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default CardDemo
