import React from "react";

import { Card } from "@/components/ui/card";

type Props = React.PropsWithChildren<object>;

const ConversationContainer = ({ children }: Props) => {
  return (
    <Card className="w-full h-[calc(1oovh-32px)] lg:h-full p-2 flex flex-col gap-2">
      {children}
    </Card>
  );
};

export default ConversationContainer;
