import { Attribute, Categories, Currency, Product, ProductInCart, setQuantityInCart } from "../storeg/interfaces"


export interface PropsNavBar {
categoriesName: Categories[]
currentCurrency: string
getCategoriesNameThunk: () => void
quantityInCart: number
setTottalCart: (action: string) => void
setCartFromLS: () => void
}

export interface StateNavBar {
    showMiniCart: boolean 
    showCurrency: boolean   
}

export interface PropsProductCard {
currency: Currency
inCart: boolean
setCartItems: (action: ProductInCart) => void
setDefaultAttribute: (action: Product) => void
product: Product
productState: Product
}

export interface StateProductCard {
    hover: boolean
}
 
export interface PropsMiniCartItem {
capacity: Attribute[]
capacityName: string
color: Attribute[]
colorName: string
currency: string
params: {productId: string}
product: Product
quantityInCart: number
quantityProduct: number
setQuantityProductInCart: (action: setQuantityInCart) => void
size: Attribute[]
sizeName: string
}


export interface PropsMiniCart {
cartItem: ProductInCart[]
currencySymbol: string
hideModal: () => void
quantity: number
setTottalCart: (action: string) => void
tottal: number
}

export interface PropsDropdownMenu {
currencies: Currency[]
currentCurrency: Currency
showCurrency: boolean
getCurrencyThunk: () => void
setCurrentCurrency: (action: Currency) => any
openCurrency: () => void
}

export interface StateDropdownMenu {
    isActive: boolean
}

export interface PropsCartItem {
capacity: Attribute[]
color: Attribute[]
colorName: string
currency: string
product: Product
quantityInCart: number
quantityProduct: number
setQuantityProductInCart: (action: setQuantityInCart) => void
size: Attribute[]
sizeName: string
capacityName: string
selectedCopacity: string
selectedColor: string
selectedSize: string
}

export interface StateCartItem {
    index: number
}