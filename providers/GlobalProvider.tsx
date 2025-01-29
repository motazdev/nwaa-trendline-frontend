"use client";

import { getCookie, setCookie } from "cookies-next";
import React, { useEffect } from "react";

interface GlobalProviderProps extends React.PropsWithChildren {
  language?: string;
  settings?: Record<string, string>;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  useEffect(() => {
    if (getCookie("lang") == undefined) {
      setCookie("lang", "en");
      setCookie("dir", "ltr");
    }
  }, []);

  return children;
};

export default GlobalProvider;
