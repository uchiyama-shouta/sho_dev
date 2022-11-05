import Link from "next/link";
import type { FC, ReactNode } from "react";

import { HiChevronRight } from "react-icons/hi";

type Props = {
  children?: ReactNode;
  href: string;
};

const NextButton: FC<Props> = ({ children, href }) => {
  return (
    <Link
      className="flex items-center gap-2 rounded-lg border border-gray-700  bg-gray-800 py-2 px-5"
      href={href}
    >
      {children ? (
        children
      ) : (
        <>
          次へ
          <HiChevronRight className="h-4 w-4" />
        </>
      )}
    </Link>
  );
};

export default NextButton;
