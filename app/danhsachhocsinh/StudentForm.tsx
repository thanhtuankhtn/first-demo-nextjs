"use client";

import { useState, useEffect } from "react";
import { HocSinh } from "./types";

interface Props {
  // Nếu có hocSinhCanSua thì là chế độ Cập nhật, không có thì là Thêm mới
  hocSinhCanSua?: HocSinh | null;
  onLuu: (hs: HocSinh) => void;
  onDong: () => void;
}

export default function StudentForm({ hocSinhCanSua, onLuu, onDong }: Props) {
  // State cho từng trường của form
  const [maHocSinh, setMaHocSinh] = useState("");
  const [tenHocSinh, setTenHocSinh] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [loi, setLoi] = useState<Partial<Record<keyof HocSinh, string>>>({});

  // Khi chế độ chuyển sang Cập nhật, điền sẵn dữ liệu vào form
  useEffect(() => {
    if (hocSinhCanSua) {
      setMaHocSinh(hocSinhCanSua.maHocSinh);
      setTenHocSinh(hocSinhCanSua.tenHocSinh);
      setNgaySinh(hocSinhCanSua.ngaySinh);
      setDiaChi(hocSinhCanSua.diaChi);
    } else {
      // Reset form khi chuyển sang chế độ Thêm mới
      setMaHocSinh("");
      setTenHocSinh("");
      setNgaySinh("");
      setDiaChi("");
    }
    setLoi({});
  }, [hocSinhCanSua]);

  // Kiểm tra dữ liệu hợp lệ trước khi lưu
  function kiemTraHopLe(): boolean {
    const loiMoi: typeof loi = {};
    if (!maHocSinh.trim()) loiMoi.maHocSinh = "Mã học sinh không được để trống.";
    if (!tenHocSinh.trim()) loiMoi.tenHocSinh = "Tên học sinh không được để trống.";
    if (!ngaySinh) loiMoi.ngaySinh = "Ngày sinh không được để trống.";
    if (!diaChi.trim()) loiMoi.diaChi = "Địa chỉ không được để trống.";
    setLoi(loiMoi);
    return Object.keys(loiMoi).length === 0;
  }

  function xuLyLuu() {
    if (!kiemTraHopLe()) return;
    onLuu({ maHocSinh: maHocSinh.trim(), tenHocSinh: tenHocSinh.trim(), ngaySinh, diaChi: diaChi.trim() });
  }

  const laCheDoCapNhat = !!hocSinhCanSua;

  return (
    // Overlay tối phủ toàn màn hình, nhấn ra ngoài để đóng
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onDong}
    >
      {/* Hộp form — ngăn sự kiện click lan lên overlay */}
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tiêu đề form */}
        <h2 className="text-xl font-bold text-gray-800 mb-5">
          {laCheDoCapNhat ? "Cập Nhật Học Sinh" : "Thêm Học Sinh Mới"}
        </h2>

        <div className="space-y-4">
          {/* Mã học sinh — chỉ đọc khi cập nhật */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mã Học Sinh <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={maHocSinh}
              onChange={(e) => setMaHocSinh(e.target.value)}
              disabled={laCheDoCapNhat}
              placeholder="VD: HS004"
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                laCheDoCapNhat ? "bg-gray-100 cursor-not-allowed" : ""
              } ${loi.maHocSinh ? "border-red-400" : "border-gray-300"}`}
            />
            {loi.maHocSinh && <p className="text-red-500 text-xs mt-1">{loi.maHocSinh}</p>}
          </div>

          {/* Tên học sinh */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên Học Sinh <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={tenHocSinh}
              onChange={(e) => setTenHocSinh(e.target.value)}
              placeholder="VD: Nguyễn Văn A"
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                loi.tenHocSinh ? "border-red-400" : "border-gray-300"
              }`}
            />
            {loi.tenHocSinh && <p className="text-red-500 text-xs mt-1">{loi.tenHocSinh}</p>}
          </div>

          {/* Ngày sinh */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày Sinh <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={ngaySinh}
              onChange={(e) => setNgaySinh(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                loi.ngaySinh ? "border-red-400" : "border-gray-300"
              }`}
            />
            {loi.ngaySinh && <p className="text-red-500 text-xs mt-1">{loi.ngaySinh}</p>}
          </div>

          {/* Địa chỉ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Địa Chỉ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={diaChi}
              onChange={(e) => setDiaChi(e.target.value)}
              placeholder="VD: Hà Nội"
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                loi.diaChi ? "border-red-400" : "border-gray-300"
              }`}
            />
            {loi.diaChi && <p className="text-red-500 text-xs mt-1">{loi.diaChi}</p>}
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onDong}
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
          >
            Đóng
          </button>
          <button
            onClick={xuLyLuu}
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
