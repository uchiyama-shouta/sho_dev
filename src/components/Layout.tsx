import type { FC, ReactNode } from "react";

import Drawer from "components/Drawer";
import Footer from "components/Footer";
import Header from "components/Header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <Header />
        <main>{children}</main>
        <Drawer />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
