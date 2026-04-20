'use client';

import { ThemeProvider, useTheme } from './theme-context';

// --- COMPONENT CON SÂU NHẤT ---
function Navbar() {
  const { theme } = useTheme(); // Lấy dữ liệu từ kho mà không cần Props
  
  return (
    <nav style={{ 
      padding: '10px', 
      borderBottom: theme === 'light' ? '1px solid #ccc' : '1px solid #555',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <span>MyLogo</span>
      <span>Chế độ: <b>{theme.toUpperCase()}</b></span>
    </nav>
  );
}

// --- COMPONENT TRUNG GIAN ---
function Header() {
  return (
    <header>
      <Navbar />
      <p style={{ fontSize: '12px', padding: '0 10px' }}>
        (Header này không hề nhận Prop nào từ cha)
      </p>
    </header>
  );
}

// --- NỘI DUNG TRANG ---
function PageContent() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{
      padding: '40px',
      minHeight: '100vh',
      backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
      color: theme === 'light' ? '#000000' : '#ffffff',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    }}>
      <Header />
      
      <div style={{ marginTop: '100px' }}>
        <h1>Chào mừng bạn đến với Next.js 15</h1>
        <p>Thử bấm nút bên dưới để xem useContext hoạt động:</p>
        
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: theme === 'light' ? '#0070f3' : '#ff4081',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Đổi sang {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  );
}

// --- XUẤT BẢN TRANG CHÍNH ---
export default function ThemePage() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}