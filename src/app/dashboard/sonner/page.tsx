"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="grid grid-cols-2">
      <Button
        variant="outline"
        onClick={() => {
          toast("Event has been created", {
            position: "top-right",
            duration: 4000,
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          }),
            console.log("click");
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.success("Event has been created", {
            className: "bg-green-500 text-white",
            position: "top-right",
            duration: 4000,
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          }),
            console.log("click");
        }}
      >
        Show Custom Color
      </Button>
    </div>
  );
}
