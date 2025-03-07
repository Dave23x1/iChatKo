import React from "react";
import Image from "next/image";
type Props = {
  size?: number;
};

const LoadingLogo = ({ size = 100 }: Props) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={size}
        height={size}
        className="animate-pulse duration-800"
      />
    </div>
  );
};
export default LoadingLogo;
