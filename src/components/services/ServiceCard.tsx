import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Props = {
  href: string;
  imgSrc1: StaticImageData;
  altImg1: string;
  imgSrc2: StaticImageData;
  altImg2: string;
  name: string;
  description: string;
};

function ServiceCard(props: Props) {
  return (
    <Link href={props.href} className="group relative block">
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          src={props.imgSrc1}
          alt={props.altImg1}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 brightness-75"
        />

        <Image
          src={props.imgSrc2}
          alt={props.altImg2}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 brightness-75"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-xl font-medium text-white">{props.name}</h3>

        <p className="mt-1.5 text-pretty text-xs text-white line-clamp-2">
          {props.description}
        </p>

        <span className="mt-3 inline-block bg-red-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
          Read More
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;
