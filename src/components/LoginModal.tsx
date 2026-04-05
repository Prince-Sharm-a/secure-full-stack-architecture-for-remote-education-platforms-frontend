"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import GoogleIcon from "./icon/googleIcon";
import Modal from "./model";


export default function LoginModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <Button
        variant={"outline"}
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-md cursor-pointer"
      >
        Sign in
      </Button>

      {/* Modal */}
      {open && (
        <Modal className="md:w-95 lg:w-150" setOpen={setOpen}>

            {/* Close Button */}
            <Button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              variant={"outline"}
            >
              ✕
            </Button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              Log in
            </h2>

            <Button className="font-bold mb-4 w-full cursor-pointer"><GoogleIcon /> Continue with Google</Button>

            {/* Email */}
            <form onSubmit={()=>alert("Login")}>
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
            <Button variant={"outline"} className="w-full py-2 rounded-md cursor-pointer">
              Sign In
            </Button>
            </form>
        </Modal>
      )}
    </>
  );
}