type ColorValue = string | Record<string, string>;
type ColorsPalette = Record<string, ColorValue>;
interface CodeEditorColors {
  main: {
    keyword: string;
    comment: string;
    meta: string;
  };
  cargo: {
    keyword: string;
    comment: string;
    meta: string;
    string: string;
    literal: string;
  };
}

type CompleteColors = ColorsPalette & CodeEditorColors;

const colorsPalette = {
  white: '#ffffff',
  black: '#000000',
  error: {
    validation: '#FF5E5C'
  },

  slate: {
    50: '#F3F5F7',
    100: '#E3E9EF',
    200: '#CFDAE3',
    300: '#BCCBD6',
    400: '#7A8B99',
    500: '#3C5061',
    600: '#182733',
    700: '#16232E',
    800: '#14202A',
    900: '#0F172A',
    950: '#0C131A'
  },
  teal: {
    50: '#F0FDFA',
    100: '#CCFBF4',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#00EAC7',
    600: '#03D1B5',
    700: '#0F766E',
    800: '#111B24',
    900: '#0F3236',
    950: '#111B24'
  }
} satisfies ColorsPalette;

const codeEditorColors = {
  main: {
    keyword: '#FD4184',
    comment: '#A5B5C2',
    meta: '#818F9B'
  },
  cargo: {
    keyword: '#A6E22E',
    comment: '#818F9B',
    meta: '#FD4184',
    string: '#E6DB74',
    literal: '#FFF'
  }
} satisfies CodeEditorColors;

const colors: CompleteColors = { ...colorsPalette, ...codeEditorColors };

export default colors;
