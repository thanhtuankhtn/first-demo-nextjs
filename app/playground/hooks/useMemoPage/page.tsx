'use client';
import { useState, useMemo } from 'react';
import { filterProducts } from './filter-logic';

export default function SearchPage() {
  const [search, setSearch] = useState(""); // State 1: Từ khóa tìm kiếm
  const [count, setCount] = useState(0);     // State 2: Một con số không liên quan

  // 💡 ĐÂY LÀ TRỌNG TÂM:
  // Chúng ta "ghi nhớ" kết quả lọc vào biến 'filteredList'
  const filteredList = useMemo(() => {
    // Hàm này CHỈ CHẠY khi biến 'search' thay đổi
    return filterProducts(search);
  }, [search]); 

  return (
    <div style={{ padding: '40px' }}>
      <h1>Tìm kiếm sản phẩm</h1>      
      {/* 1. Ô NHẬP TÌM KIẾM */}
      <input 
        placeholder="Nhập tên sản phẩm..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p style={{ fontSize: '12px' }}> (Gõ vào đây sẽ bị LAG vì phải lọc lại) </p>
      <hr />
      {/* 2. NÚT BẤM KHÔNG LIÊN QUAN */}
      <button onClick={() => setCount(count + 1)}>
        Tăng số đếm: {count}
      </button>
      <p style={{ fontSize: '12px' }}> (Bấm cái này PHẢI MƯỢT vì không cần lọc lại) </p>
      <ul>
        {filteredList.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}