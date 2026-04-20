'use client';
import { useContext } from 'react';
import { UserContext } from './page'; // Import cái kho từ file chính

export default function Navbar() {
  const { name } = useContext(UserContext);

  return (
    <div style={{ background: '#f0f0f0', padding: '10px', marginTop: '10px' }}>
      Xin chào, <span style={{ color: 'red' }}>{name}</span>!
    </div>
  );
}