import { ImNewspaper } from "react-icons/im";
import { Card, CardContent } from "../ui/card";

const EventCard = () => {
  return (
    <Card className="bg-[#E8F5FC] flex gap-8">
      <CardContent className="flex gap-2 md:gap-8 pt-8">
        <div>
          <div className="bg-[#0182FE] aspect-square w-[30px] md:w-[60px] flex items-center justify-center rounded-full">
            <ImNewspaper className="text-white text-lg md:text-3xl" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            magni excepturi quidem omnis.
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, sunt commodi ea cupiditate aliquam distinctio
            voluptatibus quasi, totam animi blanditiis delectus earum neque iste
            beatae architecto reprehenderit, nemo quas fuga suscipit sequi omnis
            obcaecati fugiat recusandae sapiente.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
