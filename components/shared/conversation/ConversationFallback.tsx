import React from "react";

import { Card } from "@/components/ui/card";
const ConversationFallback: React.FC = () => {
  return (
    <Card className="hidden lg:flex h-full w-full p-2 items-center justify-center bg-secondary text-secondary-foreground">
      Select/Start a conversation to get started!
    </Card>
  );
};

export default ConversationFallback;
