import { useParams } from "react-router";
import { Attribute, AttributeSet } from "../../storeg/interfaces";

export const withHocDescription = (WrappedComponent: any) => (props: any) => {
  const params = useParams();

  const color: Attribute[] = [];
  let colorName: string = "";

  const size: Attribute[] = [];
  let sizeName: string = "";

  const capacity: Attribute[] = [];
  let capacityName: string = "";

  function checkProps(data: AttributeSet[]) {
    data.map((elem: AttributeSet) => {
      if (elem.name == "Capacity") {
        capacityName = "Capacity";
        elem.items.map((el: Attribute) => capacity.push(el));
      } else if (elem.name == "Color") {
        colorName = "Color";
        elem.items.map((el: Attribute) => color.push(el));
      } else if (elem.name == "Size") {
        sizeName = "Size";
        elem.items.map((el: Attribute) => size.push(el));
      }
    });
  }

  props.attributes
    ? checkProps(props.attributes)
    : checkProps(props.product.attributes);

  return (
    <WrappedComponent
      {...props}
      params={params}
      color={color}
      size={size}
      capacity={capacity}
      colorName={colorName}
      sizeName={sizeName}
      capacityName={capacityName}
    />
  );
};
