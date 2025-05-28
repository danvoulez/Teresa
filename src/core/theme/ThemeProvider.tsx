import React, { useEffect } from 'react';
import { tokens } from './tokens';

export default function ThemeProvider({ mode = 'light', children }: { mode?: 'light' | 'dark'; children: React.ReactNode }) {
  useEffect(() => {
    const vars = tokens[mode];
    Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v as string));
  }, [mode]);
  return <>{children}</>;
}
