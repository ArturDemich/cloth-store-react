import { ApolloQueryResult } from "@apollo/client";
import { apolloClient } from "../graphql";
import { Categories, Category } from "../storeg/interfaces";

type Query = {
    query: any
}

export class DataService {
  static  getCategory(query: Query): Promise<ApolloQueryResult<any>> {
   return  apolloClient.query<Category>(query)    
  }

  static getCategories(query: Query): Promise<ApolloQueryResult<any>> {
    return apolloClient.query<Categories>(query)
  }
}

