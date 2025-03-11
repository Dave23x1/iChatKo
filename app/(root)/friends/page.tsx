import React from "react";
import ItemList from "@/components/shared/item-list/ItemList";
import ConversationFallback from "@/components/shared/conversation/ConversationFallback";

type Props = object;

const FriendsPage: React.FC<Props> = () => {
  return (
    <>
      <ItemList title="Friends">Friends Page</ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
