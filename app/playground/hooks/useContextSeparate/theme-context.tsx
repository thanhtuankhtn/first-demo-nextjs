'use client'; // Bắt buộc vì dùng useState và Context

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Định nghĩa khuôn mẫu dữ liệu
interface ThemeContextType {
  theme: string;
  setTheme: (val: string) => void;
}

// 2. Tạo kho lưu trữ (mặc định là undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Component bọc ngoài để cung cấp dữ liệu
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Hook tự chế để lấy dữ liệu nhanh và an toàn
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme phải được dùng bên trong ThemeProvider');
  }
  return context;
}