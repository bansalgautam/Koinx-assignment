import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import PriceChange from "../price-change/price-change";
import { Separator } from "@radix-ui/react-separator";
import TradingViewWidget from "../trading-chart";
import { formatNumberWithCommas } from "@/lib/utils";

interface PriceChartProps {
  image: string;
  name: string;
  symbol: string;
  rank: number;
  usd_price: number;
  inr_price: number;
  change: number;
}

const PriceChart = ({
  change,
  image,
  inr_price,
  name,
  rank,
  symbol,
  usd_price,
}: PriceChartProps) => {
  return (
    <>
      <div className="flex md:hidden flex-row gap-2 items-center">
        <Image src={image} alt={name} width={40} height={40} />
        <h1 className="font-semibold text-xl">{name}</h1>
        <h2 className="uppercase text-muted-foreground">{symbol}</h2>
        <div className="bg-muted-foreground p-2 rounded text-background text-sm ml-4">
          Rank #{rank}
        </div>
      </div>
      <Card>
        <CardHeader>
          <div className="hidden md:flex flex-row gap-2 items-center">
            <Image src={image} alt={name} width={40} height={40} />
            <h1 className="font-semibold text-xl">{name}</h1>
            <h2 className="uppercase text-muted-foreground">{symbol}</h2>
            <div className="bg-muted-foreground p-2 rounded text-background text-sm ml-4">
              Rank #{rank}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-8 items-start">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-semibold">
                ${formatNumberWithCommas(usd_price, "USD")}
              </div>
              <div className="text-sm">&#8377;{formatNumberWithCommas(inr_price, "INR")}</div>
            </div>
            <div className="flex gap-4 items-center">
              <PriceChange change={change} />
              <div className="text-muted-foreground text-sm">(24H)</div>
            </div>
          </div>
          <Separator className="my-4 w-full h-[1.5px] bg-[#c7c7c7]" />
          <TradingViewWidget token={symbol} />
        </CardContent>
      </Card>
    </>
  );
};

export default PriceChart;
