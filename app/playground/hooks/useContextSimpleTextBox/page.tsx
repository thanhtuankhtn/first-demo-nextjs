'use client';
import { createContext, useContext, useState } from 'react';

// 1. Tạo cái "Loa" (Context)
const UserContext = createContext({ name: "", setName: (v: string) => {} });

export default function App() {
  const [name, setName] = useState("Anh An");

  return (
    // 2. Phát sóng cả "tên" và "hàm đổi tên" qua một Object
    <UserContext.Provider value={{ name, setName }}>
      <div style={{ padding: '30px', border: '2px solid #333', borderRadius: '10px' }}>
        <h1>Trang quản lý người dùng</h1>
        
        <label>Nhập tên của bạn: </label>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: '5px', marginBottom: '20px' }}
        />

        <Header />
      </div>
    </UserContext.Provider>
  );
}

// Component trung gian (Header - không quan tâm đến tên)
function Header() {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid blue' }}>
      <h3>Đây là Header</h3>
      <Navbar />
    </div>
  );
}

// Component đích (Navbar - nơi hiển thị tên)
function Navbar() {
  // 3. Lấy đúng biến 'name' từ trong Object mà Provider đã phát ra
  const { name } = useContext(UserContext);

  // Nếu bạn muốn lấy cả hàm sửa tên để đổi tên ngay tại Navbar:
  // const { name, setName } = useContext(UserContext);

  return (
    <div style={{ background: '#f0f0f0', padding: '15px', marginTop: '10px' }}>
      Xin chào, <span style={{ color: 'red', fontWeight: 'bold' }}>{name}</span>!
    </div>
  );
}