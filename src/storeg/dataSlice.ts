import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories, Category, CategoryName, Currency, Data, Product } from './interfaces';

const initialState: Data = {
  categories: [],
  product: [],
  category: {
    name: '',
    products: []
  },
  currencies: [],
  categoruInputName: {
    categoryName: ''
  }
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
      action: PayloadAction<Categories[]>) {        
      state.categories = action.payload
     // console.log('slice', action.payload)      
    },

    setCategoryName(
      state,
      action: PayloadAction<CategoryName>) {        
      state.categoruInputName = action.payload
      console.log('slice', action.payload)      
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

export const { setCategory, setCategories, setCategoryName } = dataSlice.actions;
export default dataSlice.reducer;