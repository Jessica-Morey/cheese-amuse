import { Shippori_Mincho, Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";

export const mincho = Shippori_Mincho({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const garamond = Cormorant_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const sansBody = Noto_Sans_JP({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
