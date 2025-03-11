import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import React from "react";

type Props = object;

const ConversationsPage: React.FC<Props> = () => {
  return (
    <>
      <ConversationFallback />
    </>
  );
};

export default ConversationsPage;
