'use client';

import { useState } from "react";

export default function SimpleLogin() {
    // 1. Tạo state để lưu trữ giá trị email và password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 2. Hàm xử lý khi nhấn nút
    const handleShowMessage = () => {
        // Kiểm tra email trống
        if (email === '') {
            alert("Vui lòng nhập email trước khi đăng nhập!");
            return;
        }

        // Kiểm tra định dạng email
        if (!email.includes('@')) {
            alert("Email không đúng định dạng (thiếu @)");
            setEmail('');
            return;
        }

        // Kiểm tra password trống
        if (password === '') {
            alert("Vui lòng nhập mật khẩu!");
            return;
        }

        // Kiểm tra độ dài password (ví dụ: ít nhất 6 ký tự)
        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        // Thông báo thành công nếu mọi điều kiện thỏa mãn
        alert(`Đăng nhập thành công!\nEmail: ${email}`);
    };

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px' }}>
            <h2>Đăng nhập (Gemini)</h2>
            
            {/* Thêm tên cột: Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '8px' }}
                />
            </div>
            
            {/* Thêm tên cột: Mật khẩu */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor="password" style={{ fontWeight: 'bold' }}>Mật khẩu:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '8px' }}
                />
            </div>
            
            <button 
                type="button" 
                onClick={handleShowMessage}
                style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}
            >
                Đăng nhập
            </button>
        </div>
    );
}
```
