import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar, 
  Typography 
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 

      
      
      '& a':{
          '&:hover': {
            boxShadow: theme.shadows[2],
          },
      },
    },

    link: {
      color: theme.palette.primary.contrastText,
      margin: 10,
      textDecoration: 'none',
      padding: 10,
      borderRadius: 10,
      whiteSpace: 'nowrap',
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: '2rem',
      marginRight: 'auto',
      
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },

    active: {
      color: theme.palette.primary.main,
      background: theme.palette.background.default,
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static">
        <Toolbar className={classes.root}>
        <Typography variant="h6">
            <NavLink exact to="/" className={classes.link} activeClassName={classes.active}>
              Characters
            </NavLink>
            <NavLink to="/favorites" className={classes.link}  activeClassName={classes.active}>
              Favorites Characters
            </NavLink>
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}