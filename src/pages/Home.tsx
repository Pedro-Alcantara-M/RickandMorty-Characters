import axios from 'axios'
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectFavorites, CharacterProps } from '../store/store'
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
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    form: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',

      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItem: 'center',
      },
    },

    filtername: {
      transform: 'translatey(-8px)',
      '& input': {
        transform: 'translatey(15px)',
      },

      [theme.breakpoints.down('sm')]: {
        justifyContend: 'start',
        transform: 'none',

        '& input': {
          transform: 'none',
        },
      },
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
      height: 32,
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main,
      margin: theme.spacing(1),
      transform: 'translatey(15px)',
    },
  }),
);

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const favorites = useSelector(selectFavorites)
  const [loading, setLoading] = useState<boolean>(true)
  const [statusValue, setStatusValue] = useState<string>('')
  const [genderValue, setGenderValue] = useState<string>('')
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CardListProps[]>([])
  const [myPage, setMyPage] = useState<number>();
  const [filterValue, setFilterValue] = useState('')

  const URL = 'https://rickandmortyapi.com/api/character/'
  const URLFilter = `name=${filterValue}&status=${statusValue}&gender=${genderValue}
`
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setLoading(true)
    setPage(value)
    axios.get(`${URL}?page=${value}&${URLFilter}`)
      .then(res => {
        setCharacters(adjustStarred(res.data.results))
      })
    setLoading(false)
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  };

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatusValue(event.target.value as string)
  };
  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGenderValue(event.target.value as string)
  };

  const handleRefreshClick = () => {
    setLoading(true)
    axios.get(`${URL}?page=${page}`)
      .then(res => {
        setCharacters(adjustStarred(res.data.results))
        setMyPage(res.data.info.pages)
      })
    setFilterValue('')
    setGenderValue('')
    setStatusValue('')
    setLoading(false)
  }

  const handleFilterClick = async () => {
    setLoading(true)
    try {
      await
        axios.get(`${URL}?page=${page}&${URLFilter}`)
          .then(res => {
            setCharacters(adjustStarred(res.data.results))
            setMyPage(res.data.info.pages)
          })
      setLoading(false)
    } catch (error) {
      history.push('/error')
    }
  }

 const adjustStarred = (data: any) => {
    return data.map((char: CharacterProps) => {
      const stars = favorites.some((e) => e.id === char.id && e.starred)
      return {
        ...char,
      starred: stars
    } 
    })
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`${URL}?page=${page}&${URLFilter}`)
      .then(res => {
        setCharacters(adjustStarred(res.data.results))
        setMyPage(res.data.info.pages)
        })
        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('characters', characters)

  return (
    <div className={classes.root}>
      {loading ?
        <SpinnerRoundOutlined color='#3f51b5' size='80' />
        :
        <>
          <form className={classes.form} noValidate autoComplete="off">
            <Input
              className={classes.filtername}
              placeholder="Character Name"
              value={filterValue}
              onChange={handleNameChange}
            />
            <Filter
              StatusValue={statusValue}
              GenderValue={genderValue}
              onStatusChange={handleStatusChange}
              onGenderChange={handleGenderChange}
            />
            <Button variant="contained" className={classes.button} onClick={handleFilterClick}>
              <SearchIcon />
            </Button>
            <Button variant="contained" className={classes.button} onClick={handleRefreshClick}>
              <CachedIcon style={{marginRight: '5px'}}/>Refresh
            </Button>
          </form>
          <CardList
            characters={characters}
          />
          <div className={classes.pagination} >
          <Pagination  
            color='primary'
            count={myPage} 
            page={page} 
            onChange={handleChange}
            />  
          </div>
         
        </>

      }
    </div>
  )
}
