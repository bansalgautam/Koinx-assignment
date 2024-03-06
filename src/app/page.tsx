import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="h-screen mt-9 flex">
      <CardContent className="flex-1 flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold">Welcome to KoinX</h1>
      </CardContent>
    </Card>
  );
}
