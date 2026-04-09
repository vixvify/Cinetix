"use client";
import Link from "next/link";
import { TextField } from "@mui/material";

export default function page() {
  return (
    <div className="p-8 text-white mx-auto w-[60%] mt-20">
      <h1 className="text-3xl font-bold mb-8">เพิ่มหนังใหม่</h1>

      <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">โปสเตอร์</label>
          <TextField
            type="file"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{
              input: { color: "white" },
              fieldset: { borderColor: "#3f3f46" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">ชื่อหนัง</label>
          <TextField
            placeholder="เช่น Avengers: Endgame"
            variant="outlined"
            fullWidth
            sx={{
              input: { color: "white" },
              fieldset: { borderColor: "#3f3f46" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">ความยาว (นาที)</label>
          <TextField
            type="number"
            placeholder="เช่น 120"
            variant="outlined"
            fullWidth
            sx={{
              input: { color: "white" },
              fieldset: { borderColor: "#3f3f46" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">วันที่ฉาย</label>
          <TextField
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{
              input: { color: "white" },
              fieldset: { borderColor: "#3f3f46" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
            }}
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <Link href="/admin/movie">
            <button className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition">
              ยกเลิก
            </button>
          </Link>

          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}
