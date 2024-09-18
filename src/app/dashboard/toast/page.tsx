"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const { toast } = useToast();
  return (
    <div className="grid grid-cols-4 gap-3">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Add to calendar
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Add to calendar
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            variant: "destructive",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            variant: "success",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </div>
  );
}
