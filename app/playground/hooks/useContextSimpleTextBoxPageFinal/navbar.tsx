'use client';
import { useContext } from 'react';
import { UserContext } from './user-context'; // Import từ file kho

export default function Navbar() {
  const { name } = useContext(UserContext);

  return (
    <div style={{ background: '#f0f0f0', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
      Xin chào, <span style={{ color: 'blue', fontWeight: 'bold' }}>{name}</span>!
    </div>
  );
}