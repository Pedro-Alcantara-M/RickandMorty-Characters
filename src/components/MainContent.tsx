import { Switch, Route } from "react-router-dom"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Error from "../pages/Error";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      background: theme.palette.grey[300],
      margin: theme.spacing(1),
      height: '100%',
      minHeight: '83vh',
    },
  }),
);

export default function MainContent() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/error" component={Error}/>
        </Switch>
    </div>
    
  )
}