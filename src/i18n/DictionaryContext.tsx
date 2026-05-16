"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";

type Dictionary = Record<string, unknown>;

interface DictionaryContextValue {
  dict: Dictionary;
  lang: Locale;
}

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({
  children,
  dictionary,
  lang,
}: {
  children: ReactNode;
  dictionary: Dictionary;
  lang: Locale;
}) {
  return (
    <DictionaryContext.Provider value={{ dict: dictionary, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): DictionaryContextValue {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error("useDictionary must be used within DictionaryProvider");
  return ctx;
}
