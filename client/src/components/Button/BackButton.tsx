import Link from "next/link";
import type { FC, ReactNode } from "react";

import { HiChevronLeft } from "react-icons/hi";

type Props = {
  children?: ReactNode;
  href: string;
};

const BackButton: FC<Props> = ({ children, href }) => {
  return (
    <Link
      className="flex max-w-[100px] items-center gap-2 rounded-lg  border border-gray-700  bg-gray-800 py-2 px-5"
      href={href}
    >
      {children ? (
        children
      ) : (
        <>
          <HiChevronLeft className="h-4 w-4" />
          前へ
        </>
      )}
    </Link>
  );
};

export default BackButton;
