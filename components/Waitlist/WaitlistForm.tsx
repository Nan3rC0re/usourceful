"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addToWaitlist } from "@/app/actions/waitlist";

type WaitlistFormState = {
  error?: string;
  success?: string;
};

export default function WaitlistForm() {
  const [state, setState] = useState<WaitlistFormState>({
    error: "",
    success: "",
  });
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        setState((prev) => ({ ...prev, success: "" }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsPending(true);
    setState({ error: "", success: "" });

    const formData = new FormData(form);
    const result = await addToWaitlist(formData);

    setIsPending(false);

    if ("error" in result) {
      setState({ error: result.error, success: "" });
    } else {
      setState({ error: "", success: result.success });

      form.reset();
    }
  };
  return (
    <motion.div
      initial={{ y: -4, opacity: 0, filter: "blur(6px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6,
      }}
      className="flex flex-col gap-2 w-full max-w-xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
        <Input
          name="email"
          placeholder="School email"
          type="email"
          className="w-full text-base"
          required
        />
        <Button
          type="submit"
          className="max-md:w-full text-base"
          disabled={isPending}
        >
          {isPending ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>

      {state.error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-2"
        >
          {state.error}
        </motion.p>
      )}

      {state.success && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-sm mt-2"
        >
          {state.success}
        </motion.p>
      )}
    </motion.div>
  );
}
