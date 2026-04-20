// Định nghĩa kiểu dữ liệu cho học sinh
export interface HocSinh {
  maHocSinh: string;    // Mã học sinh (khóa chính)
  tenHocSinh: string;   // Tên học sinh
  ngaySinh: string;     // Ngày sinh dạng YYYY-MM-DD
  diaChi: string;       // Địa chỉ
}

// Tính tuổi từ ngày sinh
export function tinhTuoi(ngaySinh: string): number {
  const hom_nay = new Date();
  const ns = new Date(ngaySinh);
  let tuoi = hom_nay.getFullYear() - ns.getFullYear();
  // Trừ 1 nếu chưa qua sinh nhật trong năm nay
  const chuaQuaSinhNhat =
    hom_nay.getMonth() < ns.getMonth() ||
    (hom_nay.getMonth() === ns.getMonth() && hom_nay.getDate() < ns.getDate());
  if (chuaQuaSinhNhat) tuoi--;
  return tuoi;
}

// Dữ liệu mẫu ban đầu
export const duLieuMau: HocSinh[] = [
  { maHocSinh: "HS001", tenHocSinh: "Nguyễn Văn An", ngaySinh: "2010-03-15", diaChi: "Hà Nội" },
  { maHocSinh: "HS002", tenHocSinh: "Trần Thị Bình", ngaySinh: "2011-07-22", diaChi: "TP. Hồ Chí Minh" },
  { maHocSinh: "HS003", tenHocSinh: "Lê Minh Châu", ngaySinh: "2010-11-05", diaChi: "Đà Nẵng" },
];
