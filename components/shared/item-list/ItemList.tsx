import React from "react";
import { Card } from "@/components/ui/card";
type Props = React.PropsWithChildren<{
  title: string;
  action?: React.ReactNode;
}>;

function ItemList({ children, title, action: Action }: Props) {
  return (
    <Card className="h-full w-full lg:flex-none lg:w-80 p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2x1 font-semibold tracking-tight">{title}</h1>
        {Action ? Action : null}
      </div>
      <div className="w-full h-full flex flex-col items-center  justify-start gap-2">
        {children}
      </div>
    </Card>
  );
}

export default ItemList;
