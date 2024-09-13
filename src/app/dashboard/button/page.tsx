"use client";
import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Button</Button>
      <Button variant={"destructive"} size={"lg"}>
        Button
      </Button>
      <Button variant={"ghost"}>Button</Button>
      <Button variant={"link"}>Button</Button>
      <Button variant={"outline"}>Button</Button>
      <Button variant={"secondary"}>Button</Button>
      <Button variant={"success"} disabled>
        Button
      </Button>
      <Button onClick={() => console.log("click")}>Click me</Button>

      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
