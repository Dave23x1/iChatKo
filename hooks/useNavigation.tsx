import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useNavigation = () => {
  const pathname = usePathname();

  const path = useMemo(
    () => [
      {
        label: "Messages",
        icon: MessageSquare,
        href: "/conversations",
        active: pathname === "/conversations",
      },
      {
        label: "friends",
        href: "/friends",
        icon: Users,
        active: pathname === "/friends",
      },
    ],
    [pathname]
  );

  return path;
};

export default useNavigation;
