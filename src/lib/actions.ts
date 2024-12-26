"use server";

import { redirect } from "next/navigation";
import data from "../demo_data.json";

export type FormState =
  | {
      error?: string;
      message?: string;
    }
  | undefined;

export async function submitAction(
  state: FormState,
  formdata: FormData
): Promise<FormState> {
  const recipientId = formdata.get("recipient-id");

  if (!recipientId) {
    return {
      error: "Invalid ID!",
    };
  }

  const recipientData =
    data.filter((el) => el.recipientId == recipientId)[0] || {};

  if (recipientData) {
    redirect(`/certificate/${recipientId}`);
  } else {
    return {
      error: "No Recipient under this ID found!",
    };
  }
}
