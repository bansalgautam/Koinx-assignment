import { cn, formatNumberWithCommas } from "@/lib/utils";
import { IoCaretUpSharp } from "react-icons/io5";

const PriceRange = ({
  high,
  low,
  current,
  type,
}: {
  high: number;
  low: number;
  current: number;
  type: string;
}) => {
  const range = high - low;
  const currentRange = current - low;
  const percent = (currentRange / range) * 100;

  return (
    <div className="flex gap-4 items-center justify-between">
      <div className="text-xs md:text-sm flex flex-col items-start text-nowrap">
        <div className="text-muted-foreground">{type} Low</div>
        <div>{formatNumberWithCommas(low, "USD")}</div>
      </div>
      <div className="h-[5px] w-[40%] md:w-[50%] rounded-full range relative">
        <div
          className={cn("absolute flex flex-col items-start top-1")}
          style={{ left: `${percent}%` }}
        >
          <IoCaretUpSharp />
          <div className="text-sm">
            ${formatNumberWithCommas(current, "USD")}
          </div>
        </div>
      </div>
      <div className="text-xs md:text-sm flex flex-col items-end">
        <div className="text-muted-foreground text-nowrap">{type} High</div>
        <div>{formatNumberWithCommas(high, "USD")}</div>
      </div>
    </div>
  );
};

export default PriceRange;
