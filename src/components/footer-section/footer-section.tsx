import { getTrendingCoins } from "../trending-coins/trending-coins";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CoinCard from "./coin-card";

const FooterSection = async () => {
  const res = await getTrendingCoins();
  const coins = await res.slice(0, 10);
  return (
    <div className="w-screen bg-background py-16 flex flex-col gap-16">
      <div className="w-[95%] max-w-[1368px] mx-auto px-2">
        <h1 className="text-xl font-semibold">You May Also Like</h1>
        <Carousel opts={{ align: "start" }} className="h-max">
          <CarouselContent>
            {coins.map((item: any) => (
              <CarouselItem
                key={item.item.id}
                className="sm:basis-1/2 lg:basis-1/4 pl-4"
              >
                <CoinCard
                  src={item.item.thumb}
                  symbol={item.item.symbol}
                  change={item.item.data.price_change_percentage_24h.usd}
                  price={item.item.data.price}
                  sparkline={item.item.data.sparkline}
                  id={item.item.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </div>
      <div className="w-[95%] max-w-[1368px] mx-auto px-2">
        <h1 className="text-xl font-semibold">Trending Coins</h1>
        <Carousel opts={{ align: "start" }} className="h-max">
          <CarouselContent>
            {coins.map((item: any) => (
              <CarouselItem
                key={item.item.id}
                className="sm:basis-1/2 lg:basis-1/4 pl-4"
              >
                <CoinCard
                  src={item.item.thumb}
                  symbol={item.item.symbol}
                  change={item.item.data.price_change_percentage_24h.usd}
                  price={item.item.data.price}
                  sparkline={item.item.data.sparkline}
                  id={item.item.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default FooterSection;
