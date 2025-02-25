"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
          "This email is already registered on the waitlist. Please try again.",
      };
    }

    return { success: "Successfully added to waitlist!" };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
