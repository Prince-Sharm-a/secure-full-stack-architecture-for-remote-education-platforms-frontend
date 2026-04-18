"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Modal from "./model";
import { GoogleIcon } from "./icon";
import { postAPI } from "@/lib/apiCall";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context";
import { toast } from "sonner";


export default function RegisterModal() {
  const {openRegister, setRegisterOpen, setLoginOpen} = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const password = watch("password");
  const router = useRouter();

  const registerHandle = async (data : any ) => {
    // console.log(data)
    try{
      const res = await postAPI('/auth/register',{...data,name: data.email, dob:new Date()});
      console.log(res);

      if(res?.success){
        router.push(`/${res.data.role}/dashboard`);
      }
    } catch (error) {
      console.log("Register Error:",error);
    }
  }
  const onError = (errors : any) => {
    if (errors.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }
  }
  const loginModalHandle = () => {
    setLoginOpen(true);
    setRegisterOpen(false)
  }

  return (
    <>
      {/* <Button
        variant={"outline"}
        onClick={() => setRegisterOpen(true)}
        className="px-4 py-2 rounded-md cursor-pointer"
      >
        Sign Up
      </Button> */}

      {/* Modal */}
      {openRegister && (
        <Modal className="md:w-95 lg:w-150" setOpen={setRegisterOpen}>

            {/* Close Button */}
            <Button
              onClick={() => setRegisterOpen(false)}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              variant={"outline"}
            >
              ✕
            </Button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              Create Account
            </h2>
            <div className="flex my-4 ">
                <p className="text-[14px] font-bold text-gray-300 space-x-2 ">
                    <span>Existing User ? </span>
                    <span className="text-blue-400 cursor-pointer hover:underline" onClick={loginModalHandle}>Sign In</span>
                </p>
            </div>

            <Button className="font-bold mb-4 w-full cursor-pointer"><GoogleIcon /> Continue with Google</Button>

            {/* Email */}
            <form onSubmit={handleSubmit(registerHandle, onError)}>
            <input
              type="text"
              required
              {...register('email')}
              placeholder="Username or Email"
              className="w-full mb-3 px-3 py-2 border rounded-md outline-none"
            />

            {/* Password */}
            <input
              type="password"
              required
              {...register('password')}
              placeholder="Password"
              className="w-full mb-3 px-3 py-2 border rounded-md outline-none"
            />

            {/* Confirm Password */}
            <input
              type="password"
              required
              {...register('confirm_password',{
                validate: (value) => 
                  value === password || "Passwords do not match",
              })}
              placeholder="Confirm Password"
              className={`w-full mb-3 px-3 py-2 border rounded-md outline-none ${
                errors.confirm_password ? 'border-red-500' : ''
              }`}
            />

            {/* Error Message */}
            {
              errors.confirm_password && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.confirm_password.message as string}
                </p>
            )}

            {/* Remember + Forgot */}
            {/* <div className="flex justify-between text-sm mb-4">
              <label>
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <span className="text-blue-500 cursor-pointer">
                Forgot password?
              </span>
            </div> */}

            {/* Button */}
            <Button type="submit" variant={"outline"} className="w-full py-2 rounded-md cursor-pointer">
              Sign Up
            </Button>
            </form>
        </Modal>
      )}
    </>
  );
}