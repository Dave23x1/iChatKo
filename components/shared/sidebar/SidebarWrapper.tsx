import React from "react";
import DesktopNav from "../sidebar/nav/DesktopNav";
import MobileNav from "../sidebar/nav/Mobilenav";
type Props = React.PropsWithChildren<object>;

const SidebarWrapper = ({ children }: Props) => {
  return (
    <div className="w-full h-full p-4 flex flex-col lg:flex-row gap-4">
      <MobileNav />
      <DesktopNav />
      <main className="h-[calc(100%-80px)] lg:h-full w-full flex gap-4">
        {children}
      </main>
    </div>
  );
};

export default SidebarWrapper;
