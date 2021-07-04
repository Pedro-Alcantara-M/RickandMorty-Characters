import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import {selectFavorites} from '../store/store'
import CardList from '../components/CardList';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    
    }

  })
)

export default function Favorites () {
  const classes = useStyles();
  const favorites = useSelector(selectFavorites)

 

  return (
    <div className={classes.root}>
      <CardList 
        characters={favorites}
      />
    </div>
  )
}