"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";
import WaitlistEmail from "@/components/emails/WaitlistEmail";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function addToWaitlist(formData: FormData) {
  try {
    const validatedFields = schema.safeParse({
      email: formData.get("email"),
    });

    if (!validatedFields.success) {
      return {
        error:
          validatedFields.error.flatten().fieldErrors.email?.[0] ||
          "Invalid input",
      };
    }

    const { email } = validatedFields.data;

    const { data: existingEmails, error: selectError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email);

    if (selectError) {
      console.error("Error checking email:", selectError);
      return {
        error: "An error occurred while checking the email. Please try again.",
      };
    }

    if (existingEmails && existingEmails.length > 0) {
      return { error: "This email is already registered on the waitlist." };
    }

    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (insertError) {
      console.error("Error inserting email:", insertError);
      return {
        error:
          "This email is already registered on the waitlist. Please try another email.",
      };
    }

    try {
      await resend.emails.send({
        from: "Usourceful <waitlist@usourceful.info>",
        to: email,
        subject: "Welcome to our waitlist!",
        react: WaitlistEmail(),
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
    }

    return {
      success:
        "Successfully added to waitlist! Check your inbox or spam folder for confirmation.",
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
