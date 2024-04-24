import { createContext } from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => alert('no theme provider')
});

export { ThemeContext, type IThemeContext };
