import React, { Fragment } from "react";
import { Button } from "../ui/button";


const CTA = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row w-full  justify-center  items-start lg:items-center gap-4  p-12 lg:p-24 bg-[#f8f8f8] rounded-3xl overflow-hidden ">
        <h2 className="font-medium  text-xl lg:text-3xl w-full  max-w-lg ">
          Take your academic and career development to the next level.
        </h2>
        <Button className="text-sm">Join Waitlist</Button>
      </div>
    </Fragment>
  );
};

export default CTA;
