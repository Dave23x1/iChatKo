import React from "react";
import DesktopNav from "../sidebar/nav/DesktopNav";
type Props = React.PropsWithChildren<{}>;

const SidebarWrapper = ({ children }: Props) => {
  return (
    <div className="w-full h-full p-4 flex flex-col lg:flex-row gap-4">
      <DesktopNav />
      <main className="h-[calc(100%-80px)] lg:h-full w-full flex gap-4">
        {children}
      </main>
    </div>
  );
};

export default SidebarWrapper;
