import React, { Fragment } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import WaitlistEmail from "../emails/WaitlistEmail";

const CTA = () => {
  return (
    <Fragment>
      <div className="cta-bg ">
        <h2 className="cta ">
          Take your academic and career development to the next level.
        </h2>
        <Link href="/waitlist" passHref>
          <Button>Join Waitlist</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default CTA;
