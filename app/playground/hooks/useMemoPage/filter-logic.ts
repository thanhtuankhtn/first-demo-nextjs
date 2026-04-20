//Mục đích: Giả lập việc lọc hàng triệu bản ghi tốn thời gian.

export const filterProducts = (search: string) => {
  console.log("🔍 Đang lục tung 5 triệu sản phẩm để tìm: " + search);
  
  // Giả lập tốn thời gian lọc
  for (let i = 0; i < 1000000000; i++) {} 
  
  return ["Sản phẩm A", "Sản phẩm B", "Sản phẩm C"]; // Kết quả trả về
};