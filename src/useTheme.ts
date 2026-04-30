import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Function to apply the correct class
    const applyTheme = () => {
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const effectiveTheme = theme === 'system' 
        ? (systemIsDark ? 'dark' : 'light') 
        : theme;

      root.classList.remove('light', 'dark');
      root.classList.add(effectiveTheme);
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    // Listen for system changes if mode is 'system'
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return { theme, setTheme };
}