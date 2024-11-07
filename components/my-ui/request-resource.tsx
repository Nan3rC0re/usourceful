"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import { useMediaQuery } from "@/hooks/use-media-query";

function RequestFormContent({
  onSubmit,
}: {
  onSubmit: (url: string, description: string) => void;
}) {
  const [resourceUrl, setResourceUrl] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(resourceUrl, resourceDescription);
    setResourceUrl("");
    setResourceDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-4 items-start"></div>
        {/* Change the focus color for textarea to a neutral rathar than white */}
        <div className="flex flex-col gap-4 items-start">
          <Textarea
            id="resourceDescription"
            value={resourceDescription}
            onChange={(e) => setResourceDescription(e.target.value)}
            className="bg-white/5 h-[200px]"
            required
            placeholder="Can there be a resource that ..."
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full h-12 bg-white/5"
        variant="outline"
      >
        Submit Request
      </Button>
    </form>
  );
}

export function RequestForm() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSubmit = useCallback((url: string, description: string) => {
    console.log({ resourceUrl: url, resourceDescription: description });
    setIsOpen(false);
  }, []);

  const triggerButton = (
    <Button className="w-fit " variant="ghost" size="sm">
      Request a resource
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{triggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border border-input bg-background">
          <DialogHeader>
            <DialogTitle>Request a resource</DialogTitle>
            <DialogDescription>
              Don't see anything that is useful at the moment? Send a request.
            </DialogDescription>
          </DialogHeader>
          <RequestFormContent onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="border border-input bg-background">
        <DrawerHeader className="text-left">
          <DrawerTitle>Request a resource</DrawerTitle>
          <DrawerDescription>
            Don't see anything that is useful at the moment? Send a request.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <RequestFormContent onSubmit={handleSubmit} />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              onClick={() => setIsOpen(false)}
              className="w-full h-12"
              variant="outline"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
