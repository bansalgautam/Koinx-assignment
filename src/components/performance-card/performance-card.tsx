"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import PriceRange from "../price-range/price-range";
import { cn, formatNumberWithCommas } from "@/lib/utils";
import { IoIosInformationCircle } from "react-icons/io";
import AllTime from "../all-time";

const PerformanceCard = ({
  price,
  low,
  high,
  name,
  volume,
  cap,
  rank,
  ath,
  atl,
  athd,
  atld,
}: {
  price: number;
  low: number;
  high: number;
  name: string;
  volume: number;
  cap: number;
  rank: number;
  ath: number;
  atl: number;
  athd: Date;
  atld: Date;
}) => {
  const [selected, setSelected] = useState(0);

  const items = [
    "overview",
    "fundamentals",
    "News Insights",
    "Sentiments",
    "team",
    "technicals",
    "tokenomics",
  ];

  const fundamentals = [
    {
      name: `${name} Price`,
      value: `$${formatNumberWithCommas(price, "USD")}`,
    },
    {
      name: "24h Low / 24h High",
      value: `$${formatNumberWithCommas(
        low,
        "USD"
      )} / $${formatNumberWithCommas(high, "USD")}`,
    },
    {
      name: "7d Low / 7d High",
      value: `$${formatNumberWithCommas(
        low,
        "USD"
      )} / $${formatNumberWithCommas(high, "USD")}`,
    },
    {
      name: "Trading Volume",
      value: `$${formatNumberWithCommas(volume, "USD")}`,
    },
    {
      name: "Market Cap Rank",
      value: `#${rank}`,
    },
    {
      name: "Market Cap",
      value: `$${formatNumberWithCommas(cap, "USD")}`,
    },
    {
      name: "Market Cap Dominance",
      value: "38.343%",
    },
    {
      name: "Volume / Market Cap",
      value: "0.0718",
    },
    {
      name: "All Time High",
      value: ath,
      type: "AT",
      date: athd,
    },
    {
      name: "All Time Low",
      value: atl,
      type: "AT",
      date: atld,
    },
  ];
  return (
    <>
      <div className="w-[95%] md:w-full mx-auto overflow-hidden">
        <div className="max-w-full overflow-scroll no-scrollbar py-2 border-b border-[#c7c7c7] flex gap-4 text-nowrap">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "capitalize font-medium cursor-pointer",
                selected === index
                  ? "font-bold text-[#0141CF] underline underline-offset-[12px] decoration-[3px]"
                  : ""
              )}
              onClick={() => setSelected(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <Card className="w-[95%] md:w-full mx-auto">
        <CardHeader className="text-xl font-semibold">Performance</CardHeader>
        <CardContent>
          <div className="gap-4 flex flex-col">
            <PriceRange current={price} low={low} high={high} type="Today's" />
            <PriceRange current={price} low={low} high={high} type="52W" />
          </div>
          <div className="pt-12">
            <div className="text-xl flex gap-2 items-center text-muted-foreground">
              <h1 className="font-semibold">Fundamentals</h1>
              <IoIosInformationCircle />
            </div>
            <div className="flex md:gap-16 flex-col md:flex-row">
              <div className="flex-1">
                {fundamentals.slice(0, 5).map((fundamental, index) => (
                  <div
                    key={index}
                    className="text-xs md:text-sm flex justify-between h-16 items-center border-b border-[#c7c7c7]"
                  >
                    <h3 className="text-muted-foreground">
                      {fundamental.name}
                    </h3>
                    <div className="font-semibold">{fundamental.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {fundamentals.slice(5).map((fundamental, index) => (
                  <div
                    key={index}
                    className="text-xs md:text-sm flex justify-between h-16 items-center py-2 border-b border-[#c7c7c7]"
                  >
                    <h3 className="text-muted-foreground">
                      {fundamental.name}
                    </h3>
                    {fundamental.type !== "AT" && (
                      <div className="font-semibold">{fundamental.value}</div>
                    )}
                    {fundamental.type === "AT" && (
                      <AllTime
                        curr={price}
                        given={fundamental.value}
                        date={fundamental.date}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PerformanceCard;
