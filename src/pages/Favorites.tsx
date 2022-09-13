import { useSelector } from 'react-redux'
import {selectFavorites} from '../store/store'
import CardList from '../components/CardList';

interface CharacterProps {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  gender: string,
  origin:{
    name: string,
  },
  starred: boolean,
}

interface CardListProps {
  characters: CharacterProps[];
  onClick?: () => void;
}

export default function Favorites () {
  const characters:CardListProps = useSelector(selectFavorites)

  return (
    <div>
      <CardList 
        characters={characters}
      />
    </div>
  )
}