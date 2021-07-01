import { Switch, Route } from "react-router-dom"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Error from "../pages/Error";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexGrow: 1,
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