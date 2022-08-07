import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FromAttribute } from '../components/enums';
import { ActionAttribute, Cart, Categories, Category, Currency, Data, Product, ProductInCart, setQuantityInCart } from './interfaces';



const initialState: Data = {
  categories: [{name: '', __typename: ''}],
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
    },

    setCategoriesNames(
      state,
      action: PayloadAction<{categories: Categories[]}>) {        
      state.categories = action.payload.categories      
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
    

    setCurrency(state, action: PayloadAction<{currencies: Currency[]}>) {     
      state.currencies = action.payload.currencies
      state.currentCurrency = action.payload.currencies[0]
    },

    setCurrentCurrency(state, action: PayloadAction<Currency>) {      
      state.currentCurrency = action.payload            
    },  

    
    setProduct(
      state,
      action: PayloadAction<Product>) {        
      state.product = action.payload                     
    },

    setTottalCart(
      state,
      action: PayloadAction<string>) {
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
      localStorage.setItem('cart', JSON.stringify(state.cart))     
    },


    setQuantityProductInCart(
      state,
      action: PayloadAction<setQuantityInCart>) {
        const products: ProductInCart[] = state.cart.products        
        const existingProductIndex: number = products.findIndex((value) =>{
          return value.product.id === action.payload.product.id &&
          value.product.selectedColor === action.payload.product.selectedColor &&
          value.product.selectedCopacity === action.payload.product.selectedCopacity &&
          value.product.selectedSize === action.payload.product.selectedSize
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
        localStorage.setItem('cart', JSON.stringify(state.cart))       
      },
      

      setCartFromLS(state) {
        const cartFromLS: string | null = localStorage.getItem('cart')
        const parsedCart: Cart = cartFromLS ? JSON.parse(cartFromLS) : state.cart
        state.cart = parsedCart
      }   
  },
});

export const { setCategory, setCategoriesNames, 
   setProduct, setCartFromLS,
  setCartItems, setQuantityProductInCart, 
  setCurrency, setCurrentCurrency, 
  setTottalCart, setSelectedAttribute, } = dataSlice.actions;
export default dataSlice.reducer;