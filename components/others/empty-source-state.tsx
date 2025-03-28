import React from "react";
import { Code } from "lucide-react";
export default function EmptyResourceState() {
  return (
    <div className="col-span-full border hover:bg-neutral-1 w-ful h-full  rounded-xl flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center p-4">
        <div className="border p-2 rounded-lg bg-white hover:bg-neautral-200">
          <Code size={16} />
        </div>
        <h1 className="text-sm font-semibold">No resource posted</h1>
        <p className="text-xs text-muted-foreground">
          This page is being built and will have content soon.
        </p>
      </div>
    </div>
  );
}
