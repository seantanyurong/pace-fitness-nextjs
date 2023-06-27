import React from "react";
import BlueLink from "./BlueLink";
import Link from "next/link";
import Image from "next/image";

const Feature = (props) => {
  return (
    <div className="text-center">
      <Link className="group cursor-pointer" href={props.link}>
        <Image
          className="mx-auto drop-shadow-xl rounded-lg group-hover:-translate-y-1 duration-150 border-highlight-darkEggshell border-3 group-hover:border-solid  group-hover:border-highlight-blue"
          src={props.image}
          href={props.link}
          alt={props.primaryText}
          style={{ objectFit: "cover" }}
        />
        <h3
          className={`inline-block cursor-pointer font-extrabold text-link-main hover:text-link-hover underline text-xl mt-6 group-hover:text-link-hover`}
        >
          {props.primaryText}
        </h3>
      </Link>
      <p className="mt-2">{props.bodyText}</p>
    </div>
  );
};

export default Feature;
