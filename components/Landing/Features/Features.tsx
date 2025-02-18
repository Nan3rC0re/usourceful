import Image from "next/image";
import React, { Fragment } from "react";
import Categories from "./Categories";
import Request from "./Request";

const Features = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-8 lg:gap-16 items-center w-full">
        <h2 className="font-medium text-center text-2xl lg:text-3xl w-full max-w-lg">
          Features designed for simplicity and built for efficiency.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 w-full max-lg:max-w-3xl">
          <Categories />
          <Request />
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
