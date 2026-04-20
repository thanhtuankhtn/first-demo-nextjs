'use client';
import { useState, useMemo } from "react";

export default function CartExample() {
  const [items] = useState([100, 200, 300, 400]); // Giá của 4 món hàng
  const [voucher, setVoucher] = useState(0);      // Tiền giảm giá
  const [color, setColor] = useState('white');    // Màu nền (không liên quan đến tiền)
  
  // Dùng useMemo để "ghi nhớ" tổng tiền
  const total = useMemo(() => {
    console.log("--- Đang tính toán tổng tiền... ---");
    return items.reduce((sum, item) => sum + item, 0) - voucher;
  }, [items, voucher]); // CHỈ tính lại nếu hàng hóa hoặc voucher thay đổi

  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <h2>Tổng tiền: {total} VNĐ</h2>
      <button onClick={() => setVoucher(50)}>Áp mã giảm giá 50 VNĐ</button>
      <hr />
      <p>Bấm nút dưới này để đổi màu nền (không ảnh hưởng đến tiền):</p>
      <button onClick={() => setColor(color === 'white' ? 'yellow' : 'white')}>
        Đổi màu nền
      </button>
    </div>
  );
}