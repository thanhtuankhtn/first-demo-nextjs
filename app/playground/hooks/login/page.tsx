'use client';

import { useState } from "react";

export default function SimpleLogin() {

    //Cach 1
    // const [email, setEmail] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);


    // const handleLogin = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (email.includes('@')) {
    //         setIsLoggedIn(true);
    //     } else {
    //         alert("Email không hợp lệ!");
    //     }
    // };

    // // // 1. Định nghĩa hàm xử lý riêng
    // // const checkLogin = () => {
    // //     if (email.includes('@')) {
    // //         setIsLoggedIn(true);
    // //         console.log("Đăng nhập thành công với:", email);
    // //     } else {
    // //         alert("Vui lòng nhập đúng định dạng email!");
    // //     }
    // // };

    // if (isLoggedIn) return <h1>Chào mừng, {email}!</h1>;

    // return (
    //     <form onSubmit={handleLogin} style={{ padding: '20px' }}>
    //         <input
    //             type="email"
    //             placeholder="Nhập email của bạn"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)} // Cập nhật state liên tục
    //         />
    //         <button type="submit">Đăng nhập</button>
    //     </form>
    // );

    //Cach 2
    // 1. Tạo state để lưu trữ giá trị email
    const [email, setEmail] = useState('');

    // 2. Hàm xử lý khi nhấn nút
    const handleShowMessage = () => {
        if (email === '') {
            alert("Vui lòng nhập email trước khi đăng nhập!");
        } else {
            if(!email.includes('@'))
            {
                alert("Email không đúng định dạng");

                setEmail('');

                return;
            }

            alert(`Email bạn vừa nhập là: ${email}`);
        }
    };

    return (
    <div style={{ padding: '20px' }}>
      <input
        type="email"
        placeholder="Nhập email của bạn"
        value={email} // Gắn giá trị từ state vào ô input
        onChange={(e) => setEmail(e.target.value)} // Cập nhật state khi gõ phím
      />
      
      {/* 3. Gọi hàm khi nhấn nút. Lưu ý: đổi type thành "button" để tránh reload trang */}
      <button type="button" onClick={handleShowMessage}>
        Đăng nhập
      </button>
    </div>
  );

}