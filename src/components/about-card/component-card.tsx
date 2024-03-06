import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const ComponentCard = ({
  className,
  text,
  src,
}: {
  className: string;
  text: string;
  src: string;
}) => {
  return (
    <Card className={cn("bg-gradient-to-br", className)}>
      <CardContent className="flex gap-6 md:gap-10 p-4 md:pr-12">
        <Image
          src={src}
          alt=""
          width={120}
          height={100}
          className="aspect-square object-cover h-auto w-auto rounded"
          quality={100}
        />
        <div className="flex-1 flex flex-col items-start justify-between">
          <h1 className="text-white font-bold text-lg lg:text-xl">{text}</h1>
          <Button variant={"secondary"}>Check Now &rarr;</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentCard;
