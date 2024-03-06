import { DOMAttributes } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "@radix-ui/react-separator";
import ComponentCard from "./component-card";

const AboutCard = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <Card>
      <CardHeader className="text-xl font-semibold">About {name}</CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">What is {name}</h3>
          <p
            className="text-justify text-muted-foreground text-sm"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        </div>
        <Separator className="my-4 w-full h-[1.5px] bg-[#c7c7c7]" />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Lorem ipsum dolor sit amet</h3>
          {[0, 1, 2].map((item) => (
            <p
              className="text-justify text-muted-foreground text-sm"
              key={item}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              ipsa mollitia, laudantium reprehenderit magni libero reiciendis
              itaque ad quasi, pariatur magnam dolorum corporis nemo nulla
              deserunt labore harum provident quia voluptates. Odit! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Similique
              delectus excepturi ipsa veniam rerum, id eius ab asperiores
              mollitia debitis neque eveniet nemo perspiciatis? Placeat, alias
              excepturi minus asperiores aliquam, quasi iure earum autem eius
              deleniti architecto libero ipsa. Laborum ullam cumque totam
              molestiae doloribus sit nostrum modi. Id, iure.
            </p>
          ))}
        </div>
        <Separator className="my-4 w-full h-[1.5px] bg-[#c7c7c7]" />
        <h1 className="text-xl font-semibold mb-4">Already Holding {name}?</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <ComponentCard
            className="flex-1 from-[#78EEA5] to-[#105FAD]"
            text="Calculate your Profits"
            src="/investing.avif"
          />
          <ComponentCard
            className="flex-1 from-[#ff9665] to-[#f13b37]"
            text="Calculate your tax liability"
            src="/images.jpeg"
          />
        </div>
        <Separator className="my-4 w-full h-[1.5px] bg-[#c7c7c7]" />
        <p className="text-justify text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloribus, quae, voluptate, quos quidem ipsam voluptatum autem
          molestias quas doloremque quia. Quam, quos. Quisquam, quos. Quisquam,
          quos.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
