import {DataService} from '../services/dataService';
import { GET_CATEGORIES_NAME, GET_CATEGORY } from '../services/queries';
import { setCategories, setCategory } from './dataSlice';
import { CategoryInput, CategoryQuery } from './interfaces';
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
        const {data} = await DataService.getCategories({ query: GET_CATEGORIES_NAME }); 
        if (data) {           
          dispatch(setCategories(data.categories));
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        console.log(error);
      }
  }


