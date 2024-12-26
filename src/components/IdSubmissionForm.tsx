"use client";

import { submitAction } from "@/lib/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

export default function IdSubmissionForm() {
  const [state, action] = useFormState(submitAction, undefined);

  if (state?.error) {
    alert(state.error);
  }

  return (
    <form className="flex flex-row" action={action}>
      <input
        name="recipient-id"
        placeholder="Write your ID"
        type="text"
        className="focus-within:outline-none px-4 py-2 w-[70%] rounded-l-lg"
      />
      <SubmitButton />
    </form>
  );
}
