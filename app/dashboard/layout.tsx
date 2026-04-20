// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar bên trái */}
      <nav style={{ width: '250px', background: '#2c3e50', color: 'white', padding: '20px' }}>
        <h2>Menu</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/dashboard/analytics" style={{ color: 'white' }}>Thống kê</a></li>
          <li style={{ marginTop: '10px' }}><a href="/dashboard/settings" style={{ color: 'white' }}>Cài đặt</a></li>
        </ul>
      </nav>

      {/* Nội dung bên phải */}
      <main style={{ flex: 1, padding: '20px', background: '#ecf0f1' }}>
       {children}
      </main>
    </div>
  );
}