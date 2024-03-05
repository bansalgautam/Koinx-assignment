import { cn } from "@/lib/utils";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";

const PriceChange = ({ change }: { change: number }) => {
  return (
    <div
      className={cn(
        "flex p-1 px-2 items-center justify-center gap-1 text-sm h-max w-[80px]",
        change < 0 ? "text-[#f00] bg-[#FEEFEE]" : "text-[#14B079] bg-[#EAF9F5]"
      )}
    >
      {change < 0 ? (
        <IoCaretDownSharp color="#f00" />
      ) : (
        <IoCaretUpSharp color={"#14B079"} />
      )}
      <span>{change < 0 ? -change.toFixed(2) : change.toFixed(2)}</span>
    </div>
  );
};

export default PriceChange;
