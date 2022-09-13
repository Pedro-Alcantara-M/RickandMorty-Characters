
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Cards from '../components/Cards'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
      background: theme.palette.grey[300],
    },

    cards: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },

    pagination: {
      display: 'flex',
      justifyContent: 'center',
      margin: 15,
    },

  }),
);

export type CharacterProps = {
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

export type CardListProps = {
  characters?: CharacterProps[];
  onClick?: () => void;
}

export default function CardList({characters}:CardListProps) {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <div className={classes.cards}>
        {characters?.map((character: CharacterProps) => (
          <Cards
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            gender={character.gender}
            origin={character.origin.name}
            species={character.species}
            starred={character.starred}
          />))}
      </div>

    </div>
  )
}