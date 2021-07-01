import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Favorites () {
  const dispatch = useDispatch()
  const stock = useSelector((state: RootState) => state.stock)

  return(
    <h1>Favorites</h1>
  )
}