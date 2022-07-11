import gql from "graphql-tag";
import {CategoryInput} from "../storeg/interfaces"

export const GET_CATEGORY = gql`
query getCategory($input: CategoryInput) {
  category(input: $input) {
    name
    products {
        id,
        name,
        inStock,
        gallery,
        description,
        category,
        attributes {
          id,
          name,
          type,
          items {
            displayValue,
            value,
            id,
          }
        }
        prices {
            currency {label},
            amount
          },
        brand,
    }
  }
}
`;

export const GET_CATEGORIES_NAME = gql`
query getCategories {
  categories {
    name    
  }
}
`;

export const GET_PRODUCT = gql`
query getProduct($id: String!) {  
    product(id: $id) {
        id,
        name,
        inStock,
        gallery,
        description,
        category,
        attributes {
          id,
          name,
          type,
          items {
            displayValue,
            value,
            id,
          }
        }
        prices {
            currency {label},
            amount
          },
        brand,
    }
  }
`;