
export interface  Price {
    currency: Currency
    amount: number
  }
export interface Attribute {
    displayValue: string
    value: string
    id: string
}
export interface AttributeSet {
    id: string
    name: string
    type: string
    items: [Attribute]
  }

 
export interface Product {
    id: string,
    name: string,
    inStock: boolean,
    gallery: string[],
    description: string,
    category: string,
    brand: string,
    attributes: AttributeSet[],
    prices: Price[],
    selectedSize: string,
    selectedColor: string,
    selectedCopacity: string,    
}
export interface Categories {
    name: string,
    __typename: string    
}
export interface Category {
    name: string
    products: Product[]
  }  
export interface CategoryName {
    categoryName: string
}
export interface Currency {
    label: string
    symbol: string
  } 

export interface Data {
    categories: Categories[]
    category: Category
    product: Product
    currencies: Currency[]
    currentCurrency: Currency
    categoryInputName: string  
    cart: Cart
  };

  export interface CategoryInput {
    query: any 
    variables: {
      title: string
    }
  }

  export interface ProductInputId {
    query: any 
    variables: {
      id: string
    }
  }

  export interface ProductInCart {
    product: Product
    quantityProduct: number
  }


  export interface Cart {
    products: ProductInCart[]
    quantity: number
    tottal: number
  }

  export interface setQuantityInCart {
    product: Product
    operator: string
  }