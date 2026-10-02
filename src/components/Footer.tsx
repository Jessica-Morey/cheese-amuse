import { brand } from "@/data/copy";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center gap-2 bg-espresso px-6 py-10 text-center">
      <span className="font-garamond text-sm tracking-[0.3em] text-cream-text/80">
        {brand.name}
      </span>
      <span className="text-xs text-cream-text/45">
        © {year} {brand.name}
      </span>
    </footer>
  );
}
