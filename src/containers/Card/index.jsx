import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import dogs from 'assets/img/two-dogs.jpg'
import { CardStyled, CardMediaStyled } from './style'

const CardExample = () => {

  return (
    <Container component="main" maxWidth="xs">
      <CardStyled>
        <CardActionArea>
          <CardMediaStyled
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
      </CardStyled>
    </Container>
  );
}

export default CardExample
