import Image from "next/image";
import React, { Fragment } from "react";
import Categories from "./Categories";

const Features = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-16 items-center w-full">
        <h2 className="font-medium text-center text-3xl w-full max-w-lg">
          Features designed for simplicity and built for efficiency.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className=" relative flex flex-col gap-2 bg-[#F6F6F6] h-[618px] w-full rounded-3xl border p-12 overflow-hidden">
            <p className="font-medium text-2xl">Categories</p>
            <p className="text-muted-foreground font-normal text-base max-w-md">
              Discover resources tailored to your needs—more categories coming
              soon.
            </p>
            <Categories />
          </div>
          <div className=" relative flex flex-col gap-2 bg-[#F6F6F6] h-[618px] w-full rounded-3xl border p-12 overflow-hidden">
            <p className="font-medium text-2xl">Resource requests</p>
            <p className="text-muted-foreground font-normal text-base max-w-md">
              Submit a request for any resource you think would benefit fellow
              students—even something you've created yourself.
            </p>
            <Image
              src="/Landing/request-form.png"
              alt="categoriesImg"
              width={3000}
              height={30000.73}
              className="absolute top-52"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
