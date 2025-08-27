"use client";

import Image from "next/image";
import jmb from "../../public/images/jmb.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "shohibun" && password === "shohibun123") {
      localStorage.setItem("IsLoggedIn", "true");
      router.push("/layouts/home");
    } else {
      alert("Fail Login!");
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-8/12 mb-10">
        <div className="mt-10 mb-5">
          <Image
            src={jmb}
            width={700}
            height={700}
            className="mx-auto"
            alt="jumbutron"
          />
        </div>

        <h1 className="text-4xl text-green-600 font-bold text-center">
          Welcome Back!
        </h1>

        <form onSubmit={handleLogin} className="mt-12">
          <div className="grid mx-auto w-full max-w-sm items-center gap-3">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              suppressHydrationWarning // Untuk menghilangkan error ketika melakukan render
            />
          </div>

          <div className="grid mx-auto w-full max-w-sm items-center gap-3 mt-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              suppressHydrationWarning
            />
          </div>

          <Link href="/layouts/register">
            <h5 className="text-xs text-gray-500 mt-2 text-center cursor-pointer font-bold hover:text-blue-500">
              Registration ?
            </h5>
          </Link>

          <div className="w-full flex justify-center">
            <Button
              suppressHydrationWarning
              type="submit"
              className="w-3/12 bg-green-500 mt-10 rounded-lg cursor-pointer hover:bg-green-400"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
