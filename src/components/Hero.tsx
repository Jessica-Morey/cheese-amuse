"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data/images";
import { brand } from "@/data/copy";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Cheese Amuse ブランドヒーロー"
      className="relative flex min-h-screen w-full overflow-hidden bg-charcoal"
    >
      {/* The hero artwork is a finished composition (logo + copy baked in); the
          heading below exists for accessibility/SEO only and is not shown visually. */}
      <h1 className="sr-only">
        {brand.name} — {brand.kicker} {brand.tagline}
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={images.heroDesktopOverhead.src}
            alt={images.heroDesktopOverhead.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src={images.heroMobile.src}
            alt={images.heroMobile.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
