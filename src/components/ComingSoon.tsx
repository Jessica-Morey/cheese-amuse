"use client";

import { motion } from "framer-motion";
import { comingSoon } from "@/data/copy";

export default function ComingSoon() {
  return (
    <section
      aria-labelledby="coming-soon-heading"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-espresso px-6 py-32 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h2
          id="coming-soon-heading"
          className="font-garamond text-sm uppercase tracking-[0.4em] text-muted-gold"
        >
          {comingSoon.heading}
        </h2>

        <p className="font-mincho mt-8 text-xl leading-loose text-cream-text sm:text-2xl">
          {comingSoon.body.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <a
          href={comingSoon.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-garamond mt-12 inline-flex items-center gap-2 rounded-full border border-line-dark px-8 py-3 text-xs uppercase tracking-[0.25em] text-cream-text transition-colors hover:border-muted-gold hover:text-muted-gold"
        >
          Instagram — {comingSoon.instagramHandle}
        </a>
      </motion.div>
    </section>
  );
}
