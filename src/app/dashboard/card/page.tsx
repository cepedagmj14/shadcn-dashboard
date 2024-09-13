"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {"123456789".split("").map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"ghost"}>Button</Button>
            <Button variant={"default"}>mas info</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
