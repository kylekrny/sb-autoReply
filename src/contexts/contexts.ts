import { createContext, SetStateAction, Dispatch } from 'react';

type ThemeType = {
  darkMode: boolean;
};

type ThemeContextType = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
