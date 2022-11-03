import Link from "next/link";

import { HiChevronLeft } from "react-icons/hi";

const NextButton = () => {
  return (
    <Link
      className="flex items-center gap-2 rounded-lg border border-gray-700  bg-gray-800 py-2 px-5"
      href=""
    >
      <HiChevronLeft className="h-4 w-4" />
      前へ
    </Link>
  );
};

export default NextButton;
