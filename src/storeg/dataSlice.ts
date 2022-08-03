import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FromAttribute } from '../components/enums';
import ProductCard from '../components/productCard';
import { ActionAttribute, Categories, Category, CategoryName, Currency, Data, Product, ProductInCart, setQuantityInCart } from './interfaces';



const initialState: Data = {
  categories: [],
  product: {
    id: '',
    name: '',
    inStock: true,
    gallery: [''],
    description: '',
    category: '',
    brand: '',
    attributes: [],
    prices: [],
    selectedColor: '',
    selectedSize: '',
    selectedCopacity: '',
        
  },
  category: {
    name: '',
    products: []
  },
  currencies: [],
  currentCurrency: {
    symbol: '',
    label: '',
  },
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
        brand: '',
        attributes: [],
        prices: [],
        selectedColor: '',
        selectedSize: '',
        selectedCopacity: '',
                
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

    setSelectedAttribute(
      state,
      action: PayloadAction<ActionAttribute>) {   
        if(action.payload.name === FromAttribute.copacity) {
          state.product.selectedCopacity = action.payload.attributId
        }else if(action.payload.name === FromAttribute.color) {
          state.product.selectedColor = action.payload.attributId
        } else if(action.payload.name === FromAttribute.size) {
          state.product.selectedSize = action.payload.attributId
        }         
    },
    

    setCurrency(state, action: PayloadAction<Currency[]>) {
      //console.log('sliceCurrency', action.payload)
      state.currencies = action.payload
      state.currentCurrency = action.payload[0]
    },

    setCurrentCurrency(state, action: PayloadAction<Currency>) {      
      state.currentCurrency = action.payload      
      //console.log('sliceCCurrency', state.currentCurrency)
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

    setTottalCart(
      state,
      action: PayloadAction<any>) {
        const products: ProductInCart[] = state.cart.products
        state.cart.tottal = 0
        
        products.forEach((elem) => {                            
          elem.product.prices.forEach((price) => {
            if(price.currency.label === action.payload) {             
              state.cart.tottal += price.amount * elem.quantityProduct
            }
          })
        })
      },


    setCartItems(
      state,
      action: PayloadAction<ProductInCart>) {        
        const products: ProductInCart[] = state.cart.products        
        const existingProductIndex: number = products.findIndex((value) =>{
          return value.product.id === action.payload.product.id
        })
        if(existingProductIndex === -1 && !state.cart.products[0].product.id) {                    
            state.cart.products = [action.payload] 
          } else if(existingProductIndex === -1 && state.cart.products[0].product.id) {
            state.cart.products = [...products, action.payload] 
          } else {
            for( let elem of products) {
              if(elem.product.id === action.payload.product.id &&
                elem.product.selectedColor === action.payload.product.selectedColor) {
                  if(elem.product.selectedCopacity === action.payload.product.selectedCopacity) {
                    if(elem.product.selectedSize === action.payload.product.selectedSize) {
                      elem.quantityProduct = elem.quantityProduct + 1
                      state.cart.products = [ ...products]
                    }
                  }
              } else {
                state.cart.products = [...products, action.payload]
              }
            }
          }          
        state.cart.quantity ++
        
      //localStorage.setItem('itemCart', JSON.stringify(state.cart.products))     
    },

    setQuantityProductInCart(
      state,
      action: PayloadAction<setQuantityInCart>) {
        const products: ProductInCart[] = state.cart.products        
        const existingProductIndex: number = products.findIndex((value) =>{
          return value.product.id === action.payload.product.id
        })
        if(action.payload.operator === '+') {
        products[existingProductIndex].quantityProduct = products[existingProductIndex].quantityProduct + 1
        state.cart.products = [ ...products]
        state.cart.quantity ++       
        } else {
          products[existingProductIndex].quantityProduct --
          
          if(products[existingProductIndex].quantityProduct === 0) {
            products.splice(existingProductIndex, 1) 
          } 
          products[0] ? state.cart.products = [ ...products] : state.cart.products = initialState.cart.products
        state.cart.quantity --        
        }       
      }

    /*
    [ ...products.filter(el => el.product.id === products[existingProductIndex].product.id)]

    removeWeatherCard(state, action: PayloadAction<{id: number}>){
      state.weathers = [...state.weathers.filter(el => el.id !== action.payload.id)]
      localStorage.setItem('weathers', JSON.stringify(state.weathers))
    },
    setWeathersFromLS(state, action: PayloadAction<{ weathers: Weather[] }>){
      state.weathers = action.payload.weathers
    }*/
  },
});

export const { setCategory, setCategoriesNames, 
  setCategoryName, setProduct, 
  setCartItems, setQuantityProductInCart, 
  setCurrency, setCurrentCurrency, 
  setTottalCart, setSelectedAttribute, } = dataSlice.actions;
export default dataSlice.reducer;