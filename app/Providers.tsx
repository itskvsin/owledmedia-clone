"use client";

import { createContext } from "react";

export const AppContext = createContext({});

export function Providers({ children }: any) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
