import React, { Fragment } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <Fragment>
      <div className="cta-bg ">
        <h2 className="cta ">
          Take your academic and career development to the next level.
        </h2>
        <Link href="/sign-up" passHref>
          <Button>Get Started </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default CTA;
