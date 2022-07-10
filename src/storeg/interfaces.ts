
export interface  Price {
    currency: Currency
    amount: number
  }
export interface Attribute {
    displayValue: String
    value: String
    id: String
}
export interface AttributeSet {
    id: String
    name: String
    type: String
    items: [Attribute]
  }
export interface Product {
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
export interface Categories {
    name: string,
    __typename: string    
}
export interface Category {
    name: String
    products: Product[]
  }  
export interface CategoryName {
    categoryName: string
}
export interface Currency {
    label: String
    symbol: String
  }

export interface Data {
    categories: Categories[]
    category: Category
    product: Product[]
    currencies: Currency[]
    categoryInputName: string  
  };

  export interface CategoryQuery {    
      query: any 
  }

  export interface CategoryInput {
    query: any 
    variables: {
      title: string
    }
  }