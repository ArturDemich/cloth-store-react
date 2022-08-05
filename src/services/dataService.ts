import { ApolloQueryResult } from "@apollo/client";
import { apolloClient } from "../graphql";
import { Categories, Category, ProductInputId, CategoryInput, Product, Currency } from "../storeg/interfaces";
import { GET_CATEGORIES_NAME, GET_CATEGORY, GET_CURRENCY, GET_PRODUCT } from "./queries";

 
export class DataService {
  static  getCategory(name: string ): Promise<ApolloQueryResult<any>> {    
   return  apolloClient.query<CategoryInput>({
    query: GET_CATEGORY,
    variables:  {input: {title: name }},
    })    
  }

  static getCategories(): Promise<ApolloQueryResult<any>> {
    return apolloClient.query<Categories>({ query: GET_CATEGORIES_NAME })
  }

  static getCurrencies(): Promise<ApolloQueryResult<any>> {
    return apolloClient.query<Currency>({ query: GET_CURRENCY })
  }

  static  getProduct(id: string): Promise<ApolloQueryResult<any>> {    
    return  apolloClient.query<any>({
     query: GET_PRODUCT,
     variables: {id: id },
   })    
   }
}

