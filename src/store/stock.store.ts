import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const stock = createSlice({
  name: 'favorite',
   initialState: {
    name: '',
    image: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
   },

   reducers: {
     add(state, action: PayloadAction<string>) {
      state.name = action.payload 
      state.image = action.payload
      state.status = action.payload
      state.species = action.payload
      state.gender = action.payload
      state.origin = action.payload
     }
   }
})

export const { add } = stock.actions
export default stock.reducer

