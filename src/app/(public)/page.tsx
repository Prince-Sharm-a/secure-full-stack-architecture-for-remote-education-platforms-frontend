import HomeSearchBar from "@/components/homePageSearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="">
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="lg:mb-12 md:mb-6 mb-2">
          <h2 className="font-bold lg:text-5xl md:text-3xl text-xl">Learn, Whatever You Want To!</h2>
        </div>
        <div className="lg:mb-6 md:mb-4 mb-3">
          <HomeSearchBar />
        </div>
        <div className="space-x-2">
          <Button variant={"outline"}>Neet</Button>
          <Button variant={"outline"}>Jee</Button>
          <Button variant={"outline"}>Skill Development</Button>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="bg-transparent lg:w-280 md:w-220 not-sm:w-80 rounded-md shadow shadow-zinc-700 px-4 py-3 md:px-7 md:py-6 md:text-xl">
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className="space-y-4 not-lg:space-y-2 not-md:space-x-1">
              <div className="space-y-4 not-lg:space-y-2 not-md:space-x-1">
                <h2 className="lg:text-4xl md:text-3xl text-xl font-bold">Need help with</h2>
                <h2 className="lg:text-4xl md:text-3xl text-xl text-zinc-400 font-bold">Skill Development</h2>
              </div>
              <div className="">
                <span>
                  Connect with trusted experts, anytime. Get real answers, real guidance, in real time.
                </span>
              </div>
              <div className="my-8">
              <Link href={"/teacher/courses"} prefetch={false}>
                <Button variant={"outline"} className="w-50 h-11 font-bold cursor-pointer">Explore Now</Button>
              </Link>
              </div>
            </div>
            <div>
              
            </div>
          </div>
          <div className="flex space-x-8 overflow-x-auto ">
            <Button variant={"outline"} className="w-60 h-13">1:1 Expert Sessions</Button>
            <Button variant={"outline"} className="w-60 h-13">Personalized Feed</Button>
            <Button variant={"outline"} className="w-60 h-13">Flexible & Affordable</Button>
            <Button variant={"outline"} className="w-60 h-13">Build Your Network</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="bg-transparent lg:w-280 md:w-220 not-sm:w-80 rounded-md md:text-xl flex flex-row">
          <h4 className="font-bold text-2xl">Courses</h4>
          <div className="ml-auto">
            <Button variant={"outline"} className="rounded-3xl">View All</Button>
          </div>
        </div>
        <div className="px-4 py-3 md:px-7 md:py-6 not-sm:w-80 not-md:flex not-md:overflow-x-auto md:grid md:grid-cols-3 gap-x-6 md:gap-y-6 lg:gap-x-25 lg:gap-y-10">
          <div className="h-50 w-30 md:h-90 md:w-70 flex-none rounded-2xl border border-zinc-400"></div>
          <div className="h-50 w-30 md:h-90 md:w-70 flex-none rounded-2xl border border-zinc-400"></div>
          <div className="h-50 w-30 md:h-90 md:w-70 flex-none rounded-2xl border border-zinc-400"></div>
          <div className="h-50 w-30 md:h-90 md:w-70 flex-none rounded-2xl border border-zinc-400"></div>
          <div className="h-50 w-30 md:h-90 md:w-70 flex-none rounded-2xl border border-zinc-400"></div>
          <div className="h-50 w-30 md:h-90 md:w-70 flex-none rounded-2xl border border-zinc-400"></div>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="bg-transparent lg:w-280 md:w-220 not-sm:w-80 rounded-md md:text-xl flex flex-row">
          <h4 className="font-bold text-2xl">Must Explore</h4>
        </div>
        <div className="flex px-4 py-3 md:px-7 md:py-6 not-md:grid lg:w-260 md:w-220 w-80 not-md:grid-cols-2 lg:gap-x-20 md:gap-x-10 gap-y-6 gap-x-10">
          <Link href={"#"} className="h-12 w-35 md:h-20 md:w-50 lg:w-70 rounded-2xl flex justify-center items-center bg-emerald-300 hover:bg-emerald-300/80">
            <h3 className="font-bold">Hire With Us</h3>
          </Link>
          <Link href={"#"} className="h-12 w-35 md:h-20 md:w-50 lg:w-70 rounded-2xl flex justify-center items-center bg-emerald-300 hover:bg-emerald-300/80">
            <h3 className="font-bold">Jobs For You</h3>
          </Link>
          <Link href={"#"} className="h-12 w-35 md:h-20 md:w-50 lg:w-70 rounded-2xl flex justify-center items-center bg-emerald-300 hover:bg-emerald-300/80">
            <h3 className="font-bold">Advertise With Us</h3>
          </Link>
          <Link href={"#"} className="h-12 w-35 md:h-20 md:w-50 lg:w-70 rounded-2xl flex justify-center items-center bg-emerald-300 hover:bg-emerald-300/80">
            <h3 className="font-bold">Training Programs</h3>
          </Link>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="bg-transparent lg:w-280 md:w-220 not-sm:w-80 rounded-md md:text-xl flex flex-row">
          <h4 className="font-bold text-2xl">Explore</h4>
        </div>
        <div className="px-4 py-3 md:px-7 md:py-6 lg:w-280 md:w-200 not-sm:w-80 grid grid-cols-2 gap-x-10 gap-y-5 md:gap-x-18 md:gap-y-8 lg:gap-x-25 lg:gap-y-10">
          <Link href={"#"} className="flex justify-center items-center p-2 lg:h-40 lg:w-120 md:h-25 md:w-90 h-15 w-35 rounded-2xl bg-red-200 hover:bg-red-200/80" >
            <h3 className="text-[2.5vw] font-bold">NEET</h3>
          </Link>
          <Link href={"#"} className="flex justify-center items-center p-2 lg:h-40 lg:w-120 md:h-25 md:w-90 h-15 w-35 rounded-2xl bg-green-200 hover:bg-green-200/80" >
            <h3 className="text-[2.5vw] font-bold">JEE</h3>
          </Link>
          <Link href={"#"} className="flex justify-center items-center p-2 lg:h-40 lg:w-120 md:h-25 md:w-90 h-15 w-35 rounded-2xl bg-blue-200 hover:bg-blue-200/80" >
            <h3 className="text-[2.5vw] font-bold">DSA</h3>
          </Link>
          <Link href={"#"} className="flex justify-center items-center p-2 lg:h-40 lg:w-120 md:h-25 md:w-90 h-15 w-35 rounded-2xl bg-fuchsia-200 hover:bg-fuchsia-200/80" >
            <h3 className="text-[2.5vw] font-bold">System Design</h3>
          </Link>
          <Link href={"#"} className="flex justify-center items-center p-2 lg:h-40 lg:w-120 md:h-25 md:w-90 h-15 w-35 rounded-2xl bg-orange-200 hover:bg-orange-200/80" >
            <h3 className="text-[2.5vw] font-bold">Class 10th</h3>
          </Link>
          <Link href={"#"} className="flex justify-center items-center p-2 lg:h-40 lg:w-120 md:h-25 md:w-90 h-15 w-35 rounded-2xl bg-cyan-200 hover:bg-cyan-200/80" >
            <h3 className="text-[2.5vw] font-bold">Class 12th</h3>
          </Link>
        </div>
      </div>
    </div>
    
  );
}
