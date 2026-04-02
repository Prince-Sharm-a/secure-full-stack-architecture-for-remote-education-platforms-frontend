"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function LoginModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <Button
        variant={"outline"}
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-md"
      >
        Sign in
      </Button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          
          <div className=" dark:bg-black bg-white w-[350px] p-6 rounded-xl shadow-lg relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              Log in
            </h2>

            {/* Email */}
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full mb-3 px-3 py-2 border rounded-md outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 px-3 py-2 border rounded-md outline-none"
            />

            {/* Remember + Forgot */}
            <div className="flex justify-between text-sm mb-4">
              <label>
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <span className="text-blue-500 cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Button */}
            <Button variant={"outline"} className="w-full py-2 rounded-md">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </>
  );
}