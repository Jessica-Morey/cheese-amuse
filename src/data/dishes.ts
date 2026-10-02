import { images, type ImageAsset } from "./images";

export type Pairing = {
  label: "Wine" | "Sake" | "Non-alcoholic";
  name: string;
  reason: string;
};

export type Dish = {
  number: string;
  nameJa: string;
  nameEn: string;
  description: string;
  pairings: [Pairing, Pairing, Pairing];
  image: ImageAsset;
};

export const dishes: Dish[] = [
  {
    number: "01",
    nameJa: "セミドライトマトのショートケーキ風",
    nameEn: "Semi-Dried Tomato Shortcake",
    description:
      "一見、いちごのショートケーキそのもの。しかし口に含んだ瞬間、甘さの代わりに凝縮した旨味が広がる。半日陰干ししたトマトは驚くほど濃密な甘酸っぱさをたたえ、軽やかなクリームチーズの層と重なり合う。台座のスポンジには僅かな塩とオリーブオイルを忍ばせ、菓子でありながら一皿の料理として成立させた。見た目の可憐さと、舌の上で裏切られる快感——それこそが、このケーキの愉しみ方である。",
    pairings: [
      {
        label: "Wine",
        name: "辛口のロゼ・スパークリング",
        reason: "トマトの酸とベリーのような香りが呼応し、泡の清涼感が甘くない生地の輪郭を際立たせる。",
      },
      {
        label: "Sake",
        name: "やや辛口の生酒",
        reason: "米の旨味がトマトの凝縮した甘みと重なり、後味を軽やかに流してくれる。",
      },
      {
        label: "Non-alcoholic",
        name: "トマトウォーターとハーブのコーディアル",
        reason: "素材そのものと呼応させることで、皿の余韻を静かに引き延ばす。",
      },
    ],
    image: images.dish01,
  },
  {
    number: "02",
    nameJa: "バジルのミルクレープ",
    nameEn: "Basil Mille-Crêpes",
    description:
      "幾重にも重ねたクレープの合間に、バジルを効かせた軽やかなクリームを忍ばせた一皿。断面の美しい層はまるで芸術作品のようだが、香りはハーブ畑を歩いているかのように清々しい。生地には僅かな塩とオリーブオイルを練り込み、甘さを削ぎ落として素材の青さを際立たせている。層を割るたびに立ち上るバジルの香りとクレープのしっとりとした食感が、デザートというより「もう一皿」を思わせる満足感を生む。",
    pairings: [
      {
        label: "Wine",
        name: "青草香るソーヴィニヨン・ブラン",
        reason: "バジルのハーブ感と柑橘のニュアンスが重なり、皿の清涼感をより引き立てる。",
      },
      {
        label: "Sake",
        name: "吟醸香の高い純米吟醸",
        reason: "華やかな香りがバジルの青さと調和し、層の軽さを損なわない。",
      },
      {
        label: "Non-alcoholic",
        name: "きゅうりとバジルのコーディアル",
        reason: "皿の香りの延長線上にあるような、静かな余韻を作る。",
      },
    ],
    image: images.dish02,
  },
  {
    number: "03",
    nameJa: "金山寺味噌とカッテージ＊マスカルポーネの山椒香るエクレア",
    nameEn: "Sansho Éclair with Kinzanji Miso, Cottage Cheese & Mascarpone",
    description:
      "エクレアという可憐な形に、発酵の深みを閉じ込めた一皿。金山寺味噌が生み出す複雑な旨味と塩気は、カッテージチーズとマスカルポーネ、二種のクリームによって滑らかに包み込まれる。仕上げにまとう山椒の香りが後味にきりりとした余韻としびれを残し、ただ塩気だけのスイーツで終わらせない。皮はサクサクと軽く、中のクリームはねっとりと濃密——そのコントラストがこのエクレアの核心である。和の発酵食品と洋菓子の技法が交差する、大人のためのひと口。",
    pairings: [
      {
        label: "Wine",
        name: "樽熟成のオレンジワイン",
        reason: "発酵由来の複雑な香りが金山寺味噌と共鳴し、山椒の香りとも喧嘩しない骨格を持つ。",
      },
      {
        label: "Sake",
        name: "熟成させた古酒",
        reason: "味噌の旨味や熟成香と響き合い、山椒のシャープさを穏やかに包み込む。",
      },
      {
        label: "Non-alcoholic",
        name: "ほうじ茶と柑橘のドリンク",
        reason: "焙煎香が味噌のコクと寄り添い、柑橘が山椒の香りを軽やかに受け止める。",
      },
    ],
    image: images.dish03,
  },
  {
    number: "04",
    nameJa: "カカオとナスの焼きタルト",
    nameEn: "Baked Cacao & Eggplant Tart",
    description:
      "コースの締めくくりにふさわしい、静かな余韻を残す一皿。じっくりと焼き上げたナスは驚くほど滑らかなペースト状になり、カカオの苦みと出会うことでガナッシュのような深みへと変貌する。甘さを極限まで抑えたタルト生地は、香ばしさとともに噛むほどに満足感を増していく。ナスの持つほのかな土の香りとカカオの苦味が織りなす味わいは、デザートというよりも余韻を纏った一皿の料理に近い。コースの最後を、静かに、しかし印象深く締めくくる。",
    pairings: [
      {
        label: "Wine",
        name: "力強いフルボディの赤ワイン",
        reason: "カカオの苦みとナスのコクに、タンニンと果実味が寄り添い、余韻を引き延ばす。",
      },
      {
        label: "Sake",
        name: "濃醇な山廃仕込みの純米酒",
        reason: "発酵由来の深みがカカオの苦味と響き合い、料理の余韻を静かに支える。",
      },
      {
        label: "Non-alcoholic",
        name: "カカオニブとエスプレッソのドリンク",
        reason: "苦みの系譜を引き継ぎながら、コース全体を静かに締めくくる。",
      },
    ],
    image: images.dish04,
  },
];
