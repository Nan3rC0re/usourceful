"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/shadcn-ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn-ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadcn-ui/drawer";
import { Textarea } from "@/components/shadcn-ui/textarea";
import { useMediaQuery } from "@/hooks/use-media-query";

function FeedbackFormContent({
  onSubmit,
}: {
  onSubmit: (feedback: string) => void;
}) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(feedback);
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-4 items-start">
          <Textarea
            id="feedbackText"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="bg-white/5 h-[200px]"
            required
            placeholder="Your feedback..."
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full h-12 bg-white/5"
        variant="outline"
      >
        Submit Feedback
      </Button>
    </form>
  );
}

export function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 639px)");

  const handleSubmit = useCallback((feedback: string) => {
    console.log({ feedback });
    setIsOpen(false);
  }, []);

  const triggerButton = (
    <Button className="w-fit order-1 sm:order-2" variant="link" size="sm">
      Send feedback
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{triggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border border-input bg-background">
          <DialogHeader>
            <DialogTitle>Send feedback </DialogTitle>
            <DialogDescription>
              Let me know how the site is helping you or any bugs you may find.
            </DialogDescription>
          </DialogHeader>
          <FeedbackFormContent onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="border border-input bg-background">
        <DrawerHeader className="text-left">
          <DrawerTitle>Send feedback</DrawerTitle>
          <DrawerDescription>
            Let me know how the site is helping you or any bugs you may find.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <FeedbackFormContent onSubmit={handleSubmit} />
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
