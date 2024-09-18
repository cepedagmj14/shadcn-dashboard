"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "123456789".split("");
};

export default async function Page() {
  const data = await getData();
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((data) => (
        <Card key={data}>
          <CardHeader className="flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt="shadcn"
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
            <div>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Title</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button>Mas</Button>
          </CardFooter>
        </Card>
      ))}
      {/* <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div> */}
    </div>
  );
}
