"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ICreateMovie } from "@/core/domain/movie";
import { Controller } from "react-hook-form";
import InputField from "@/components/TextField";
import FileField from "@/components/FileField";
import Button from "@/components/Button";

export default function Page() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ICreateMovie>({
    mode: "onChange",
  });

  const onSubmit = (data: ICreateMovie) => {
    console.log(data);
  };

  return (
    <div className="p-8 text-white mx-auto w-[60%] mt-20">
      <h1 className="text-3xl font-bold mb-8">เพิ่มหนังใหม่</h1>

      <form
        className="bg-zinc-900 p-6 rounded-2xl shadow-lg flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <Controller
            name="poster"
            control={control}
            render={({ field }) => <FileField label="โปสเตอร์" field={field} />}
          />
        </div>

        <div className="flex flex-col gap-2">
          <InputField
            label="ชื่อหนัง"
            placeholder="เช่น Avengers: Endgame"
            {...register("name", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <InputField
            label="ความยาว (นาที)"
            type="number"
            {...register("duration", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <InputField
            label="วันที่ฉาย"
            type="date"
            {...register("release", { required: true })}
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <Link href="/admin/movie">
            <Button variant="secondary">ยกเลิก</Button>
          </Link>

          <Button type="submit" disabled={!isValid}>
            บันทึก
          </Button>
        </div>
      </form>
    </div>
  );
}
