"use client";

import { Card } from "@/components/ui/card";
import useNavigation from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

function MonileNav() {
  const path = useNavigation();

  return (
    <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden">
      <nav className="w-full">
        <ul className="flex justify-evenly items-center ">
          {path.map((path, id) => {
            return (
              <li key={id} className="relative">
                <Tooltip>
                  <TooltipTrigger asChild={true}>
                    <span>
                      <Link href={path.href} passHref>
                        <Button
                          size="icon"
                          variant={path.active ? "default" : "outline"}
                        >
                          {path.icon && <path.icon />}{" "}
                        </Button>
                      </Link>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{path.label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
          <li className="">
            <UserButton />
          </li>
        </ul>
      </nav>
    </Card>
  );
}

export default MonileNav;
