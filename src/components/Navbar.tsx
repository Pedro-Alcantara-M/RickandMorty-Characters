import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar, 
  Badge,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import logo from '../assets/rick-and-rorty.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center', 
      gap: '28%',

      '& a':{
          '&:hover': {
            boxShadow: theme.shadows[2],
          },
      },
    },

    link: {
      color: theme.palette.primary.contrastText,
      fontSize: '1.5rem',
      margin: 10,
      textDecoration: 'none',
      padding: 10,
      borderRadius: 10,
      whiteSpace: 'nowrap',
    },

    badge: {

      '& span': {
        transform: 'translate(70%, -50%)',
      }
    },

    img: {
      width: 200,
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
          <img className={classes.img} src={logo} alt='Logo Rick and Morty'/>
        <div>
            <NavLink exact to="/" className={classes.link} activeClassName={classes.active}>
              Characters
            </NavLink>
            <NavLink to="/favorites" className={classes.link}  activeClassName={classes.active}>
              <Badge className={classes.badge} badgeContent={5} color="error"> 
                Favorites Characters  
              </Badge>
            </NavLink>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}