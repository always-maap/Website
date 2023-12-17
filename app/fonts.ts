import localFont from "@next/font/local";
import { Vazirmatn } from "@next/font/google";

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});
