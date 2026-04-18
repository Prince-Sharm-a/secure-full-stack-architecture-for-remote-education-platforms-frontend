"use client";
import { Button } from "@/components/ui/button";
import Modal from "./model";
import { GoogleIcon } from "./icon";
import { postAPI } from "@/lib/apiCall";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";  
import { useAuth } from "@/context";
import RegisterModal from "./registerModal";

export default function LoginModal() {
  const {openLogin, setLoginOpen, openRegister, setRegisterOpen, setIsLogin} = useAuth();
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const loginHandle = async (data : any ) => {
    // console.log(data)
    try {
      const res = await postAPI('/auth/login',data);
      if(res?.success){
        localStorage.setItem('token',res.data?.token);
        document.cookie = `token=${res.data?.token};`
        setIsLogin(true);
        setLoginOpen(false);
        router.push(`/${res?.data?.user?.role}/dashboard`)
      }
    } catch (error) {
      console.log("Login Error:",error);
    }
    
  }

  const registerModalHandle = () => {
    setRegisterOpen(true)
    setLoginOpen(false);
  }

  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => setLoginOpen(true)}
        className="px-4 py-2 rounded-md cursor-pointer"
      >
        Sign In
      </Button>

      {/* Modal */}
      {openLogin && (
        <Modal className="md:w-95 lg:w-150" setOpen={setLoginOpen}>

            {/* Close Button */}
            <Button
              onClick={() => setLoginOpen(false)}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              variant={"outline"}
            >
              ✕
            </Button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              Log in
            </h2>
            <div className="flex my-4 ">
              <p className="text-[14px] font-bold text-gray-300 space-x-2 ">
                <span>New User ? </span>
                <span className="text-blue-400 cursor-pointer hover:underline" onClick={registerModalHandle}>Create Account</span>
              </p>
            </div>

            <Button className="font-bold mb-4 w-full cursor-pointer"><GoogleIcon /> Continue with Google</Button>

            {/* Email */}
            <form onSubmit={handleSubmit(loginHandle)}>
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

            {/* Remember + Forgot */}
            <div className="flex justify-between text-sm mb-4">
              {/* <label>
                <input {...register('remember')} type="checkbox" className="mr-1" />
                Remember me
              </label> */}
              <span className="text-blue-500 cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Button */}
            <Button type="submit" variant={"outline"} className="w-full py-2 rounded-md cursor-pointer">
              Sign In
            </Button>
            </form>
        </Modal>
      )}
      {
        openRegister && <RegisterModal />
      }
    </>
  );
}