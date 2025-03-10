import React from "react";

type Props = React.
PropsWithChildren<object>;

const layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default layout;
