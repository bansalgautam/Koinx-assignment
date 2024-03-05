import { cn, formatNumberWithCommas } from "@/lib/utils";

const AllTime = ({
  curr,
  given,
  date,
}: {
  curr: number;
  given: number;
  date: Date;
}) => {
  const helper = () => {
    return ((curr - given) / given) * 100;
  };

  function formatDate() {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // "short" for abbreviated month name
      day: "2-digit", // "2-digit" for two-digit day
      year: "numeric", // "numeric" for full numeric year
    });
  }

  function timePassedSince() {
    const givenDate = new Date(date).getTime();
    const currentDate = new Date().getTime(); // Today's date

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - givenDate;

    // Convert the difference to days, months, and years
    const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);
    const differenceInMonths = differenceInDays / 30; // Approximation
    const differenceInYears = differenceInMonths / 12;

    // Determine the appropriate string to return
    if (differenceInYears >= 1) {
      const years = Math.floor(differenceInYears);
      return `about ${years} year${years > 1 ? "s" : ""}`;
    } else if (differenceInMonths >= 1) {
      const months = Math.floor(differenceInMonths);
      return `about ${months} month${months > 1 ? "s" : ""}`;
    } else if (differenceInDays >= 1) {
      const days = Math.floor(differenceInDays);
      return `about ${days} day${days > 1 ? "s" : ""}`;
    } else {
      return "less than a day";
    }
  }

  return (
    <div className="flex flex-col items-end">
      <div className="flex gap-2 font-semibold">
        <div>{formatNumberWithCommas(given, "USD")}</div>
        <div className={cn(helper() < 0 ? "text-[#f00]" : "text-[#14B079]")}>
          {helper().toFixed(1)}%
        </div>
      </div>
      <div className="flex gap-1 text-xs">
        <div>{formatDate()}</div>
        <div>({timePassedSince()})</div>
      </div>
    </div>
  );
};

export default AllTime;
