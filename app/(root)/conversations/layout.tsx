import React from "react";

type Props = React.PropsWithChildren<object>;

const Conversationslayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Conversationslayout;
