import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberWithCommas(number: number, currency: string) {
  let formattedNumber;

  // Round the number to two decimal places
  number = Math.round(number * 100) / 100;

  if (currency.toUpperCase() === "INR") {
    // Indian numbering system
    let [integer, fraction] = number.toString().split(".");
    // Ensure fraction has two digits if it exists
    fraction = fraction ? "." + fraction.padEnd(2, "0") : ".00";

    // First, separate the last three digits
    if (integer.length > 3) {
      const lastThree = integer.substring(integer.length - 3);
      const rest = integer.substring(0, integer.length - 3);
      // Then, insert commas every two digits for the rest
      const restFormatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      formattedNumber = `${restFormatted},${lastThree}${fraction}`;
    } else {
      // If the number is less than 1000, no need for comma separation
      formattedNumber = integer + fraction;
    }
  } else if (currency.toUpperCase() === "USD") {
    // International numbering system (e.g., US)
    formattedNumber = number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    // Default to international if currency code is not recognized
    formattedNumber = number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return formattedNumber;
}
