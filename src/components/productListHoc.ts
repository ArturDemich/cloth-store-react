import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';
import { compose } from "@reduxjs/toolkit";
import { useCustomSelector } from "../hooks/hook";
import { selectData } from "../storeg/selectors";

const query = gql`
query getCategory {    
      category{
        name,
        products {name}
      }
    }
  `;
  export default compose(graphql(query))


 /* function withMyHook(Component: any) {
    return function WrappedComponent(props: any) {
      let myHookValue = useCustomSelector(selectData);
      return <Component {...props} myHookValue={myHookValue} />;
    }
  }


export const withHocSelector = (Component: any) => {

}
*/