"use client";
import Link from "next/link";
import InputField from "@/components/TextField";
import Button from "@/components/Button";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center px-4 mt-40">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/20 shadow-xl">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form className="flex flex-col gap-4">
          <InputField
            label="Email"
            type="email"
            placeholder="กรอกอีเมล"
            className="bg-transparent"
          />

          <InputField
            label="Password"
            type="password"
            placeholder="กรอกรหัสผ่าน"
            className="bg-transparent"
          />

          <Button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3 mt-2"
          >
            Login
          </Button>
        </form>

        <div className="flex justify-center gap-2 mt-6 text-sm">
          <p className="text-white/70">Don&apos;t have an account?</p>
          <Link href="/auth/signup" className="text-sky-400 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
