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
    quantityInCart: 0,
  },
  category: {
    name: '',
    products: []
  },
  currencies: [],
  categoryInputName: '',
  cart: {
    products: [],    
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
      state.product.attributes = action.payload.attributes
      state.product.brand = action.payload.brand
      state.product.category = action.payload.category
      state.product.description = action.payload.description
      state.product.gallery = action.payload.gallery
      state.product.id = action.payload.id
      state.product.inStock = action.payload.inStock
      state.product.name = action.payload.name
      state.product.prices = action.payload.prices
      state.product.quantityInCart = 0
      console.log('sliceProduct', action.payload)      
    },

    setCartItems(
      state,
      action: PayloadAction<Product>) {
        console.log('sliceCartItems', action.payload) 
        const products: Product[] = state.cart.products
        if(products) {
          const existingProductIndex:number = products.findIndex((value) =>{
            return value.id === action.payload.id
          })
          if(existingProductIndex === -1) {
            state.cart.products = [...products, action.payload]
            
          } else {
            products[existingProductIndex].quantityInCart = products[existingProductIndex].quantityInCart + 1
            state.cart.products = [ ...products]
          }
        }
        
      
      

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