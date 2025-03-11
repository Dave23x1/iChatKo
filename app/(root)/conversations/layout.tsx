import React from "react";
import ItemList from "@/components/shared/item-list/ItemList";
type Props = React.PropsWithChildren<object>;

const Conversationslayout = ({ children }: Props) => {
  return (
    <div>
      <ItemList title="Conversations">Conversations Page</ItemList>
      {children}
    </div>
  );
};

export default Conversationslayout;
