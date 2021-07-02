import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Button, Typography } from '@material-ui/core';
import gif from '../assets/giphy.gif'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      gap: 20,
    },

    message: {
      fontSize: 25,
    },

    img: {
      width: 330,
      height: 330,
    }
  }),
);


export default function Error() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <Typography
        variant='h2'
        component='h2'
        color='primary'
      > 
       Character not found!
      </Typography>
      <img className={classes.img} src={gif} alt="Rick crying " />
      <Typography 
        className={classes.message} 
        color='primary'
      > 
       Sorry, but we couldn't find this character.
      </Typography>
      <Button
        variant='contained'
        onClick={handleClick}
        color='primary'
      >Back</Button>
    </div>
  )
}