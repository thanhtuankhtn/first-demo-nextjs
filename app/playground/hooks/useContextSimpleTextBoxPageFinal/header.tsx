'use client';
import Navbar from './navbar';

export default function Header() {
  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px dashed gray' }}>
      <h3 style={{ margin: 0 }}>Đây là Header Component</h3>
      <Navbar />
    </div>
  );
}