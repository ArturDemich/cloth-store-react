import React from "react";
import { useNavigate } from "react-router";

export const withHocNavBar = (WrappedComponent: any) => (props: any) => {
  const navigate = useNavigate();

  console.log(props);
  /*  React.useEffect(() => {
    if (props.categoriesName === []) {
      navigate("/product-cart");
    }
  }); */

  return <WrappedComponent {...props} navigate={navigate} />;
};
