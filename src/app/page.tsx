import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome to Angler</CardTitle>
          <CardDescription>Your Next.js application is ready!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a sample card component from shadcn/ui. You can customize it as needed.</p>
        </CardContent>
      </Card>
    </div>
  );
}
