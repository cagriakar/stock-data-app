import type { PropsWithChildren } from 'react';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { IThemeContext } from './theme-context';
import { ThemeContext } from './theme-context';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = useCallback(() => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    window.localStorage.setItem('theme', updatedTheme);
  }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const providerValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext<IThemeContext>(ThemeContext);
