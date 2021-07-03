import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

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

type FavoriteProps = {
  favorites: CharacterProps[];
}

type RootState = ReturnType<typeof store.getState>

const initialState: FavoriteProps = {
  favorites: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
   initialState,

   reducers: {
    addFavorite: (state, action: PayloadAction<CharacterProps>) => {
      state.favorites = [
        ...state.favorites, 
        {
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          status: action.payload.status,
          species: action.payload.species,
          gender: action.payload.gender,
          origin: action.payload.origin,
          starred: action.payload.starred,
        },
      ]
    },

     removeFavorite: (state, action: PayloadAction<number>) => {
        state.favorites = state.favorites.filter(({id}) => id !== action.payload)
        return state
     },
     },
     
})

export const {  addFavorite, removeFavorite } = favoriteSlice.actions

const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
})

export const selectFavorites = (state: RootState) => state.favorites.favorites

export default store

