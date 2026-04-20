'use client';
import { createContext, useState } from 'react';
import Header from './header';

// 1. Tạo và Export cái kho để các file khác có thể import vào dùng
export const UserContext = createContext({ name: "", setName: (v: string) => {} });

export default function Page() {
  const [name, setName] = useState("Anh An");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <div style={{ padding: '30px', border: '2px solid #333' }}>
        <h1>Trang chính</h1>
        
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nhập tên..."
        />

        <Header />
      </div>
    </UserContext.Provider>
  );
}