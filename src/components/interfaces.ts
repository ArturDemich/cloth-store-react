import { type } from "os"
import { Attribute, AttributeSet, Categories, Currency, Price, Product, ProductInCart, setQuantityInCart } from "../storeg/interfaces"


export interface PropsNavBar {
categoriesName: Categories[]
categoruInputName: string
currentCurrency: string
getCategoriesNameThunk: () => void
quantityInCart: number
setTottalCart: (action: string) => void
}

export interface StateNavBar {
    showMiniCart: boolean
}

export interface PropsProductCard {
attributes: AttributeSet[]
brand: string
category: string
currency: Currency
description: string
gallery: string[]
id: string
inCart: boolean
inStock: boolean
name: string
prices: Price[]
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
getCurrencyThunk: () => void
setCurrentCurrency: (action: Currency) => any
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