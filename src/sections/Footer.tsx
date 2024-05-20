import React from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

import logo from "../../public/images/car.png";

type Props = {};

function FooterSection({}: Props) {
  return (
    <div className="bg-black flex jutify-center items-center gap-4 flex-col pt-4 sm:pt-10 lg:pt-12">
      <Image src={logo} alt="Footer logo" width={300} />
      <Footer />
    </div>
  );
}

export default FooterSection;
