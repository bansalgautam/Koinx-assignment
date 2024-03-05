import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const BreadCrumbs = ({ pathname }: { pathname: string }) => {
  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <div className="flex text-sm w-[95%] md:w-full mx-auto">
      {paths.map((path, index) => (
        <div
          key={index}
          className={cn(
            "capitalize",
            index === paths.length - 1
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {index !== 0 && (
            <span className="text-muted-foreground mx-1">&gt;&gt;</span>
          )}
          {path}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
