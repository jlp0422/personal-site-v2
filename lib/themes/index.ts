import { Theme, ThemeId } from './types';
import { savedByTheBell } from './themes/savedByTheBell';
import { cyberpunk } from './themes/cyberpunk';
import { retroTerminal } from './themes/retroTerminal';
import { vaporwave } from './themes/vaporwave';
import { brutalist } from './themes/brutalist';

export * from './types';

export const themes: Record<ThemeId, Theme> = {
  savedByTheBell,
  cyberpunk,
  retroTerminal,
  vaporwave,
  brutalist,
};

export const themeList: Theme[] = [
  savedByTheBell,
  cyberpunk,
  retroTerminal,
  vaporwave,
  brutalist,
];
