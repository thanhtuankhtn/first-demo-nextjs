// Hàm giả lập chờ 3 giây
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function DashboardPage() {
  await delay(3000); // Ép trang này phải đợi 3 giây mới được hiện nội dung

  return (
    <div>
      <h1>📊 Trang chủ Dashboard</h1>
      <p>Dữ liệu đã tải xong sau 3 giây!</p>
    </div>
  );
}