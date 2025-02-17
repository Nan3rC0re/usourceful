import Image from "next/image";
import React, { Fragment } from "react";

const DemoImg = () => {
  return (
    <Fragment>
      <div className="max-w-[1336px] w-full h-[744px] bg-[#F6F6F6] rounded-tl-3xl rounded-tr-3xl relative overflow-hidden ">
        <Image
          src="/Landing/demo.png"
          alt="demoImg"
          width={1208}
          height={902}
          className="absolute left-1/2 top-16 transform -translate-x-1/2 rounded-3xl"
        />
      </div>
    </Fragment>
  );
};

export default DemoImg;
