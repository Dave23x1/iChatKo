import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";
import React from "react";

type Props = React.PropsWithChildren<{}>;

const Conversationslayout = ({ children }: Props) => {
  return (
    <SidebarWrapper>
      <div>{children}</div>
    </SidebarWrapper>
  );
};

export default Conversationslayout;
