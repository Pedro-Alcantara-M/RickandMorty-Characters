
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Cards from '../components/Cards'
import Pagination from '@material-ui/lab/Pagination';
import { CharacterProps } from '../store/store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
      background: theme.palette.grey[300],
      margin: theme.spacing(1),
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

export type CardListProps = {
  count: number | undefined;
  page: number;
  pages?: number;
  characters: CharacterProps | any;
  onChange:  any;
  onClick?: React.MouseEventHandler<HTMLDivElement> | any;
}

export default function CardList(props: CardListProps ) {
  const classes = useStyles();

  return (
    <div>
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
          <div className={classes.pagination} >
          <Pagination  
            color='primary'
            count={props?.count} 
            page={props?.page} 
            onChange={props?.onChange}
            />  
          </div>
      </div>
    )
}