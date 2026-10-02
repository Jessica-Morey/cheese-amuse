"use client";

import { useSound } from "./SoundProvider";

export default function SoundToggle() {
  const { enabled, toggle } = useSound();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "コース中の音を消す" : "コース中の音を鳴らす"}
      className="fixed bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-line-dark bg-espresso/70 text-cream-text/80 backdrop-blur-sm transition-colors hover:text-cream-text"
    >
      <span className="font-garamond text-[0.65rem] tracking-widest">
        {enabled ? "ON" : "OFF"}
      </span>
    </button>
  );
}
