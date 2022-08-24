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
    },

    setCategoriesNames(
      state,
      action: PayloadAction<{categories: Categories[]}>) {        
      state.categories = action.payload.categories      
    },

    setDefaultAttribute(state, action: PayloadAction<Product>){
      state.product = {...action.payload}
      action.payload.attributes.forEach((elem) => {        
        if(elem.name === FromAttribute.capacity) {   
          state.product.selectedCopacity = elem.items[0].value
        }else if(elem.name === FromAttribute.size) {
          state.product.selectedSize = elem.items[0].value
        }else if(elem.name === FromAttribute.color) {
          state.product.selectedColor = elem.items[0].value
        }               
      })               
    },

    setSelectedAttribute(
      state,
      action: PayloadAction<ActionAttribute>) {   
        if(action.payload.name === FromAttribute.capacity) {
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
        if((action.payload.product.attributes[0] == undefined)) {          
        } else if(!action.payload.product.selectedColor ||           
          (!action.payload.product.selectedSize && !action.payload.product.selectedCopacity)) {
            return
          }  
      
        const products: ProductInCart[] = state.cart.products        
        const existingProductIndex: number = products.findIndex((value) =>
           value.product.id === action.payload.product.id && 
           value.product.selectedColor === action.payload.product.selectedColor && 
           value.product.selectedCopacity === action.payload.product.selectedCopacity &&
           value.product.selectedSize === action.payload.product.selectedSize
        )

        if(existingProductIndex === -1 && !state.cart.products.length) {                    
            state.cart.products = [action.payload] 
          } else if(existingProductIndex === -1 && state.cart.products.length) {
            state.cart.products = [...products, action.payload] 
          } else {
             const item = products[existingProductIndex]   
             item.quantityProduct++
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
  setTottalCart, setSelectedAttribute,
  setDefaultAttribute } = dataSlice.actions;
export default dataSlice.reducer;