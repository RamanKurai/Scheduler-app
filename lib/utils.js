import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getBasePath = () => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  return origin;
};
