import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites, addFavorite, removeFavorite } from '../store/store'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea, 
  CardActions,
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
    top: -175,
    right: 20,
  },
})
)

type CharacterProps = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  starred: boolean;
}

export default function Cards(props: CharacterProps ) {
  const classes = useStyles();  
  const dispatch = useDispatch()
  const favorites = useSelector(selectFavorites)
  //const [starred, setStarred] = useState<boolean>(true)

  const handleClick = () => {
    if (!props.starred) {
       // setStarred(true)
          dispatch(addFavorite({...props, starred: true}))
    } else {
    //  setStarred(false)
      dispatch(removeFavorite(props.id))
    }
  }

  return (
    <Card key={props.id} className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardActionArea>
          <CardActions className={classes.icon} color="primary" onClick={handleClick}>
              {props.starred
              ?  <StarIcon/>
              :  <StarBorderIcon />
            }
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