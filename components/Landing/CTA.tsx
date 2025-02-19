import React, { Fragment } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CTA = () => {
  return (
    <Fragment>
      <div className="cta-bg ">
        <h2 className="cta ">
          Take your academic and career development to the next level.
        </h2>
        <Button >Join Waitlist</Button>
      </div>
    </Fragment>
  );
};

export default CTA;
