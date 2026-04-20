'use client';
import { createContext } from 'react';

// 1. Tạo và Export cái kho để các file khác có thể import vào dùng
export const UserContext = createContext({
    name: "",
    setName: (v: string) => { }
});