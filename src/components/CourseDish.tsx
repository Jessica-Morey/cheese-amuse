"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dish } from "@/data/dishes";
import { useSound } from "./SoundProvider";

const bgByIndex = ["bg-charcoal", "bg-dark-brown", "bg-espresso", "bg-charcoal"];

export default function CourseDish({ dish, index }: { dish: Dish; index: number }) {
  const reversed = index % 2 === 1;
  const bg = bgByIndex[index % bgByIndex.length];
  const { chime } = useSound();

  return (
    <article
      className={`relative flex min-h-screen w-full items-center ${bg} px-6 py-24 sm:px-10 lg:px-16`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:min-h-[70vh] lg:flex-row lg:gap-16 ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          onViewportEnter={chime}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[3/2] w-full max-w-xl overflow-hidden rounded-sm lg:w-1/2 lg:max-w-none"
        >
          <Image
            src={dish.image.src}
            alt={dish.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="w-full max-w-xl text-cream-text lg:w-1/2"
        >
          <span className="font-garamond block text-sm tracking-[0.4em] text-muted-gold">
            {dish.number}
          </span>

          <h3 className="font-mincho mt-4 text-2xl leading-snug sm:text-3xl">
            {dish.nameJa}
          </h3>
          <p className="font-garamond mt-2 text-sm italic tracking-wide text-cream-text/70 sm:text-base">
            {dish.nameEn}
          </p>

          <p className="mt-8 font-sans-body text-sm leading-loose text-cream-text/85 sm:text-base">
            {dish.description}
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line-dark pt-8 sm:grid-cols-3">
            {dish.pairings.map((pairing) => (
              <div key={pairing.label}>
                <dt className="font-garamond text-xs uppercase tracking-[0.25em] text-muted-gold">
                  {pairing.label}
                </dt>
                <dd className="mt-2">
                  <p className="font-mincho text-base leading-snug text-cream-text">
                    {pairing.name}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-cream-text/65">
                    {pairing.reason}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </article>
  );
}
