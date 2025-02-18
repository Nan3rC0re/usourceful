import React, { Fragment } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-center gap-8 ">
        <h2 className="font-medium   text-xl lg:text-3xl w-full max-w-xl">
          Take your academic and career development to the next level.
        </h2>
        <div className="flex gap-4 items-center ">
          {/* <Input
            className="w-[480px]"
            type="email"
            placeholder="School email"
          /> */}
          <Button className="text-sm">Join Waitlist</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default CTA;
