import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon, Terminal } from "lucide-react";

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-5 w-5" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant={"destructive"}>
        <RocketIcon className="h-5 w-5" />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant={"success"}>
        <RocketIcon className="h-5 w-5" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
