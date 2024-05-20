import React, { ReactNode } from "react";
import Header from "@/sections/Header";

import FooterSection from "@/sections/Footer";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <div>
        <Header />
        {props.children}
        <FooterSection />
      </div>
    </>
  );
};

export default Layout;
