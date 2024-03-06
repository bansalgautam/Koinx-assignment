import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

const TeamCard = () => {
  return (
    <Card>
      <CardHeader className="text-xl font-semibold">Team</CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-justify leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          libero, sunt assumenda ullam nisi blanditiis aliquam ratione deserunt,
          at error tenetur officiis totam suscipit fugiat quasi voluptas
          provident velit unde.
        </p>
        {[0, 1, 2].map((item) => (
          <Card key={item}>
            <CardContent className="p-4 bg-[#E8F5FC] flex flex-col md:flex-row gap-4 items-center">
              <div className="flex flex-col">
                <div className="w-[150px] h-[150px] relative">
                  <Image
                    src={"/john.jpeg"}
                    alt=""
                    fill
                    className="rounded mb-1 object-cover"
                  />
                </div>
                <h1 className="text-center text-lg font-semibold">
                  John Smith
                </h1>
                <p className="text-muted-foreground text-center text-sm">
                  Designation here
                </p>
              </div>
              <div className="flex-1 text-justify text-xs sm:text-sm md:text-md flex items-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ex
                assumenda, alias rem eligendi quaerat iste voluptatum quibusdam,
                eos maxime ullam sapiente iure, commodi minus ipsam eum facilis
                voluptates blanditiis fugit amet. Eveniet dolorem, repellendus
                eum odit cum assumenda eos explicabo aliquid optio, voluptatibus
                recusandae facere voluptates blanditiis delectus doloribus
                tenetur modi autem id enim corrupti ea. Fuga, iste explicabo.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                dignissimos placeat necessitatibus culpa aliquid at voluptatem,
                adipisci temporibus ad incidunt.
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamCard;
