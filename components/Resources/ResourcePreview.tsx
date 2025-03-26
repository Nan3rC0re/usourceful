import React from "react";
import { Button } from "../ui/button";

export default function ResourcePreview() {
  return (
    <main className=" flex flex-col mt-20 py-4 w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Organization</h1>
          <Button variant="link">View More</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border w-full rounded-lg h-[200px]"></div>
          <div className="border w-full rounded-lg h-[200px]"></div>
          <div className="border w-full rounded-lg h-[200px]"></div>
          <div className="border w-full rounded-lg h-[200px]"></div>
        </div>
      </div>
    </main>
  );
}
