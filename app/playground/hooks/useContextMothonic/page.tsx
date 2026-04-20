'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// --- BƯỚC 1: Định nghĩa "khuôn mẫu" cho cái kho ---
interface ThemeContextType {
  theme: string;
  setTheme: (val: string) => void;
}

// --- BƯỚC 2: Tạo kho (Context) ---
// Khởi tạo là null để TypeScript bắt chúng ta kiểm tra an toàn sau này
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    // --- BƯỚC 3: Phát sóng dữ liệu ---
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ 
        background: theme === 'light' ? '#fff' : '#333', 
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '20px',
        transition: 'all 0.3s' // Hiệu ứng chuyển màu cho mượt
      }}>
        <Header />
        
        <main style={{ marginTop: '20px' }}>
          <h2>Nội dung trang chính</h2>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Chuyển sang chế độ {theme === 'light' ? 'Tối' : 'Sáng'}
          </button>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

// --- BƯỚC 4: Component Header (Trung gian) ---
function Header() {
  return (
    <header style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
      <h1>My Website Logo</h1>
      <Navbar /> {/* Header chứa Navbar */}
    </header>
  );
}

// --- BƯỚC 5: Component Navbar (Đứa con ở sâu bên trong) ---
function Navbar() {
  // Bật "radio" lên để nghe tín hiệu từ kho ThemeContext
  const context = useContext(ThemeContext);

  // Kiểm tra an toàn: Nếu không tìm thấy kho thì không làm gì cả
  if (!context) return null;

  const { theme } = context;

  return (
    <nav>
      <ul>
        <li>Trang chủ</li>
        <li>Sản phẩm</li>
        <li>Chế độ hiện tại: <b style={{ color: 'orange' }}>{theme.toUpperCase()}</b></li>
      </ul>
    </nav>
  );
}