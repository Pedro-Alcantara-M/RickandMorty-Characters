import { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SpinnerRoundOutlined } from 'spinners-react';
import {
  Input,
  Button,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CardList, { CardListProps } from '../components/CardList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
    },

    form: {
      margin: theme.spacing(2),
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
  }),
);

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false)
  const [characters, setCharacters] = useState<CardListProps[]>([])
  const [page, setPage] = useState(1);
  const [myPage, setMyPage] = useState<CardListProps>();
  const [filterValue, setFilterValue] = useState('')

  const URL = 'https://rickandmortyapi.com/api/character/'

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    axios.get(`${URL}?page=${value}`)
          .then(res => {
            setCharacters(res.data.results)
          })
          setLoading(true)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  const handleClick = async () => {
    try {
      await 
      axios.get(`${URL}?name=${filterValue}`)
        .then(res => {
          setCharacters(adjustStarred(res.data.results))
          setMyPage(res.data.info)
      })
      setFilterValue('')
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

  const requestFunction = () => {
      axios.get(`${URL}`)
      .then(res => {
        setCharacters(adjustStarred(res.data.results))
        setMyPage(res.data.info)
      })
      setLoading(true)
  }

useEffect(() => {
  requestFunction()
}, [setCharacters, setMyPage])

  return (
    <div className={classes.root}>
    { loading ?
    <>
      <form className={classes.form} noValidate autoComplete="off">
      <Input 
        placeholder="Character Name"
        value={filterValue} 
        onChange={handleChange}
      />
      <Button onClick={handleClick}>
         <SearchIcon/>
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
