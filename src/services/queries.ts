import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
query getCategory {
  category {
    name
    products {
        id,
        name,
        inStock,
        gallery,
        description,
        category,
        
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