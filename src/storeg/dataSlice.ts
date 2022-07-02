import { ApolloQueryResult } from '@apollo/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories, Category, Currency, Product } from './types';

export type Data = {
  categories: Categories
  category: Category
  product: Product[]
  currencies: Currency[]
};

const initialState: Data = {
  categories: {
    name:[]
  },
  product: [],
  category: {
    name: '',
    products: []
  },
  currencies: [],
 };

export const dataSlice = createSlice({
  name: 'data_from_endpoint',
  initialState,
  reducers: {
    
    setCategory(
      state,
      action: PayloadAction<Category>) {        
      state.category = action.payload
      
      //localStorage.setItem('weathers', JSON.stringify(state.weathers))
    },

    setCategories(
      state,
      action: PayloadAction<Categories>) {        
      state.categories = action.payload
      console.log('slice', state.categories)
      
    },

    /*
    removeWeatherCard(state, action: PayloadAction<{id: number}>){
      state.weathers = [...state.weathers.filter(el => el.id !== action.payload.id)]
      localStorage.setItem('weathers', JSON.stringify(state.weathers))
    },
    setWeathersFromLS(state, action: PayloadAction<{ weathers: Weather[] }>){
      state.weathers = action.payload.weathers
    }*/
  },
});

export const { setCategory, setCategories } = dataSlice.actions;
export default dataSlice.reducer;