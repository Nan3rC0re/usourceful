import Image from "next/image";
import React from "react";

export default function Request() {
  return (
    <div className="feature-card group">
      <p className="feature-card-title">Resource requests</p>
      <p className="feature-card-description">
        Submit a request for any resource you think would benefit fellow
        students—even something you've created yourself.
      </p>
      <div className="absolute size-full overflow-hidden ">
        <div className="feature-request-container ">
          <Image
            src="/Landing/request-form.png"
            alt="categoriesImg"
            width={2000}
            height={200}
            className=" feature-request-img "
          />
        </div>
      </div>
    </div>
  );
}
