"use client";

import { Card } from "@/components/ui/card"; // Use named import
import useNavigation from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

function DesktopNav() {
  const path = useNavigation();

  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-[100vh] lg:w-16 lg:px-2 lg:py-4">
      <nav>
        <ul className="flex flex-col items-center gap-4">
          {path.map((path, id) => {
            return (
              <li key={id} className="relative">
                <Link href={path.href}>
                  <Tooltip>
                    <TooltipTrigger asChild={true}>
                      <Button
                        size="icon"
                        variant={path.active ? "default" : "outline"}
                      >
                        <path.icon />
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>{path.label}</TooltipContent>
                  </Tooltip>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-col items-center gap-4 ">
        <UserButton />
      </div>
    </Card>
  );
}

export default DesktopNav;
