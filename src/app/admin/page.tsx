"use client";

import Link from "next/link";
import { Film, ShoppingCart } from "lucide-react";

export default function page() {
  return (
    <div className="mt-40  text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-12">Admin Dashboard</h1>

      <div className="gap-8 w-full flex justify-center items-center">
        <Link href="/admin/movie">
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer shadow-lg w-100">
            <Film size={50} className="mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold mb-2">จัดการหนัง</h2>
            <p className="text-gray-400 text-sm">
              เพิ่ม แก้ไข หรือลบข้อมูลภาพยนตร์
            </p>
          </div>
        </Link>

        <Link href="/admin/order">
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer shadow-lg w-100">
            <ShoppingCart size={50} className="mb-4 text-green-500" />
            <h2 className="text-2xl font-semibold mb-2">จัดการออเดอร์</h2>
            <p className="text-gray-400 text-sm">
              ตรวจสอบรายการสั่งซื้อ และสถานะต่าง ๆ
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
