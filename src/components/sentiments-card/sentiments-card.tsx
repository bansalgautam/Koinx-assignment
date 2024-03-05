import { IoIosInformationCircle } from "react-icons/io";
import { Card, CardContent, CardHeader } from "../ui/card";
import EventCard from "../event-card/event-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const SentimentsCard = () => {
  return (
    <Card className="w-[95%] md:w-full mx-auto">
      <CardHeader className="text-xl font-semibold">Sentiment</CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center text-muted-foreground text-lg">
          <h1 className="font-semibold">Key Events</h1>
          <IoIosInformationCircle />
        </div>
        <Carousel opts={{ align: "start" }} className="py-8">
          <CarouselContent>
            <CarouselItem className="basis-[90%] md:basis-[70%]">
              <EventCard />
            </CarouselItem>
            <CarouselItem className="basis-[90%] md:basis-[70%]">
              <EventCard />
            </CarouselItem>
            <CarouselItem className="basis-[90%] md:basis-[70%]">
              <EventCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>

        <div className="flex gap-2 items-center text-muted-foreground text-lg">
          <h1 className="font-semibold">Analyst Estimates</h1>
          <IoIosInformationCircle />
        </div>
        <div className="pt-8 flex items-center gap-8 md:gap-16">
          <div className="w-[100px] aspect-square rounded-full text-[#14B079] bg-[#EAF9F5] flex items-center justify-center">
            76%
          </div>
          <div className="text-muted-foreground flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-4">
              <div>Buy</div>
              <div className="w-full flex gap-4 items-center">
                <div className="w-[76%] h-[5px] bg-[#14B079] rounded-full" />
                <div>76%</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>Hold</div>
              <div className="w-full flex gap-4 items-center">
                <div className="w-[8%] h-[5px] bg-[#c7c7c7] rounded-full" />
                <div>8%</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>Sell</div>
              <div className="w-full flex gap-4 items-center">
                <div className="w-[16%] h-[5px] bg-[#f00] rounded-full" />
                <div>16%</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentsCard;
