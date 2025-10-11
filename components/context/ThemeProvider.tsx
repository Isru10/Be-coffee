// context/ThemeProvider.tsx (Client Component)
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check local storage for saved theme
    const savedMode = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialMode = savedMode || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setMode(initialMode);
    
    // Apply initial class
    document.documentElement.classList.add(initialMode);
  }, []);

  const toggleMode = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      
      // Update class on HTML element
      document.documentElement.classList.remove(prevMode);
      document.documentElement.classList.add(newMode);

      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Dark Mode Toggle Button Component
export function DarkModeToggle() {
    const { mode, toggleMode } = useTheme();
    return (
        <button 
            onClick={toggleMode}
            className="p-2 rounded-full text-text-dark dark:text-dm-text bg-bg-primary dark:bg-dm-bg hover:ring-2 ring-accent-gold transition-all"
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
        >
            {mode === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
    );
}