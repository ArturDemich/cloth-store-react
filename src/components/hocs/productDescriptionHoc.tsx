import React from "react";
import { useLocation, useParams } from "react-router";

export const withHocDescription = (WrappedComponent: any) => (props: any) => {
  const params = useParams();
  const location = useLocation();

  const color: any = [];
  const size: any = [];
  const capacity: any = [];
  let attributtesName: string = "";

  props.attributes.map((elem: any) => {
    if (elem.name == "Capacity") {
      attributtesName = "Capacity";
      elem.items.map((el: any) => capacity.push(el));
    } else if (elem.name == "Color") {
      attributtesName = "Color";
      elem.items.map((el: any) => color.push(el));
    } else if (elem.name == "Size") {
      attributtesName = "Size";
      elem.items.map((el: any) => size.push(el));
    }
  });

  console.log("hoc", props);

  return (
    <WrappedComponent
      {...props}
      params={params}
      lacation={location.state}
      color={color}
      size={size}
      capacity={capacity}
      attributtesName={attributtesName}
    />
  );
};
