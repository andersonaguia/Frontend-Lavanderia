interface ThemeColors {
  primary: string;
  secondary: string;
  off: string;
  on: string;
};

interface ThemeText {
  primary: string;
  secondary: string;
  on: string;
  off: string;
};

export interface CustomTheme {
  colors: ThemeColors;
  text: ThemeText;
};
