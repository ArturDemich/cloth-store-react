import { ApolloQueryResult } from "@apollo/client";
import { apolloClient } from "../graphql";
import { Categories, Category, ProductInputId, CategoryInput, CategoryQuery, Product } from "../storeg/interfaces";
import { GET_CATEGORIES_NAME, GET_CATEGORY, GET_PRODUCT } from "./queries";


export class DataService {
  static  getCategory(name: CategoryQuery): Promise<ApolloQueryResult<any>> {    
   return  apolloClient.query<CategoryInput>({
    query: GET_CATEGORY,
    variables:  {input: {title: name }},
  })    
  }

  static getCategories(): Promise<ApolloQueryResult<any>> {
    return apolloClient.query<Categories>({ query: GET_CATEGORIES_NAME })
  }

  static  getProduct(id: string): Promise<ApolloQueryResult<any>> {    
    return  apolloClient.query<any>({
     query: GET_PRODUCT,
     variables: {id: id },
   })    
   }
}

