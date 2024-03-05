"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ token }: { token: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "autosize": true,
        "symbol": "HUOBI:${token}USDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "save_image": false,
        "allow_symbol_change": true,
        "calendar": true,
        "hide_volume": true,
        "enable_publishing": false,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current?.hasChildNodes()
      ? null
      : container.current?.appendChild(script);
  }, [token]);

  return (
    <div
      className="tradingview-widget-container max-w-full aspect-square md:aspect-[16/9]"
      ref={container}
    ></div>
  );
}

export default memo(TradingViewWidget);
