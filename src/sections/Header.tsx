import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

export default () => {
  const [state, setState] = useState(false);

  return (
    <header className="w-full flex justify-center items-center">
      <div className="fixed top-0 z-[1000] w-[90%] mt-4">
        <Navbar />
        {state ? (
          <div
            className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setState(false)}
          ></div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};
