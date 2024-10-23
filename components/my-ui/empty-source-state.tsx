import React from "react";
import { Code } from "lucide-react";
import { SuggestionForm } from "@/components/my-ui/suggestion-form";
export default function EmptyResourceState() {
  return (
    <div className="border border-neutral-600 bg-neutral-900/70 hover:bg-neutral-900 rounded-xl h-full flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center p-4">
        <div className="border p-2 rounded-lg border-neutral-600 bg-neutral-950">
          <Code size={16} />
        </div>
        <h1 className="text-sm font-semibold">No resource posted</h1>
        <p className="text-xs text-muted-foreground">
          Start by suggesting or requesting a recourse while this page is being
          built.
        </p>
      </div>
    </div>
  );
}
