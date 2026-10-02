"use client";

import { createContext, useContext, useMemo, useRef, useState } from "react";

const CHIME_SRC = "/sounds/chime.mp3";

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  chime: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const value = useMemo<SoundContextValue>(
    () => ({
      enabled,
      toggle: () => setEnabled((prev) => !prev),
      chime: () => {
        if (!enabled) return;
        if (!audioRef.current) {
          audioRef.current = new Audio(CHIME_SRC);
          audioRef.current.volume = 0.18;
        }
        // Missing audio file or autoplay restrictions must never break the page.
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      },
    }),
    [enabled]
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return ctx;
}
