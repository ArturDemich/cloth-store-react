import { type } from "os"

export type  Price = {
    currency: Currency
    amount: number
  }


export type Attribute = {
    displayValue: String
    value: String
    id: String
}

export type AttributeSet = {
    id: String
    name: String
    type: String
    items: [Attribute]
  }


export type Product = {
    id: String,
    name: String,
    inStock: Boolean,
    gallery: [String],
    description: String,
    category: String,
    attributes: [AttributeSet],
    prices: [Price],
    brand: String
}

export type Categories = {
    name: string[],
    
}

export type Category = {
    name: String
    products: Product[]
  }
  


export type Currency = {
    label: String
    symbol: String
  }