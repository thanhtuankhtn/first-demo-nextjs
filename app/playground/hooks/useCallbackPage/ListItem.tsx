'use client';
import React from 'react';

// 1. ĐỊNH NGHĨA HỢP ĐỒNG (INTERFACE)
interface Props {
  task: string; // Nhận nội dung công việc (String)
  onDelete: (task: string) => void; // Nhận hàm xóa từ Cha truyền xuống
}

// 1. Định nghĩa hàm có tên rõ ràng
// COMPONENT THỰC THI
const ListItemComponent = ({ task, onDelete }: Props) => {
// Dòng log này giúp bạn biết khi nào Component bị "vẽ lại"
  console.log('Render dòng: ${task}');
  //Khi bạn nhấn nút, nó sẽ gửi cái tên task vào hàm onDelete
  //Đây là lúc nó liên lạc với Component cha.
  return (
    <li>
      <li>
      {/* Hiển thị nội dung công việc */}
      {task} 
      
      {/* Khi bấm nút, gọi hàm onDelete và gửi kèm cái tên 'task' 
          để Cha biết đường mà xóa đúng dòng đó */}
      <button onClick={() => onDelete(task)}>Xóa</button>
    </li>
    </li>
  );
};tt

// 2. Bọc memo cho hàm đã có tên
//Trước khi cho phép ListItem render lại
// , nó sẽ kiểm tra: "Dữ liệu task có đổi không? Cái hàm onDelete có bị thay đổi địa chỉ bộ nhớ không?".
// Nếu cả hai đều giống hệt lần trước, nó sẽ chặn đứng việc render lại.
const ListItem = React.memo(ListItemComponent);

export default ListItem;