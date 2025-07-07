import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../type/type';

const savedTheme = localStorage.getItem('theme') as Theme | null;
const initialState: Theme = savedTheme === Theme.Light ? Theme.Light : Theme.Dark;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => {
      const theme = action.payload;

      localStorage.setItem('theme', theme);

      if (theme === Theme.Dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return theme; 
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
