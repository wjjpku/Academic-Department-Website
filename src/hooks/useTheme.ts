import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof document === 'undefined') return 'light';
  // 初始值以 <html> 上的类为准（由 index.html 的内联脚本在首屏前设置，避免闪烁）
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

/**
 * 主题状态管理：在 <html> 上切换 `dark` 类并持久化到 localStorage。
 * 首屏的初始主题由 index.html 内联脚本设置（防止白屏闪烁），此处负责后续切换。
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage 不可用时忽略（无痕模式等）
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
};
