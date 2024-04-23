import { createContext } from 'react';

interface IThemeContext {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
	theme: 'light',
	toggleTheme: () => console.error('no theme provider')
});

export { ThemeContext, type IThemeContext };
