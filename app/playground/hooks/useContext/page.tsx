'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Khai báo "bản thiết kế" cho kho dữ liệu
interface ThemeType {
  theme: string;
  setTheme: (t: string) => void;
}

// 2. Khởi tạo kho với giá trị mặc định là null (nhưng báo cho TS biết nó sẽ chứa ThemeType)
const ThemeContext = createContext<ThemeType | null>(null);

// 3. Tạo một "nhà cung cấp" (Provider) để bọc bên ngoài App
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Tạo một Hook tự chế để lấy dữ liệu cực nhanh
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme phải được đặt trong ThemeProvider!");
  }
  return context;
}

export default function MyPage() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

function Content() {
  // Lấy dữ liệu ra cực gọn, không lo lỗi Type nữa
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Chào mừng bạn!</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Đổi màu trang
      </button>
    </div>
  );
}