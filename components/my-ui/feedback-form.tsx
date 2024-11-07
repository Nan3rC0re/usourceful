"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Textarea } from "@/components/ui/textarea"
import { useMediaQuery } from "@/hooks/use-media-query"
import { CheckCircle2, Loader2 } from "lucide-react"
import { createClient } from "@supabase/supabase-js"
import { useFormStatus } from "react-dom"
import { useFormState } from "react-dom"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function submitFeedback(prevState: unknown, formData: FormData) {
  const feedback = formData.get("feedback") as string
  try {
    const { data, error } = await supabase
      .from("feedback")
      .insert([{ feedback: feedback }])

    if (error) throw error

    console.log("Feedback submitted:", data)
    return {
      type: "success",
    }
  } catch (error) {
    console.error("Error submitting feedback:", error)
    return {
      type: "error",
      message: "Failed to submit feedback. Please try again.",
    }
  }
}

function FeedbackFormContent() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(submitFeedback, null)

  return (
    <AnimatePresence mode="wait">
      {state?.type === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center justify-center py-8 space-y-4"
        >
          <CheckCircle2 className="w-16 h-16 text-green-500" />
          <h3 className="text-xl font-semibold">Feedback Successfully Submitted</h3>
          <p className="text-center text-muted-foreground">Thank you for your feedback!</p>
        </motion.div>
      ) : (
        <>
          <motion.div
            key="header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-lg font-semibold mb-2">Send feedback</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Let me know how the site is helping you or any bugs you may find.
            </p>
          </motion.div>
          <motion.form
            key="form"
            action={formAction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-4 py-4">
              <Textarea
                id="feedbackText"
                name="feedback"
                className="bg-white/5 h-[200px]"
                required
                placeholder="Your feedback..."
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-white/5"
              variant="outline"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Feedback"
              )}
            </Button>
          </motion.form>
        </>
      )}
    </AnimatePresence>
  )
}

export default function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 639px)")

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open)
  }, [])

  const triggerButton = (
    <Button className="w-fit order-1 sm:order-2 p-0" variant="link" size="sm">
      Send feedback
    </Button>
  )

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>{triggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border border-input bg-background">
          <FeedbackFormContent />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="border border-input bg-background">
        <div className="px-4 py-4">
          <FeedbackFormContent />
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
  )
}