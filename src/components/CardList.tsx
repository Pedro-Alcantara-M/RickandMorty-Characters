
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Cards from '../components/Cards'
import { CharacterProps } from '../store/store'

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

export type CardListProps = {
  characters: CharacterProps | any;
  onClick?: React.MouseEventHandler<HTMLDivElement> | any;
}

export default function CardList(props: CardListProps) {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <div className={classes.cards}>
        {props.characters.map((character: CharacterProps) => (
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