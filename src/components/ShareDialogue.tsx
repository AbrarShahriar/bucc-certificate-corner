import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "./ui/dialog";
import React, { PropsWithChildren } from "react";

interface ShareDialogueProps extends PropsWithChildren {
  trigger: React.JSX.Element;
  open?: boolean;
}

export default function ShareDialogue({
  trigger,
  children,
}: ShareDialogueProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-blue-950">
        <DialogHeader>
          <DialogTitle className="text-white text-center text-3xl">
            Choose how to share your certificate!
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
