"use client";

import { Card } from "@/components/ui/card"; // Use named import
import useNavigation from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";

function DesktopNav() {
  const path = useNavigation();

  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4">
      <nav></nav>
      <div className="flex flex-col items-center gap-4">
        <UserButton />
      </div>
    </Card>
  );
}

export default DesktopNav;
