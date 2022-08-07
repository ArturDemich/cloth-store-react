import { ApolloQueryResult } from "@apollo/client";
import { apolloClient } from "../graphql";
import { Categories, Category, ProductInputId, CategoryInput, Product, Currency } from "../storeg/interfaces";
import { GET_CATEGORIES_NAME, GET_CATEGORY, GET_CURRENCY, GET_PRODUCT } from "./queries";

 
export class DataService {
  static  getCategory(name: string ): Promise<ApolloQueryResult<{category: Category}>> {    
   return  apolloClient.query<{category: Category}>({
    query: GET_CATEGORY,
    variables:  {input: {title: name }},
    })    
  }

  static getCategories(): Promise<ApolloQueryResult<{categories: Categories[]}>> {
    return apolloClient.query<{categories: Categories[]}>({ query: GET_CATEGORIES_NAME })
  }

  static getCurrencies(): Promise<ApolloQueryResult<{currencies: Currency[]}>> {
    return apolloClient.query<{currencies: Currency[]}>({ query: GET_CURRENCY })
  }

  static  getProduct(id: string): Promise<ApolloQueryResult<{product: Product}>> {    
    return  apolloClient.query<{product: Product}>({
     query: GET_PRODUCT,
     variables: {id: id },
   })    
   }
}

