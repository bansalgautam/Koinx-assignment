"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import PriceRange from "../price-range/price-range";
import { cn } from "@/lib/utils";

const PerformanceCard = ({
  price,
  low,
  high,
}: {
  price: number;
  low: number;
  high: number;
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
  return (
    <>
      <div className="max-w-[100vw] overflow-hidden">
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
      <Card>
        <CardHeader className="text-xl font-bold">Performance</CardHeader>
        <CardContent>
          <div className="gap-4 flex flex-col">
            <PriceRange current={price} low={low} high={high} type="Today's" />
            <PriceRange current={price} low={low} high={high} type="52W" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PerformanceCard;
