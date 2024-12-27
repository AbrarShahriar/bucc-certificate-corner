"use server";

import { redirect } from "next/navigation";
import dbConnect from "./dbConnect";
import Recipient from "@/models/recipients";

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

  await dbConnect();

  const recipientData = await Recipient.findOne({ recipientId }).exec();

  if (recipientData) {
    redirect(`/certificate/${recipientId}`);
  } else {
    return {
      error: "No Recipient under this ID found!",
    };
  }
}
