"use client";

import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge variant={"default"}>badge</Badge>
      <Badge variant={"destructive"}>badge</Badge>
      <Badge variant={"outline"}>badge</Badge>
      <Badge variant={"secondary"}>badge</Badge>
      <Badge capitalize variant={"success"}>
        success badge
      </Badge>
      <Badge capitalize variant={"info"}>
        info badge
      </Badge>
    </div>
  );
}
