'use client';
import { useState } from 'react';
import { UserContext } from './user-context'; // Import cái kho
import Header from './header';

export default function Page() {
  const [name, setName] = useState("Anh An");

  return (
    // Bọc tất cả bằng Provider từ file kho
    <UserContext.Provider value={{ name, setName }}>
      <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial' }}>
        <h1 style={{ color: '#333' }}>Dự án Context Chuyên Nghiệp</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nhập tên của bạn:</label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            placeholder="Gõ tên vào đây..."
          />
        </div>

        <Header />
      </div>
    </UserContext.Provider>
  );
}