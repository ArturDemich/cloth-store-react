import React from "react";
import { useLocation, useParams } from "react-router";

export const withHocDescription = (WrappedComponent: any) => (props: any) => {
  const params = useParams();
  const location = useLocation();

  console.log("hoc", location);

  return (
    <WrappedComponent {...props} params={params} lacation={location.state} />
  );
};
