import Link from "next/link";

import { HiChevronRight } from "react-icons/hi";

const BackButton = () => {
  return (
    <Link
      className="flex items-center gap-2 rounded-lg border  border-gray-700 bg-gray-800  py-2 px-5"
      href=""
    >
      次へ
      <HiChevronRight className="h-4 w-4" />
    </Link>
  );
};

export default BackButton;
