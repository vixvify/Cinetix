"use client";

export default function page() {
  return (
    <div className=" text-white w-full flex flex-col justify-center items-center">
      <div className="w-[50%] mt-10">
        <h1 className="text-2xl font-bold mb-6">ประวัติการซื้อตั๋วหนัง</h1>
        <div className="flex flex-col gap-5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">ธี่หยด 2</h2>
              <span className={`text-sm text-green-400`}>ชำระเงินสำเร็จ</span>
            </div>

            <div className="text-sm text-zinc-400 mt-2">
              <p>วันที่: 3/25/2026</p>
              <p>รอบฉาย:14.00</p>
              <p>ที่นั่ง: A5</p>
              <p>ราคารวม: 220 บาท</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
