import { DOMAttributes } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "@radix-ui/react-separator";

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
          <p className="text-justify text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ipsa mollitia, laudantium reprehenderit magni libero reiciendis
            itaque ad quasi, pariatur magnam dolorum corporis nemo nulla
            deserunt labore harum provident quia voluptates. Odit! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Similique delectus
            excepturi ipsa veniam rerum, id eius ab asperiores mollitia debitis
            neque eveniet nemo perspiciatis? Placeat, alias excepturi minus
            asperiores aliquam, quasi iure earum autem eius deleniti architecto
            libero ipsa. Laborum ullam cumque totam molestiae doloribus sit
            nostrum modi. Id, iure.
          </p>
          <p className="text-justify text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ipsa mollitia, laudantium reprehenderit magni libero reiciendis
            itaque ad quasi, pariatur magnam dolorum corporis nemo nulla
            deserunt labore harum provident quia voluptates. Odit! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Similique delectus
            excepturi ipsa veniam rerum, id eius ab asperiores mollitia debitis
            neque eveniet nemo perspiciatis? Placeat, alias excepturi minus
            asperiores aliquam, quasi iure earum autem eius deleniti architecto
            libero ipsa. Laborum ullam cumque totam molestiae doloribus sit
            nostrum modi. Id, iure.
          </p>
          <p className="text-justify text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ipsa mollitia, laudantium reprehenderit magni libero reiciendis
            itaque ad quasi, pariatur magnam dolorum corporis nemo nulla
            deserunt labore harum provident quia voluptates. Odit! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Similique delectus
            excepturi ipsa veniam rerum, id eius ab asperiores mollitia debitis
            neque eveniet nemo perspiciatis? Placeat, alias excepturi minus
            asperiores aliquam, quasi iure earum autem eius deleniti architecto
            libero ipsa. Laborum ullam cumque totam molestiae doloribus sit
            nostrum modi. Id, iure.
          </p>
        </div>
        <Separator className="my-4 w-full h-[1.5px] bg-[#c7c7c7]" />
        <h1 className="text-xl font-semibold">Already Holding {name}?</h1>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
