"use client";

import BreadCrumbs from "@/components/breadcrumbs/breadcrumbs";
import PriceChart from "@/components/price-chart/price-chart";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CryptoPage = () => {
  const pathname = usePathname();
  const { data, isLoading, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${pathname.split("/")[2]}`,
    fetcher
  );

  return (
    <main className="flex flex-col gap-4">
      <BreadCrumbs pathname={pathname} />

      {isLoading && <Skeleton className="h-screen w-full" />}
      {error && <div>Error fetching data</div>}
      {data && (
        <PriceChart
          change={data.market_data.price_change_percentage_24h}
          image={data.image.large}
          inr_price={data.market_data.current_price.inr}
          name={data.name}
          rank={data.market_data.market_cap_rank}
          symbol={data.symbol}
          usd_price={data.market_data.current_price.usd}
        />
      )}
    </main>
  );
};

export default CryptoPage;

// {
//   name: data.name,
//   symbol: data.symbol,
//   image: data.image.thumb,
//   usd_price: data.market_data.current_price.usd,
//   inr_price: data.market_data.current_price.inr,
//   rank: data.market_data.market_cap_rank,
//   change: data.market_data.price_change_percentage_24h,
//   volume: data.market_data.total_volume.usd,
//   low_24h: data.market_data.low_24h.usd,
//   high_24h: data.market_data.high_24h.usd,
//   market_cap: data.market_data.market_cap.usd,
//   ath: data.market_data.ath.usd,
//   atl: data.market_data.atl.usd,
// }
