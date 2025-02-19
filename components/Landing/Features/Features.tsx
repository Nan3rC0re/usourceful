import React, { Fragment } from "react";
import Categories from "./Categories";
import Request from "./Request";

const Features = () => {
  return (
    <Fragment>
      <div className="feature-section">
        <h2 className="feature-title">
          Features designed for simplicity and built for efficiency.
        </h2>
        <div className="feature-grid">
          <Categories />
          <Request />
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
