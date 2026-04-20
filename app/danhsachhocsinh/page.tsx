"use client";

import { useState } from "react";
import { HocSinh, duLieuMau, tinhTuoi } from "./types";
import StudentForm from "./StudentForm";

export default function DanhSachHocSinhPage() {
  // Danh sách học sinh, khởi tạo từ dữ liệu mẫu
  const [danhSach, setDanhSach] = useState<HocSinh[]>(duLieuMau);

  // Kiểm soát hiển thị form (null = ẩn, undefined = thêm mới, HocSinh = cập nhật)
  const [hocSinhCanSua, setHocSinhCanSua] = useState<HocSinh | null | undefined>(undefined);
  const [hienThiForm, setHienThiForm] = useState(false);

  // Mở form thêm mới
  function moFormThem() {
    setHocSinhCanSua(null); // null = chế độ thêm mới
    setHienThiForm(true);
  }

  // Mở form cập nhật với dữ liệu học sinh được chọn
  function moFormCapNhat(hs: HocSinh) {
    setHocSinhCanSua(hs);
    setHienThiForm(true);
  }

  // Đóng form
  function dongForm() {
    setHienThiForm(false);
  }

  // Xử lý lưu: phân biệt thêm mới vs cập nhật theo mã học sinh
  function xuLyLuu(hsMoi: HocSinh) {
    setDanhSach((ds) => {
      const tonTai = ds.find((hs) => hs.maHocSinh === hsMoi.maHocSinh);
      if (tonTai) {
        // Cập nhật: thay thế phần tử cũ
        return ds.map((hs) => (hs.maHocSinh === hsMoi.maHocSinh ? hsMoi : hs));
      } else {
        // Thêm mới: kiểm tra trùng mã
        const trungMa = ds.some((hs) => hs.maHocSinh === hsMoi.maHocSinh);
        if (trungMa) {
          alert(`Mã học sinh "${hsMoi.maHocSinh}" đã tồn tại!`);
          return ds;
        }
        return [...ds, hsMoi];
      }
    });
    dongForm();
  }

  // Xóa học sinh sau khi xác nhận
  function xuLyXoa(maHocSinh: string) {
    const hs = danhSach.find((h) => h.maHocSinh === maHocSinh);
    if (!hs) return;
    if (!confirm(`Bạn có chắc muốn xóa học sinh "${hs.tenHocSinh}" (${maHocSinh})?`)) return;
    setDanhSach((ds) => ds.filter((h) => h.maHocSinh !== maHocSinh));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Tiêu đề trang */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Quản Lý Danh Sách Học Sinh</h1>

        {/* Thanh công cụ: nút Thêm */}
        <div className="flex justify-end mb-4">
          <button
            onClick={moFormThem}
            style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all cursor-pointer select-none"
          >
            <span className="text-xl leading-none font-bold">+</span> Thêm Học Sinh
          </button>
        </div>

        {/* Bảng danh sách học sinh */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mã HS</th>
                <th className="px-4 py-3 text-left font-semibold">Tên Học Sinh</th>
                <th className="px-4 py-3 text-left font-semibold">Ngày Sinh</th>
                <th className="px-4 py-3 text-left font-semibold">Địa Chỉ</th>
                <th className="px-4 py-3 text-center font-semibold">Tuổi</th>
                <th className="px-4 py-3 text-center font-semibold">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {danhSach.length === 0 ? (
                // Hiển thị khi không có dữ liệu
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-400">
                    Chưa có học sinh nào. Nhấn &ldquo;Thêm Học Sinh&rdquo; để bắt đầu.
                  </td>
                </tr>
              ) : (
                danhSach.map((hs, index) => (
                  <tr
                    key={hs.maHocSinh}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-4 py-3 font-mono text-blue-700">{hs.maHocSinh}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{hs.tenHocSinh}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {/* Định dạng ngày sinh sang dd/mm/yyyy */}
                      {new Date(hs.ngaySinh).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{hs.diaChi}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{tinhTuoi(hs.ngaySinh)}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        {/* Nút Cập nhật */}
                        <button
                          onClick={() => moFormCapNhat(hs)}
                          className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm hover:shadow transition-all cursor-pointer select-none"
                        >
                          ✏️ Cập Nhật
                        </button>
                        {/* Nút Xóa */}
                        <button
                          onClick={() => xuLyXoa(hs.maHocSinh)}
                          className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm hover:shadow transition-all cursor-pointer select-none"
                        >
                          🗑️ Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Footer hiển thị tổng số học sinh */}
          {danhSach.length > 0 && (
            <div className="px-4 py-3 bg-gray-50 border-t text-xs text-gray-500">
              Tổng cộng: <span className="font-semibold text-gray-700">{danhSach.length}</span> học sinh
            </div>
          )}
        </div>
      </div>

      {/* Hiển thị form modal khi hienThiForm = true */}
      {hienThiForm && (
        <StudentForm
          hocSinhCanSua={hocSinhCanSua}
          onLuu={xuLyLuu}
          onDong={dongForm}
        />
      )}
    </div>
  );
}
