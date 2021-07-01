import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SpinnerRoundOutlined } from 'spinners-react';
import FormFilter from '../components/FormFilter'
import CardList, { CardListProps } from '../components/CardList';

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
  const [filterValue, setFilterValue] = useState<string>()

  const URL = 'https://rickandmortyapi.com/api/character/'

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    axios.get(`${URL}?page=${value}`)
          .then(res => {
            setCharacters(res.data.results)
          })
          setLoading(true)
  };

  const handleFilterChange = (event: { target: HTMLInputElement }, value: string) => {
    setFilterValue(event.target.value)
  }

  const handleClick = async () => {
    try{
      await
      axios.get(`${URL}?name=${filterValue}`)
        .then(res => {
          setCharacters(res.data.results)
          setMyPage(res.data.info)
      })
      setFilterValue('')
      setLoading(true)
    } catch(error) {
       history.push('/error')
    }
}

  const requestFunction = async () => {
    try{
    await 
      axios.get(`${URL}`)
      .then(res => {
        setCharacters(res.data.results)
        setMyPage(res.data.info)
      })
      setLoading(true)
    } catch(error) {
       console.log('deu erro')
    }
  }

useEffect(() => {
  requestFunction()

}, [setCharacters, setMyPage])


  return (
    <div className={classes.root}>
    { loading ?
    <>
      <FormFilter
      value={filterValue}
      onClick={handleClick}
      onChange={handleFilterChange}
      />
      <CardList 
      characters={characters}
      count = {myPage?.pages}
      page={page}
      onChange={handleChange}
      />
      </>
      :
      <SpinnerRoundOutlined color='#3f51b5;' size='80'/>
    }
    </div>
  )
}
