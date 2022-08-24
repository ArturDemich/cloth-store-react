import {DataService} from '../services/dataService';
import { setCategoriesNames, setCategory, setCurrency, setProduct } from './dataSlice';
import { AppDispatch } from './store';


export const getCategoryThunk = (payload: string) => async (dispatch: AppDispatch) => {
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
          dispatch(setCategoriesNames(data));
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
          dispatch(setCurrency(data));
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
          dispatch(setProduct(data.product));
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        console.log(error);
      }
  }
