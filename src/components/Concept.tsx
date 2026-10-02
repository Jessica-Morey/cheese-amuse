"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { conceptLines } from "@/data/copy";
import { images } from "@/data/images";

export default function Concept() {
  return (
    <section
      id="concept"
      aria-labelledby="concept-heading"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-stone px-6 py-32"
    >
      <h2 id="concept-heading" className="sr-only">
        Concept
      </h2>

      <div className="absolute inset-0">
        <Image
          src={images.dish01.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-stone/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:gap-10">
        {conceptLines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.18, ease: "easeOut" }}
            className="font-mincho text-xl leading-loose text-ink sm:text-2xl md:text-3xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
