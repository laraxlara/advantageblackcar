import React from "react";
import Link from "next/link";
import Image from "next/image";

import chev from "../../../public/images/fleet/chevy.jpg";

type Props = {};

function ServiceAdCard({}: Props) {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg md:w-2/5 h-full mt-12">
      <Image alt="" src={chev} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <Link href="/fleet" passHref>
          <h3 className="mt-0.5 text-lg text-gray-900">Check out our fleet</h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          With our commitment to excellence and attention to detail, each
          vehicle in our fleet promises a memorable and luxurious experience,
          making every journey with us truly exceptional.
        </p>
      </div>
    </article>
  );
}

export default ServiceAdCard;
