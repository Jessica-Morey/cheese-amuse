import { ImageResponse } from "next/og";

export const alt = "Cheese Amuse｜しょっぱい、大人のセイバリーケーキ。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #18140f 0%, #211a14 55%, #140f0b 100%)",
          color: "#f3ece0",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#b3986a",
            marginBottom: 28,
            display: "flex",
          }}
        >
          Cheese Amuse
        </div>
        <div
          style={{
            fontSize: 20,
            letterSpacing: 6,
            color: "#f3ece0",
            opacity: 0.7,
            marginBottom: 8,
            display: "flex",
          }}
        >
          しょっぱい
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 600,
            color: "#f3ece0",
            display: "flex",
          }}
        >
          セイバリーケーキ。
        </div>
      </div>
    ),
    { ...size }
  );
}
