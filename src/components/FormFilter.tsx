import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  InputAdornment
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export type Filterprops = {
  value: string | undefined;
  onClick: any;
  onChange: any;
}

export default function FormFilter(props: Filterprops) {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"
        label="Character Name"
        variant="outlined"
        color="secondary"
        value={props.value}
        onChange={props.onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
               <Button onClick={props.onClick}>
                <SearchIcon/>
              </Button>
            </InputAdornment>
          ),
        }}
        />
     

      </form>
    </div>
  );
}