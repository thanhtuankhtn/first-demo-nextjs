"use client";
import { useRouter, useParams } from 'next/navigation';
import Link from "next/link";

export default function RouterDynamic() {

    const router = useRouter();
    const params = useParams(); // Lấy ID từ đây thay vì router.query

    return (
        <div className="p-5">
            {/* 2. Dùng optional chaining (?.) để tránh lỗi nếu params chưa kịp load */}
            <h1>Router Dynamic {params?.id}</h1>
            <Link href="/admin" className="text-blue-500 font-bold"> Dung Link Quay lai Admin</Link>

            <button onClick={() => router.push('/admin')}
                className="mt-4 bg-blue-500 text-white p-2 rounded">Quay lại Admin

            </button>
        </div>
    )
}