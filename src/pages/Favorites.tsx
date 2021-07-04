import { useSelector } from 'react-redux'
import {selectFavorites} from '../store/store'
import CardList from '../components/CardList';

export default function Favorites () {
  const favorites = useSelector(selectFavorites)

  return (
    <div>
      <CardList 
        characters={favorites}
      />
    </div>
  )
}