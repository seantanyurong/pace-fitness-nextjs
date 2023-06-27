import React from "react";

const Feature = (props) => {
  return (
    <div className="text-center">
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="group cursor-pointer"
      >
        {/* <AdvancedImage
          className="mx-auto drop-shadow-xl rounded-lg group-hover:-translate-y-1 duration-150 border-highlight-darkEggshell border-3 group-hover:border-solid  group-hover:border-highlight-blue"
          cldImg={myImage}
          plugins={[responsive({ steps: 200 })]}
          alt={props.primaryText}
        /> */}
        <p
          className={`text-xl inline-block cursor-pointer font-semibold  hover:text-link-main underline mt-6 group-hover:text-link-main`}
        >
          {props.primaryText}
        </p>
        <p>{props.subtitleText}</p>
      </a>
      <p className="mt-2">{props.bodyText}</p>
    </div>
  );
};

export default Feature;
