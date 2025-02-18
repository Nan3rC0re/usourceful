import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className=" group relative flex flex-col gap-2 bg-[#f8f8f8] aspect-[1.1] md:aspect-[1.2] lg:aspect-[1.08] rounded-3xl border p-12 overflow-hidden">
      <p className="font-medium text-md lg:text-2xl">Categories</p>
      <p className="text-muted-foreground font-normal text-sm lg:text-base max-w-md">
        Discover resources tailored to your needs—more categories coming soon.
      </p>

      <div className=" group-hover:scale-[140%] transition-all duration-200 absolute inset-0  translate-y-[55%] sm:translate-y-[40%] lg:translate-y-[50%]  ">
        <Image
          src="/Landing/categories.png"
          alt="categoriesImg"
          width={2000}
          height={200}
          className=" object-contain scale-[180%] aspect-[3.0]  select-none"
        />
      </div>
    </div>
  );
};

export default Categories;
