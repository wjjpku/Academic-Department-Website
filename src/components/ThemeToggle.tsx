import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  /** 暗/亮态下图标的基础颜色类（首页透明导航栏用白色，滚动后用深色） */
  className?: string;
}

/**
 * 明暗主题切换按钮。亮色模式显示月亮（点击切到暗色），暗色模式显示太阳。
 */
const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
      title={isDark ? '切换到亮色模式' : '切换到暗色模式'}
      className={`p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors ${className}`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
