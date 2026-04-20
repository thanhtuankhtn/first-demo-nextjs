'use client';
import { createContext, useContext, useState } from 'react';

// BƯỚC 1: Tạo cái "Kho" (Context)
const UserContext = createContext("");

export default function App() {
  const [user, setUser] = useState("Anh An");

  return (
    // BƯỚC 2: Bọc các con lại và "Phát sóng" giá trị user
    <UserContext.Provider value={user}>
      <div style={{ padding: '20px', border: '1px solid black' }}>
        <h1>Đây là trang chủ</h1>
        <Header /> {/* Header không nhận prop nào cả */}
      </div>
    </UserContext.Provider>
  );
}

// Component trung gian (Không làm gì cả, chỉ chứa Navbar)
function Header() {
  return (
    <div style={{ margin: '10px', border: '1px solid blue' }}>
      <h3>Đây là Header</h3>
      <Navbar />
    </div>
  );
}

// Component con sâu nhất (Nơi lấy dữ liệu)
function Navbar() {
  // BƯỚC 3: "Bật radio" để nghe tín hiệu từ UserContext
  const name = useContext(UserContext);

  return (
    <div style={{ background: '#eee', padding: '10px' }}>
      Chào mừng, <b>{name}</b> đã đăng nhập!
    </div>
  );
}

