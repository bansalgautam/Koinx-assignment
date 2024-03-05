import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    <Card>
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
                  className="mx-auto object-contain"
                />
              </div>
              <div>
                {coin.item.name}({coin.item.symbol})
              </div>
            </div>
            <div
              className={cn(
                "flex  p-1 px-2 items-center gap-1 text-sm h-max",
                coin.item.data["price_change_percentage_24h"]["inr"] < 0
                  ? "text-[#f00] bg-[#FEEFEE]"
                  : "text-[#14B079] bg-[#EAF9F5]"
              )}
            >
              {coin.item.data["price_change_percentage_24h"]["inr"] < 0 ? (
                <IoCaretDownSharp color="#f00" />
              ) : (
                <IoCaretUpSharp color={"#14B079"} />
              )}
              <span>
                {coin.item.data["price_change_percentage_24h"]["inr"] < 0
                  ? -coin.item.data["price_change_percentage_24h"][
                      "inr"
                    ].toFixed(2)
                  : coin.item.data["price_change_percentage_24h"][
                      "inr"
                    ].toFixed(2)}
              </span>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingCoins;
