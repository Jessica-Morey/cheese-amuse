import type { Metadata } from "next";
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
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Root layout applies to every page, so the single-page font warning does not apply. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Shippori+Mincho:wght@400;500;600&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-warm-white text-ink">
        {children}
      </body>
    </html>
  );
}
