import React from "react";
import { useLocation, useParams } from "react-router";

export const withHocDescription = (WrappedComponent: any) => (props: any) => {
  const params = useParams();
  const location = useLocation();

  const color: any = [];
  let colorName: any = "";

  const size: any = [];
  let sizeName: any = "";

  const capacity: any = [];
  let capacityName: string = "";

  props.attributes.map((elem: any) => {
    if (elem.name == "Capacity") {
      capacityName = "Capacity";
      elem.items.map((el: any) => capacity.push(el));
    } else if (elem.name == "Color") {
      colorName = "Color";
      elem.items.map((el: any) => color.push(el));
    } else if (elem.name == "Size") {
      sizeName = "Size";
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
      colorName={colorName}
      sizeName={sizeName}
      capacityName={capacityName}
    />
  );
};
