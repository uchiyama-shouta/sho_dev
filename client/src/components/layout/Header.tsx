import Link from "next/link";
import type { FC } from "react";
import { memo } from "react";

import { HiMenu } from "react-icons/hi";

import { pagesPath } from "lib/$path";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

const Header: FC<Props> = memo(({ setIsOpen }) => {
  const handleOpen = () => setIsOpen(true);
  return (
    <header className="flex items-center justify-between bg-gray-900 py-5">
      <div>
        <Link href={pagesPath.$url()} className="text-xl font-bold text-white">
          sho_dev
        </Link>
      </div>
      <div>
        <div className="hidden sm:block"></div>
        <div className="sm:hidden">
          <HiMenu size={28} color="white" onClick={handleOpen} />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
