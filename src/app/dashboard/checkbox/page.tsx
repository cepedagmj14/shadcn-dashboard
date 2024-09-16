"use client";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
// import Autoplay from "embla-carousel-autoplay";
export default function Page() {
  const [terms, setTerms] = useState(false);

  console.log(terms);
  return (
    <div className="flex items-center space-x-2">
      {" "}
      <Checkbox
        id="terms"
        checked={terms}
        onCheckedChange={(value: boolean) => setTerms(value)}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      {terms ? (
        <Badge>Greet!</Badge>
      ) : (
        <Badge variant={"destructive"}>Warning</Badge>
      )}
    </div>
  );
}
