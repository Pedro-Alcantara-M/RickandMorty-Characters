import axios from 'axios'
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SpinnerRoundOutlined } from 'spinners-react';
import {
  Input,
  Button,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CachedIcon from '@material-ui/icons/Cached';
import Filter from '../components/Filter'
import CardList, { CardListProps } from '../components/CardList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
    },

    form: {
      margin: theme.spacing(2 ),
      display: 'flex',
      flexDirection: 'row',
    },

    filtername: {
      transform: 'translateY(-100)',
    },
    

    cards: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    pagination: {
      display: 'flex',
      justifyContent: 'center',
      margin: 15,
    },

    button: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main,
      marginRight: theme.spacing(1),
    },
  }),
);

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false)
  const [statusValue, setStatusValue] = useState<string>('')
  const [genderValue, setGenderValue] = useState<string>('')
  const [characters, setCharacters] = useState<CardListProps[]>([])
  const [page, setPage] = useState(1);
  const [myPage, setMyPage] = useState<CardListProps>();
  const [filterValue, setFilterValue] = useState('')

  const URL = 'https://rickandmortyapi.com/api/character/'
  const URLFilter = `name=${filterValue}&status=${statusValue}&gender=${genderValue}
`
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    axios.get(`${URL}?page=${value}&${URLFilter}`)
          .then(res => {
            setCharacters(res.data.results)
          })
          setLoading(true)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    setFilterValue(event.target.value)
  };

  const handleStatusChange = (event: React.ChangeEvent<unknown> | any) => {
    setStatusValue(event.target.value)
  };
  const handleGenderChange = (event: React.ChangeEvent<unknown> | any) => {
    setGenderValue(event.target.value)
  };

  const handleRefreshClick = () => {
      axios.get(`${URL}`)
        .then(res => {
          setCharacters(adjustStarred(res.data.results))
          setMyPage(res.data.info)
      })
      setFilterValue('')
      setGenderValue('')
      setStatusValue('')
      setLoading(true)
  }

  const handleClick = async () => {
    try {
      await 
      axios.get(`${URL}?${URLFilter}`)
        .then(res => {
          setCharacters(adjustStarred(res.data.results))
          setMyPage(res.data.info)
      })
      setLoading(true)
    } catch(error) {
       history.push('/error')
    }
  }
  const adjustStarred = (data: any) => {
    return data.map((char: any)=>({
      ...char, 
      starred: false
    }))
  }

useEffect(() => {
  axios.get(`${URL}?${URLFilter}`)
  .then(res => {
    setCharacters(adjustStarred(res.data.results))
    setMyPage(res.data.info)
  })
  setLoading(true)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [
  setCharacters, 
  setMyPage, 
  setFilterValue, 
  setGenderValue, 
  setStatusValue
])

  return (
    <div className={classes.root}>
    { loading ?
    <>
      <form className={classes.form} noValidate autoComplete="off">
      <Input 
        className={classes.filtername}
        placeholder="Character Name"
        value={filterValue} 
        onChange={handleChange}
      />
      <Filter
      StatusValue={statusValue}
      GenderValue={genderValue}
      onStatusChange={handleStatusChange}
      onGenderChange={handleGenderChange}
      />
      <Button variant="contained" className={classes.button} onClick={handleClick}>
        <SearchIcon/>
      </Button>
      <Button variant="contained" className={classes.button} onClick={handleRefreshClick}>
        <CachedIcon/>Refresh
      </Button>
      </form>
      <CardList 
        characters={characters}
        count={myPage?.pages}
        page={page}
        onChange={handlePageChange}
      />
      </>
      :
      <SpinnerRoundOutlined color='#3f51b5' size='80'/>
    }
    </div>
  )
}
