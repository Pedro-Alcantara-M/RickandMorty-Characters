import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type CharacterProps = {
  id: string;
  name: string,
  image: string,
  status: string,
  species: string,
  gender: string,
  origin: string,
}

type FavoriteProps = {
  favorites: CharacterProps[];
}

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
        }
      ]
     },

     removeFavorite: (state, action: PayloadAction<string>) => {
        state.favorites = state.favorites.filter(({id}) => id !== action.payload)
     },
     },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
})

type RootState = ReturnType<typeof store.getState>

export const selectFavorites = (state: RootState) => state.favorites.favorites

export default store

