import { Attributes } from "html-react-parser/lib/attributes-to-props"
import { ActionAttribute, Attribute, Cart, Currency, Price, Product, ProductInCart } from "../../storeg/interfaces"


export interface PropsDescription {
    attributes: Attributes[]
    brand: string
    capacity: Attribute[]
    capacityName: string
    cart: Cart
    category: string
    color: Attribute[]
    colorName: string
    currency: string
    description: string
    gallery: [string]
    getProductThunk: (payload: string) => void
    id: string
    inStock: boolean
    name: string
    params: {productId: string}
    prices: Price[]
    product: Product
    setCartItems: (action: ProductInCart) => void
    setSelectedAttribute: (action: ActionAttribute) => void
    size: Attribute[]
    sizeName: string
    selectedCopacity: string
    selectedColor: string
    selectedSize: string
       
  }

export interface StateDescription {
    image: string
}



export interface PropsProductList {
    categoryName: string
    currentCurrency: Currency
    getCategoryThunk: (payload: string) => void
    inputName: string
    name: string
    params: {categoryName: string}
    productInCart: ProductInCart[]
    products:Product[]

}


export interface PropsCartPage {
    cartItem: ProductInCart[]
    currencySymbol: string
    quantity: number
    tottal: number
}