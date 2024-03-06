"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import PriceChange from "../price-change/price-change";
import { useRouter } from "next/navigation";

const CoinCard = ({
  src,
  symbol,
  change,
  price,
  sparkline,
  id,
}: {
  src: string;
  symbol: string;
  change: number;
  price: string;
  sparkline: string;
  id: string;
}) => {
  const router = useRouter();
  return (
    <Card
      className="w-full flex flex-col hover:bg-muted cursor-pointer"
      onClick={() => router.replace(`/cryptocurrencies/${id}`)}
    >
      <CardContent className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-[40px] h-[40px] relative">
            <Image src={src} alt={symbol} fill />
          </div>
          <div>{symbol}</div>
          <PriceChange change={change} />
        </div>

        <div
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: price }}
        ></div>
        <div className="relative h-[100px] w-[80%] mx-auto">
          <Image src={sparkline} alt="" fill />
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
