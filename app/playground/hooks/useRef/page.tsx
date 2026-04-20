'use client';
import { useRef } from 'react';
import './useRef.css'; // <--- BƯỚC QUAN TRỌNG: Import file CSS vào đây

export default function LoginWithRef() {

    // 1. Khởi tạo tham chiếu cho Tài khoản và Mật khẩu
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = () => {
        // 2. Lấy giá trị trực tiếp từ các thẻ input khi nhấn nút
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        // 3. Xử lý logic thông báo
        if (!username || !password) {
            alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
            return;
        }

        alert(`Đăng nhập thành công!\nTài khoản: ${username}\nMật khẩu: ${password}`);

        // Tùy chọn: Xóa trắng form sau khi hiện thông báo
        // usernameRef.current!.value = "";
        // passwordRef.current!.value = "";
    };

    return (
        <div className="container-login">
            <div className="card-login">
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Đăng Nhập</h2>

                <div style={{ marginBottom: '15px' }}>
                    <label>Tài khoản:</label>
                    <input
                        type="text"
                        ref={usernameRef}
                        placeholder="Nhập tên đăng nhập"
                        className="input-style"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        ref={passwordRef}
                        placeholder="Nhập mật khẩu"
                        className="input-style"
                    />
                </div>

                <button onClick={handleLogin} style={{ width: '100%', padding: '10px' }}>
                    Đăng Nhập
                </button>
            </div>
        </div>
    );

}
