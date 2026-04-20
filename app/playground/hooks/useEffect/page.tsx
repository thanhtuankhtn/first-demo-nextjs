'use client'; // Bắt buộc trong Next.js 15 nếu dùng Hook
import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Đoạn code này chạy sau khi component hiển thị
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Hàm dọn dẹp (Cleanup) - chạy khi component bị hủy
    return () => clearInterval(interval);
  }, []); // [] nghĩa là chỉ chạy duy nhất 1 lần khi trang vừa load;
  // Có tham số [data] Chạy lần đầu và chạy lại bất cứ khi nào giá trị của data thay đổi.
  // Không có mảng   (Bỏ trống)

  return <h1>Số giây đã trôi qua: {seconds}</h1>;
}