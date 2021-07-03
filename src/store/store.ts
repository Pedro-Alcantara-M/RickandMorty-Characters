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
  characters: CharacterProps[]
}

type RootState = ReturnType<typeof store.getState>

const initialState: FavoriteProps = {
  favorites: [],
  characters: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
   initialState,

   reducers: {
    addFavorite: (state, action: PayloadAction<CharacterProps>) => {
      const index = state.characters.findIndex((char) => char.id === action.payload.id)
      console.log(index)
      console.log(state.characters)
      state.characters[index].starred = true

      return state
     },

     removeFavorite: (state, action: PayloadAction<number>) => {
        state.favorites = state.favorites.filter(({id}) => id !== action.payload)
        return state
     },
     },
     
})

const charactersSlice = createSlice({
  name: 'characters',
   initialState,

   reducers: {
    addCharacters: (state, action: PayloadAction<CharacterProps[]>) => {
      state.characters = [...action.payload]
      return state
     },

     removeCharacters: (state, action: PayloadAction<number>) => {
        state.favorites = state.favorites.filter(({id}) => id !== action.payload)
        return state
     },

     addFavorite: (state, action: PayloadAction<CharacterProps>) => {
      const index = state.characters.findIndex((char) => char.id === action.payload.id)
      console.log(index)
      console.log(state.characters)
      state.characters[index].starred = true

      return state
     },

     removeFavorite: (state, action: PayloadAction<number>) => {
      const index = state.characters.findIndex((char) => char.id === action.payload)
      state.characters[index].starred = false
        
      return state
     },
     },
     
})


export const { addCharacters, removeCharacters, addFavorite, removeFavorite } = charactersSlice.actions

const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
    characters: charactersSlice.reducer,
  },
})

export const selectFavorites = (state: RootState) => state.characters.characters.filter(({starred}) => starred)

export const selectCharacters = (state: RootState) => state.characters.characters

export default store

