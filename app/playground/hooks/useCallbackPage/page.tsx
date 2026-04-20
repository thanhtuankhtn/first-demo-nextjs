'use client';
import { useState, useCallback } from 'react';
import ListItem from './ListItem';

export default function TodoPage() {
  const [tasks, setTasks] = useState(['Học React', 'Học Next.js', 'Đi bơi']);
  const [count, setCount] = useState(0);

  // SỬA TẠI ĐÂY: Để mảng rỗng []
  const handleDelete = useCallback((taskToDelete: string) => {
    // Vì ta dùng (prev) => ..., React sẽ tự lấy giá trị tasks mới nhất
    setTasks((prev) => prev.filter(t => t !== taskToDelete));
  }, []); 

  return (
    <div style={{ padding: '40px' }}>
      <h1>Todo List</h1>
      <button onClick={() => setCount(count + 1)}>
        Tăng số đếm: {count}
      </button>

      <ul>
        {tasks.map((t) => (
          <ListItem key={t} task={t} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}