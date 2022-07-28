import {DataService} from '../services/dataService';
import { setCategoriesNames, setCategory, setCurrency, setProduct } from './dataSlice';
import { CategoryQuery } from './interfaces';
import { AppDispatch } from './store';


export const getCategoryThunk = (payload: CategoryQuery) => async (dispatch: AppDispatch) => {
    try {     
        const {data} = await DataService.getCategory(payload); 
        if (data) {           
          dispatch(setCategory(data.category));
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        console.log(error);
      }
  }
  
 
  export const getCategoriesNameThunk = () => async (dispatch: AppDispatch) => {
    try {     
        const {data} = await DataService.getCategories(); 
        if (data) {    
            console.log('thunkNames', data.categories[0].name)       
          dispatch(setCategoriesNames(data.categories));
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        console.log(error);
      }
  }


  export const getCurrencyThunk = () => async (dispatch: AppDispatch) => {
    try {     
        const {data} = await DataService.getCurrencies(); 
        if (data) {    
            //console.log('thunkCurrency', data.currencies)       
          dispatch(setCurrency(data.currencies));
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        console.log(error);
      }
  }

  export const getProductThunk = (payload: string) => async (dispatch: AppDispatch) => {
    try {     
        const {data} = await DataService.getProduct(payload); 
        if (data) {           
          console.log('productThunk', data.product)
          dispatch(setProduct(data.product));
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        console.log(error);
      }
  }

