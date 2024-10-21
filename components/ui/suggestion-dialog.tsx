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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMediaQuery } from "@/hooks/use-media-query";

function SuggestionFormContent({
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
        <div className="flex flex-col gap-4 items-start">
          <Input
            id="resourceUrl"
            value={resourceUrl}
            onChange={(e) => setResourceUrl(e.target.value)}
            className="bg-white/5 h-12"
            type="url"
            required
            placeholder="Link"
          />
        </div>
        <div className="flex flex-col gap-4 items-start">
          <Textarea
            id="resourceDescription"
            value={resourceDescription}
            onChange={(e) => setResourceDescription(e.target.value)}
            className="bg-white/5 h-[100px]"
            required
            placeholder="Description"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full h-12 bg-white/5"
        variant="outline"
      >
        Submit Suggestion
      </Button>
    </form>
  );
}

export function SuggestionForm() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSubmit = useCallback((url: string, description: string) => {
    console.log({ resourceUrl: url, resourceDescription: description });
    setIsOpen(false);
  }, []);

  const triggerButton = (
    <Button className="w-fit order-1 sm:order-2" variant="ghost" size="sm">
      Suggest a resource
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{triggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border border-input bg-background">
          <DialogHeader>
            <DialogTitle>Suggest a Resource</DialogTitle>
            <DialogDescription>
              Have a great resource to share? Let me know so I can add it to the
              site!
            </DialogDescription>
          </DialogHeader>
          <SuggestionFormContent onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="border border-input bg-background">
        <DrawerHeader className="text-left">
          <DrawerTitle>Suggest a Resource</DrawerTitle>
          <DrawerDescription>
            Have a great resource to share? Let me know so I can add it to the
            site!
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <SuggestionFormContent onSubmit={handleSubmit} />
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
