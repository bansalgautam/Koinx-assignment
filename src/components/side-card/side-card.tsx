import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";

const SideCard = () => {
  return (
    <Card className="text-center bg-gradient-to-b from-[#2871EB] to-[#1A4BEF] text-background px-8 w-[95%] md:w-full mx-auto">
      <CardHeader className="text-xl font-bold">
        Get Started with KoinX for FREE
      </CardHeader>
      <CardDescription className="text-background">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports
      </CardDescription>
      <CardContent className="flex items-center flex-col">
        <Image
          src="/LowerSection.webp"
          alt="Placeholder Image"
          width={"200"}
          height="200"
          className="my-4 h-auto w-auto"
          priority={true}
        />
        <Button variant={"secondary"}>
          Get Started for FREE <FaLongArrowAltRight />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SideCard;
