'use client';
import { useState, useCallback } from 'react';
export default function SimpleList() {
    const [text, setText] = useState(''); // State ô tìm kiếm
    const [items, setItems] = useState(['Táo', 'Cam', 'Chuối']);
    // Dùng useCallback để "giữ cố định" hàm xóa này
    // Nó sẽ KHÔNG bị tạo mới khi bạn gõ chữ vào ô tìm kiếm
    const handleDelete = useCallback((itemToRemove: string) => {
        setItems((prev) => prev.filter(item => item !== itemToRemove));
    }, []); // [] nghĩa là hàm này giữ nguyên mãi mãi
    return (
    <div style={{ padding: '20px' }}>
      <input 
        placeholder="Gõ để tìm kiếm..." 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>Bạn đang tìm: {text}</p>
      <ul>
        {items.map(item => (
          <li key={item}>
            {item} 
            {/* Hàm handleDelete được giữ nguyên tham chiếu */}
            <button onClick={() => handleDelete(item)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}