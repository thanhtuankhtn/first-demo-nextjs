'use client'; // Bắt buộc trong Next.js 15 nếu dùng Hook

import { useState } from "react";

export default function Counter(){
    // Khai báo: [tên_biến, hàm_thay_đổi] = useState(giá_trị_đầu);
    const [count, setCount] = useState(0);

    return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm vào đây</button>
    </div>
  );
}