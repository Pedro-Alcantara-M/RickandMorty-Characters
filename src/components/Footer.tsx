import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar, 
  Toolbar, 
  Typography 
} from '@material-ui/core'
import logo from '../assets/rick-and-rorty.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

    img: {
      width: 200,
      padding: theme.spacing(1),
      transform: 'translatex(13px)',
    }
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" variant="h6" className={classes.title}>
            <img className={classes.img} src={logo} alt="Logo Rick and Morty"/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}