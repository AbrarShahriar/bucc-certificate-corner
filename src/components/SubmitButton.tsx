"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-[30%] bg-blue-600 rounded-l-none rounded-r-lg font-semibold text-white flex items-center justify-center hover:bg-blue-500"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
