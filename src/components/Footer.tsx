import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar, 
  Toolbar, 
  Typography 
} from '@material-ui/core'

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
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" variant="h6" className={classes.title}>
            Rick and Morty
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}