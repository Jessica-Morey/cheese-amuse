import type { Metadata } from "next";
import { mincho, garamond, sansBody } from "@/lib/fonts";
import "./globals.css";

const siteUrl = "https://cheese-amuse.vercel.app";
const title = "Cheese Amuse｜しょっぱい、大人のセイバリーケーキ。";
const description =
  "塩味のクリームチーズを纏った、ケーキの姿をした“アテになる”ケーキ「Cheese Amuse」。ミシュランのアミューズを思わせる4皿の小さなコースを、持ち帰れる体験として届けます。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Cheese Amuse",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${mincho.variable} ${garamond.variable} ${sansBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-ink">
        {children}
      </body>
    </html>
  );
}
