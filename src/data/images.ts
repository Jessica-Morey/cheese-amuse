export type ImageAsset = {
  /** Path under /public, or a remote URL. Swap this single value to replace the artwork. */
  src: string;
  alt: string;
};

/**
 * Single source of truth for every image on the site.
 * Replace `src` with a real photograph later — layouts use `fill` + fixed
 * aspect-ratio containers, so any resolution or aspect ratio drops in cleanly.
 */
export const images = {
  heroDesktopOverhead: {
    src: "/images/hero-overhead.webp",
    alt: "Cheese Amuseのロゴと、4皿のセイバリーケーキが並ぶ食卓",
  },
  heroDesktopAngle: {
    src: "/images/hero-angle.svg",
    alt: "4皿の料理を斜め45度から見た、白を基調とした食卓のテーブルセッティング",
  },
  heroMobile: {
    src: "/images/hero-mobile.webp",
    alt: "Cheese Amuseのロゴと、4皿のセイバリーケーキが並ぶ食卓（縦構図）",
  },
  dish01: {
    src: "/images/dish-01.webp",
    alt: "セミドライトマトのショートケーキ風。塩味のクリームチーズと焼きトマトをのせた一皿",
  },
  dish02: {
    src: "/images/dish-02.webp",
    alt: "バジルのミルクレープ。断面に緑の層が重なるミルクレープ",
  },
  dish03: {
    src: "/images/dish-03.webp",
    alt: "キャラメル色のエクレア。クリームとエディブルフラワーを纏った一皿",
  },
  dish04: {
    src: "/images/dish-04.webp",
    alt: "きのこを重ねた焼きタルト",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
