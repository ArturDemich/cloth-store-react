import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductCard from '../components/productCard';
import { Categories, Category, CategoryName, Currency, Data, Product, ProductInCart } from './interfaces';

const initialState: Data = {
  categories: [],
  product: {
    id: '',
    name: '',
    inStock: true,
    gallery: [''],
    description: '',
    category: '',
    attributes: [],
    prices: [],
    brand: '',    
  },
  category: {
    name: '',
    products: []
  },
  currencies: [],
  categoryInputName: '',
  cart: {
    products: [{
      product: {
        id: '',
        name: '',
        inStock: true,
        gallery: [''],
        description: '',
        category: '',
        attributes: [],
        prices: [],
        brand: '',        
      },
      quantityProduct: 0
    }],    
    quantity: 0,
    tottal: 0,
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
      //console.log('sliceCategory', action.payload)
      //localStorage.setItem('weathers', JSON.stringify(state.weathers))
    },

    setCategoriesNames(
      state,
      action: PayloadAction<Categories[]>) {        
      state.categories = action.payload
     // console.log('slice', action.payload)      
    },

    setCategoryName(
      state,
      action: PayloadAction<Data['categoryInputName']>) {        
      state.categoryInputName = action.payload
      //console.log('sliceName', state.categoryInputName)      
    },

    
    setProduct(
      state,
      action: PayloadAction<Product>) {        
      state.product = action.payload          
      //console.log('sliceProduct', action.payload)      
    },

    setCartItems(
      state,
      action: PayloadAction<ProductInCart>) {
        console.log('sliceCartItems', action.payload)

        const products: ProductInCart[] = state.cart.products        
        const existingProductIndex:number = products.findIndex((value) =>{
          return value.product.id === action.payload.product.id
        })

        if(existingProductIndex === -1 && !state.cart.products[0].product.id) {                    
            state.cart.products = [action.payload] 
          } else if(existingProductIndex === -1 && state.cart.products[0].product.id) {
            state.cart.products = [...products, action.payload] 
          } else {
            products[existingProductIndex].quantityProduct = products[existingProductIndex].quantityProduct + 1
            state.cart.products = [ ...products]
          }
          
        state.cart.quantity ++
        state.cart.tottal += action.payload.product.prices[0].amount
      

      //localStorage.setItem('itemCart', JSON.stringify(state.cart.products))     
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

export const { setCategory, setCategoriesNames, setCategoryName, setProduct, setCartItems } = dataSlice.actions;
export default dataSlice.reducer;