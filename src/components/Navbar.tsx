import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Badge,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../store/store'
import logo from '../assets/rick-and-rorty.svg'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flex: 1,

      '& a': {
        '&:hover': {
          boxShadow: theme.shadows[2],
        },
      },

      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: theme.spacing(2),
        flexWrap: 'wrap',
        margin: theme.spacing(2),
      },
    },

    link: {
      color: theme.palette.primary.contrastText,
      fontSize: '1.5rem',
      margin: theme.spacing(1),
      textDecoration: 'none',
      padding: 10,
      borderRadius: 10,

      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
        width: '100%',
        padding: theme.spacing(1),
      },
    },

    listLink: {
      [theme.breakpoints.down('xs')]: {
        display: 'inline-grid',
        width: '100%',
        flexWrap: 'nowrap',
      },
    },

    badge: {

      '& span': {
        transform: 'translate(70%, -50%)',
      },
    },

    img: {
      width: 200,
      marginRight: '25%',

      [theme.breakpoints.down('sm')]: {
        marginRight: '15%',
      },
    },

    active: {
      color: theme.palette.primary.main,
      background: theme.palette.background.default,
      margin: theme.spacing(1),

      [theme.breakpoints.down('sm')]: {
        justifyCotent: 'center',
        width: '100%',
        margin: 1,
        padding: theme.spacing(1),
      },
    },
  }),
);


export default function Navbar() {
  const classes = useStyles();
  const favorites = useSelector(selectFavorites)
  const badge = favorites.length

  return (
    <div >
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <img className={classes.img} src={logo} alt='Logo Rick and Morty' />
          <div className={classes.listLink}>
            <NavLink exact to="/" className={classes.link} activeClassName={classes.active}>
              Characters
            </NavLink>
            <NavLink to="/favorites" className={classes.link} activeClassName={classes.active}>
              <Badge className={classes.badge} badgeContent={badge} color="error">
                Favorites Characters
              </Badge>
            </NavLink>
          </div>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}