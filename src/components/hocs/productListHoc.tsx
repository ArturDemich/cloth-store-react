import { useParams } from "react-router";

export const withHocList = (WrappedComponent: any) => (props: any) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};
