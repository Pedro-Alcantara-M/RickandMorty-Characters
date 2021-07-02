import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import {selectFavorites} from '../store/store'
import CardList from '../components/CardList';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
  })
)

export default function Favorites () {
  const classes = useStyles();
  const [page, setPage] = useState(1)
  const favorites = useSelector(selectFavorites)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  };

  return (
    <div className={classes.root}>
      <CardList 
        characters={favorites}
        count={((favorites.length/20))}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  )
}