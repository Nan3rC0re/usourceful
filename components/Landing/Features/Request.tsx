import Image from "next/image";
import React from "react";

export default function Request() {
  return (
    <div className=" group relative flex flex-col gap-2 bg-[#f8f8f8] aspect-[1.1] md:aspect-[1.2] lg:aspect-[1.08] rounded-3xl border p-12 overflow-hidden">
      <p className="font-medium  text-md lg:text-2xl">Resource requests</p>
      <p className="text-muted-foreground font-normal  text-sm lg:text-base max-w-md">
        Submit a request for any resource you think would benefit fellow
        students—even something you've created yourself.
      </p>
      <div className="absolute size-full overflow-hidden ">
        <div className="absolute inset-0 lg:ps-12 lg:pt-32 ps-2 pt-36 ">
          <Image
            src="/Landing/request-form.png"
            alt="categoriesImg"
            width={2000}
            height={200}
            className=" group-hover:rotate-[-5deg] transition-all duration-200 size-full select-none max-lg:rounded-tl-xl lg:rounded-tl-3xl object-cover object-left-top "
          />
        </div>
      </div>
    </div>
  );
}
