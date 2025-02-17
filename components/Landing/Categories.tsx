import React, { Fragment } from "react";

const Categories = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-8  relative w-full text-4xl mt-24 whitespace-nowrap">
        <div className="flex gap-3 absolute left-12 ">
          <p className=" text-purple-500 bg-purple-100 rounded-full px-9 py-6">
            Organizations
          </p>
          <p className=" text-blue-500 bg-blue-100 rounded-full px-9 py-6">
            Interview Prep
          </p>
          <p className=" text-green-500 bg-green-100 rounded-full px-9 py-6">
            Early Career Internships
          </p>
        </div>
        <div className="flex gap-3 absolute top-28 -left-64 ">
          <p className=" text-pink-500 bg-pink-100 rounded-full px-9 py-6">
            Language and Frameworks
          </p>
          <p className=" text-orange-500 bg-orange-100 rounded-full px-9 py-6">
            Certificates and Courses
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
