import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

type FilterProps = {
  onGenderChange: ((event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
}>, child: React.ReactNode) => void) | undefined,
  onStatusChange: ((event: React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>, child: React.ReactNode) => void) | undefined,
  StatusValue: string,
  GenderValue: string,
}


export default function Filter(props: FilterProps) {
  const classes = useStyles();
  const [openSatus, setOpenSatus] = useState(false);
  const [openGender, setOpenGender] = useState(false);


  const handleStatusClose = () => {
    setOpenSatus(false);
  };
  const handleGenderClose = () => {
    setOpenGender(false);
  };

  const handleStatusOpen = () => {
    setOpenSatus(true);
  };

  const handleGenderOpen = () => {
    setOpenGender(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openSatus}
          onClose={handleStatusClose}
          onOpen={handleStatusOpen}
          value={props.StatusValue}
          onChange={props.onStatusChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='alive'>alive</MenuItem>
          <MenuItem value='dead'>dead</MenuItem>
          <MenuItem value='unknown'>unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openGender}
          onClose={handleGenderClose}
          onOpen={handleGenderOpen}
          value={props.GenderValue}
          onChange={props.onGenderChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='female'>female</MenuItem>
          <MenuItem value='male'>male</MenuItem>
          <MenuItem value='genderless'>genderless</MenuItem>
          <MenuItem value='unknown'>unknown</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}