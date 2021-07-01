import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea, 
  CardActions,
  Button,
  CardContent, 
  CardMedia, 
  Typography 
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    width: 320,
    margin: theme.spacing(2),

    "& h2": {
      fontSize: 18,
    },
  },
  media: {
    position: 'relative',
    height: 150,
    margin: theme.spacing(2),
    backgroundSize: 'contain',
  },

  icon: {
    position: 'absolute',
    top: -180,
    right: 0,
  },
})
)

type CharacterProps = {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
}

export default function MediaCard(props: CharacterProps ) {
  const classes = useStyles();
  const [favorite, setFavorite] = useState<boolean>(true)

  const handleClick = () => {
    if (favorite === true) {
      setFavorite(false)
    } else {
      setFavorite(true)
    }
  }

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardActionArea>
          <CardActions className={classes.icon}>
            <Button size="small" color="primary" onClick={handleClick}>
              {favorite 
              ? <StarBorderIcon />
              : <StarIcon/>
            }
            </Button>
          </CardActions>
        </CardActionArea>
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="h1">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Status: {props.status}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Specie: {props.species}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Gender: {props.gender}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Origin: {props.origin}
          </Typography>
        </CardContent>
    </Card>
  );
}