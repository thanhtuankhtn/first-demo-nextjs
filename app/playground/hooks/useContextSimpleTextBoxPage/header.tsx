'use client';
import Navbar from './navbar';

export default function Header() {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid blue' }}>
      <h3>Đây là Header</h3>
      <Navbar />
    </div>
  );
}