import Link from "next/link";

import { useSetAtom } from "jotai";
import { HiMenu } from "react-icons/hi";

import { pagesPath } from "lib/$path";
import { drawerAtom } from "state/drawer";

const Header = () => {
  const setOpen = useSetAtom(drawerAtom);
  const handleOpen = () => setOpen(true);
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
};

export default Header;
