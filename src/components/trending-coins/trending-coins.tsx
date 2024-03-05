import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import PriceChange from "../price-change/price-change";

const getTrendingCoins = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const data = await response.json();
  return data.coins.slice(0, 3);
};

const TrendingCoins = async () => {
  const coins = await getTrendingCoins();
  return (
    <Card className="w-[95%] md:w-full mx-auto">
      <CardHeader className="text-xl font-semibold">
        Trending Coins (24h)
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {coins.map((coin: any, index: number) => (
          <Link
            href={`/cryptocurrencies/${coin.item.id}`}
            className="flex justify-between items-center"
            key={index}
          >
            <div className="font-medium flex  gap-2 items-center">
              <div className="w-[30px] h-[30px] relative">
                <Image
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  fill
                  sizes="30px"
                  className="mx-auto object-contain"
                />
              </div>
              <div>
                {coin.item.name.length > 20
                  ? coin.item.name.split("").slice(0, 15).join("").concat("...")
                  : coin.item.name}
                ({coin.item.symbol})
              </div>
            </div>
            <PriceChange
              change={coin.item.data["price_change_percentage_24h"]["inr"]}
            />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingCoins;
