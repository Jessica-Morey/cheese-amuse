"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/copy";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-[background-color] duration-500 ${
        scrolled ? "bg-warm-white/75" : "bg-warm-white/35"
      }`}
    >
      <nav
        aria-label="サイトナビゲーション"
        className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-6 py-5 sm:gap-10 sm:px-10"
      >
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="font-garamond text-xs uppercase tracking-[0.2em] text-ink/85 transition-colors hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
